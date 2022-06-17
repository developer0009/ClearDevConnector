import { getPost } from "../../action/post";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "../../spinner";
import PostItem from "./PostItem";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
function Post() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, isLoading } = useSelector((st) => st.postReducer);
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);
  return post === null || isLoading ? (
    <Spinner />
  ) : (
    <>
      <PostItem post={post} show={false} />
      <CommentForm postId={id} />
      <div className="comments">
        {post.comments.map((cmt) => (
          <CommentItem key={cmt._id} comment={cmt} postId={id} />
        ))}
      </div>
    </>
  );
}

export default Post;
