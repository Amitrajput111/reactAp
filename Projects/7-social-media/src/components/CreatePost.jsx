import { useState } from "react";

const CreatePost = ({ onCreatePost }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onCreatePost(content);
      setContent("");
    }
  };

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3">
          <i className="bi bi-pencil-square me-2"></i>Create New Post
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={500}
            />
            <div className="form-text text-end">
              {content.length}/500 characters
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            <i className="bi bi-send me-2"></i>Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
