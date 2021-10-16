import {onSnapshot, query, collection, orderBy} from 'firebase/firestore'
import {db} from '../firebase'
import Post from "./Post"
import { useEffect, useState } from "react"

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // onSnapshot returns a unsubscribe object
        // snapshot watches for any changes to given db
        const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot) => {
            console.log(snapshot)
            setPosts(snapshot.docs)
        })

        return unsubscribe
    }, [db])

    return (
        <div>
        {
            posts.map(post => (
                <Post 
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg = {post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                />
            ))
        }
        </div>
    )
}

export default Posts
