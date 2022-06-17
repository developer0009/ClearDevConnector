import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../action/profile";
import Spinner from "../../spinner";
import { Link } from "react-router-dom";
import DashboardActions from "./DashboardActions";
import ShowExp from "./ShowExp";
import { connect } from "react-redux";
import { deleteAccount } from "../../action/profile";
import ShowEdu from "./ShowEdu";

import PropTypes from "prop-types";
const Dashboard = ({ deleteAccount }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const userProfile = useSelector((state) => state.profileReducer);
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  const handleClick = () => {
    deleteAccount();
  };
  //component did mount
  //dont run on re render
  //when ever redux gets a value it re rerenders
  //so we uses useEffect after the component renders it should add to redux

  return (
    <>
      {console.log(userProfile)}
      {userProfile.isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <h1 className="large text-primary">Dashboard</h1>
          <p className="lead">
            <i className="fa fa-user"> </i> Welcome {user && user.name}
          </p>
        </>
      )}
      {userProfile.profile === null ? (
        <>
          <p>You have not setup a profile, please add some info </p>
          <Link to="/create-profile" className="btn btn-primary my-1 btn-sm">
            Create Profile
          </Link>
        </>
      ) : (
        <>
          <DashboardActions />
          {userProfile.profile.experience.length > 0 ? (
            <ShowExp experience={userProfile.profile.experience} />
          ) : (
            ""
          )}
          {userProfile.profile.education.length > 0 ? (
            <ShowEdu education={userProfile.profile.education} />
          ) : (
            ""
          )}

          <div className="my-2">
            <button className="btn btn-danger " onClick={handleClick}>
              <i className="fa fa-user"></i> delete account
            </button>
          </div>
        </>
      )}
    </>
  );
};
Dashboard.propTypes = {
  deleteAccount: PropTypes.func.isRequired,
};
export default connect(null, { deleteAccount })(Dashboard);
