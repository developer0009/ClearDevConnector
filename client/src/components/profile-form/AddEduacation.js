import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { addEducation } from "../../action/profile";
import { useNavigate } from "react-router-dom";
function AddEducation() {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });
  const [toDateDisabled, toggleDisabled] = useState(false);
  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addEducation(formData, navigate));
  };
  return (
    <>
      <h1 className="large text-primary">Add An Education</h1>
      <p className="lead">
        <i className="fa-solid fa-code-branch"></i> Add any school or bootcamp
        that you have attended
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            required
            value={school}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Degree"
            name="degree"
            required
            value={degree}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Field Of Study"
            name="fieldofstudy"
            value={fieldofstudy}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={handleChange} />
        </div>
        <div className="form-group">
          <p>
            {" "}
            <input
              type="checkbox"
              name="current"
              value={current}
              onChange={(evt) => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
              checked={current}
            />{" "}
            Current Job
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={handleChange}
            disabled={toDateDisabled ? true : ""}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={handleChange}
          ></textarea>
        </div>{" "}
        <input
          type="submit"
          className="btn btn-primary my-1"
          onChange={handleChange}
        />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </>
  );
}

export default AddEducation;
