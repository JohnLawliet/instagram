import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/outline'
import {HeartIcon as HeartIconFilled} from '@heroicons/react/solid'
import { useState } from 'react'




const Post = ({id, username, userImg, img, caption}) => {
    const [showMore, setShowMore] = useState(true)

  

    return (
        <div className="bg-white my-7 border rounded-sm">
            <h1>IMA NIGGA</h1>
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
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <HeartIcon className="btn"/>
                    <ChatIcon className="btn" />
                    <PaperAirplaneIcon className="btn" />
                </div>
                <BookmarkIcon className="btn"/>
            </div>

            {/*Caption*/}
            <div className="p-5 ">
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


            {/*input box*/}
            <div>
                <form className="flex items-center p-4 space-x-2">
                    <EmojiHappyIcon className="h-7"/>
                    <input 
                    type="text" 
                    className="border-none flex-1 focus:ring-1 ring-blue-400"
                    placeholder="Add a comment..."
                    />
                    
                    <button className="font-semibold text-blue-400">Post</button>
                </form>
            </div>
        </div>
    )
}

export default Post
