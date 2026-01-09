import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Amit Rajput",
      content: "Just finished building an amazing React portfolio! 🚀",
      likes: 12,
      comments: 3,
      time: "2 hours ago",
    },
    {
      id: 2,
      author: "John Doe",
      content: "Learning React hooks is so much fun! The useState and useEffect hooks make state management so elegant.",
      likes: 8,
      comments: 1,
      time: "5 hours ago",
    },
  ]);

  const handleCreatePost = (content) => {
    if (!content.trim()) return;
    const newPost = {
      id: Date.now(),
      author: "Amit Rajput",
      content: content.trim(),
      likes: 0,
      comments: 0,
      time: "Just now",
    };
    setPosts([newPost, ...posts]);
  };

  const handleLikePost = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleDeletePost = (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setPosts(posts.filter((post) => post.id !== postId));
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="main-content">
          <CreatePost onCreatePost={handleCreatePost} />
          <div className="posts-container">
            {posts.length === 0 ? (
              <div className="card shadow-sm border-0 text-center py-5">
                <div className="card-body">
                  <i className="bi bi-inbox display-4 text-muted"></i>
                  <h5 className="mt-3 text-muted">No posts yet</h5>
                  <p className="text-muted">Create your first post to get started!</p>
                </div>
              </div>
            ) : (
              posts.map((post) => (
                <Post
                  key={post.id}
                  post={post}
                  onLike={() => handleLikePost(post.id)}
                  onDelete={() => handleDeletePost(post.id)}
                />
              ))
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
