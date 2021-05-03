import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './componets/Post';

function App() {

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
    <div className="App">
      {posts.map(post => (
          <Post
              likes={post.likes}
              descriptions={post.descriptions}
              imageUrl={post.image && post.image.url}
              imageName={post.image && post.image.name}
              author={post.author && post.author.username}
          />
      ))}
    </div>
  );
}

export default App;
