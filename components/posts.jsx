import Post from "./Post"

const DUMMY_POSTS = [
    {
        id:'123',
        username:'jonty',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: "Culpa irure velit magna ex adipisicing voluptate occaecat ad excepteur. Duis enim sit dolore sunt do. Veniam nisi ex tempor irure consequat nisi quis non est laboris aliqua ipsum ullamco. Labore ad reprehenderit aliquip anim ex tempor do. Nulla deserunt occaecat ipsum commodo deserunt id. Officia proident exercitation nulla eu."
    },
    {
        id:'123',
        username:'jonty',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: "Labore qui incididunt fugiat cupidatat officia occaecat aliqua laboris aute non anim. Nisi reprehenderit eiusmod culpa qui eu ad eiusmod occaecat minim cupidatat dolor ad enim Lorem. Amet elit culpa commodo quis enim. Non eu consequat duis reprehenderit magna fugiat. In et nulla cupidatat ea sit Lorem sint mollit id est cupidatat elit."
    },
    {
        id:'123',
        username:'jonty',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: "Minim anim incididunt sit tempor. Occaecat excepteur aute dolor aliquip. Anim cillum esse velit do culpa voluptate consequat quis fugiat ut dolore labore ad tempor."
    }
]

const Posts = () => {
    return (
        <div>
        {
            DUMMY_POSTS.map(post => (
                <Post 
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg = {post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))
        }
        </div>
    )
}

export default Posts
