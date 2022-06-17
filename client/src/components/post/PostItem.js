import { useSelector, connect } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { addLike, removeLike, deletePost } from "../../action/post";
import { PropTypes } from "prop-types";
import Spinner from "../../spinner";
import PostForm from "./PostForm";
function PostItem({ post, addLike, removeLike, deletePost, show }) {
  //when likes and unlikes are in the same array we show only one
  const { user, isLoading } = useSelector((st) => st.authReducer);
  console.log(typeof post);
  // const dispatch = useDispatch();
  return (
    <>
      {post === null ? (
        <Spinner />
      ) : (
        <>
          <div className="post bg-white p-1 my-1">
            <div>
              <Link to={`/post/${post._id}`}>
                <img className="round-img" src={post.avatar} alt={post.name} />
                <h4>{post.name}</h4>
              </Link>
            </div>
            <div>
              <p className="my-1">{post.text}</p>
              <p className="post-date">
                Posted on <Moment format="DD/MM/YYYY">{post.date}</Moment>
              </p>
              {show && (
                <>
                  {" "}
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => {
                      addLike(post._id);
                    }}
                  >
                    <i className="fa fa-thumbs-up"></i>
                    <span> {post.likes.length}</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => {
                      console.log("i ran on remove like");
                      removeLike(post._id);
                    }}
                  >
                    <i className="fa fa-thumbs-down"></i>
                    <span> </span>
                  </button>
                  {post.comments.length > 0 && (
                    <Link to={`/post/${post._id}`} className="btn btn-primary">
                      Discussion{" "}
                      <span className="comment-count">
                        {" "}
                        {post.comments.length}
                      </span>
                    </Link>
                  )}
                  {post.user === user._id && !isLoading && (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        deletePost(post._id);
                      }}
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      )}{" "}
    </>
  );
}
PostItem.defaultProps = {
  show: true,
};
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default connect(null, { addLike, removeLike, deletePost })(PostItem);
