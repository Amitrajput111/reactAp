const Post = ({ post, onLike, onDelete }) => {
  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="d-flex align-items-center">
            <div className="avatar-circle bg-primary text-white me-3">
              {post.author.charAt(0).toUpperCase()}
            </div>
            <div>
              <h6 className="card-title mb-0">{post.author}</h6>
              <small className="text-muted">
                <i className="bi bi-clock me-1"></i>
                {post.time}
              </small>
            </div>
          </div>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={onDelete}
            title="Delete post"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
        <p className="card-text">{post.content}</p>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={onLike}
          >
            <i className="bi bi-heart me-1"></i>
            Like ({post.likes})
          </button>
          <button className="btn btn-sm btn-outline-secondary">
            <i className="bi bi-chat me-1"></i>
            Comment ({post.comments})
          </button>
          <button className="btn btn-sm btn-outline-secondary">
            <i className="bi bi-share me-1"></i>
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
