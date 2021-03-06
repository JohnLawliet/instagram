import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from '@firebase/firestore'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/outline'
import {HeartIcon as HeartIconFilled} from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Moment from 'react-moment'
import { db } from '../firebase'


const Post = ({id, username, userImg, img, caption}) => {
    const [showMore, setShowMore] = useState(true)
    const {data:session} = useSession()
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState([])
    const [hasLiked, setHasLiked] = useState(false)
    const [comment,setComment] = useState('')

    useEffect(
        () => 
            onSnapshot(
                query(
                    collection(db, "posts", id, "comments"),
                    orderBy("timestamp", "desc")
                ),
                snapshot => setComments(snapshot.docs)
            ) ,
        [db, id]
    )

    useEffect(() => 
        onSnapshot(
            collection(db, 'posts', id, 'likes'),
            snapshot => setLikes(snapshot.docs)            
        ),
        [db, id]
    )

    useEffect(
        () => 
        setHasLiked(
        likes.findIndex(like => (like.id === session?.user?.uid)) !== -1          
        ), 
    [likes])

    const likePost = async () => {
        if (hasLiked){
            await deleteDoc(doc(db, 'posts',id,'likes',session.user.uid))
        }
        else{
            await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
                username: session.user.username
            })
        }
    }

    const sendComment = async (e) => {
        e.preventDefault()

        // to clear the comment after hitting submit
        const commentToSend = comment
        setComment('')

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp()
        })
    }
  

    return (
        <div className="bg-white my-7 border rounded-sm">
            <div className="flex items-center p-5">
                <img src={userImg} className="rounded-full h-12 w-12 object-contain border p-1 mr-3" alt="" />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            {/*image*/}
            <img 
                src={img} className="object-cover w-full" alt=""
            />

            {/*Buttons*/}
            {
                session && (
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            {
                                hasLiked?
                                <HeartIconFilled onClick={likePost} className="btn text-red-500"/> :
                                <HeartIcon onClick={likePost} className="btn"/>
                            }
                            
                            <ChatIcon className="btn" />
                            <PaperAirplaneIcon className="btn" />
                        </div>
                        <BookmarkIcon className="btn"/>
                    </div>
                )
            }           

            {/*Caption*/}
            <div className="p-5 w-full">
                {
                    likes.length > 0 && (
                        <p className="font-bold mb-1">{likes.length} likes</p>
                    )
                }
                <p className={`${showMore? '' : 'truncate '}`}>                    
                    <span className="font-bold mr-1">{username}</span>
                    {caption}
                </p>  
                <span onClick={() => setShowMore(prev => !prev)}>
                { 
                    showMore? 'show less...' : 'show more...'
                }
                </span>
            </div>

            {/*comments*/}
            {
                comments.length > 0 && (
                    <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                    {
                        comments?.map(comment => (
                            <div
                                key={comment.id}
                                className="flex items-center space-x-2 mb-3"
                            >
                                <img 
                                    src={comment.data().userImage} 
                                    alt=""
                                    className="h-7 rounded-full"
                                />
                                <p className="text-sm flex-1">
                                <span className="font-bold">{comment.data().username}</span>{" "}{comment.data().comment}
                                </p>

                                <Moment fromNow className="pr-5 text-xs">
                                {comment.data().timestamp?.toDate()}
                                </Moment>
                            </div>
                        ))
                    }
                    </div>
                )
            }

            {/*input box*/}
            {
                session && (
                    <form className="flex items-center p-4 space-x-2">
                        <EmojiHappyIcon className="h-7"/>
                        <input 
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        type="text" 
                        className="border-none flex-1 focus:ring-1 ring-blue-400"
                        placeholder="Add a comment..."
                        />
                        
                        <button 
                            type="submit"
                            disabled={!comment.trim()}
                            onClick={e => sendComment(e)}
                            className="font-semibold text-blue-400"
                        >
                        Post
                        </button>
                    </form>
                )
            }
        </div>
    )
}

export default Post
