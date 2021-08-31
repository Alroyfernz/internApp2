import React from "react";
import { deletePost } from "../../actions/postAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import EllipsisText from "react-ellipsis-text";
const PostCard = ({ postItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card custom-card">
        <img
          src={`https://source.unsplash.com/collection/${postItem.id}/1600x900`}
          alt={postItem.title}
          className="card-img-top"
        />

        <button
          className="btn"
          onClick={() => dispatch(deletePost(postItem.id))}
        >
          <span className="material-icons">delete_outline</span>
        </button>
        <div className="card-body">
          <h6 className="text-secondary">{postItem.title}</h6>
          <EllipsisText text={postItem.body} length={100} />
        </div>
        <div className="card-footer">
          <Link to={`/post/${postItem.id}`} className="btn btn-dark">
            <span className="mb-1"> read more</span>
            <span className="material-icons">keyboard_arrow_right</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
