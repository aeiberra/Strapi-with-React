import './App.css';
import Post from './componets/Post'

const posts = [
  {
    likes: 20,
    descriptions: 'Working on farm',
    image: {
      url: "/uploads/cropped_Tractor_546ae40f61.jpeg",
      name: "cropped-Tractor.jpeg",
    },
    author: {
      username: "AlanIberra",
    }
  },
  {
    likes: 82,
    descriptions: 'Selfie on Coworking',
    image: {
      url: "/uploads/POI_3d4ee875ff.png",
      name: "Selfie.png",
    },
    author: {
      username: "AlanIberra",
    }
  }
];

function App() {
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
