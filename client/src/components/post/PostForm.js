import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../action/post";
function PostForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addPost({ text }));
    setText("");
  };
  const handleChange = (evt) => {
    setText(evt.target.value);
  };
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form className="form my-1">
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
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

export default PostForm;
