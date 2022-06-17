import React, { useEffect } from "react";
import Spinner from "../../spinner";
import { getPosts } from "../../action/post";
import { useDispatch, useSelector } from "react-redux";
// import { Navigate } from "react-router";
import PostForm from "./PostForm";
import CommentForm from "./CommentForm";
import PostItem from "./PostItem";
function Posts(props) {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      {posts.length === 0 || isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="large text-primary">Posts</h1>
          <p className="lead">
            <i className="fa fa-user"></i> Welcome To Dev Center
          </p>

          <PostForm />
          <div className="posts">
            {posts.map((post) => (
              <>
                <PostItem post={post} key={post._id} />
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Posts;
