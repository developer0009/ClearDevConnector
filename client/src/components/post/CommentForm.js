import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment, removeComment } from "../../action/post";
function CommentForm({ postId }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addComment(postId, { text }));
    setText("");
  };
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave a comment</h3>
      </div>
      <form className="form my-1">
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="add a comment"
          value={text}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="submit"
          className="btn btn-dark my-1"
          value="Submit"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default CommentForm;
