import React, {useEffect, useState} from 'react'
import Post from "../componets/Post";

export default () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPost = async () => {
            const response = await fetch('http://localhost:1337/posts');
            const data = await response.json();
            setPosts(data);
        };

        getPost();
    }, []);

    return (
        <div className="Home">
            {posts.map(post => (
                <Post
                    likes={post.likes}
                    description={post.description}
                    imageUrl={post.image && post.image.url}
                    imageName={post.image && post.image.name}
                    author={post.author && post.author.username}
                />
            ))}
        </div>
    );
}
