import './App.css';
import AddPost from './features/posts/AddPost';
import PostList from './features/posts/PostList';

function App() {
  return (
    <div className="App">
      <AddPost />
      <PostList />
    </div>
  );
}

export default App;
