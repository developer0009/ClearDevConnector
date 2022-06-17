import { getProfiles } from "../action/profile";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Spinner from "../spinner";
import ProfileItem from "./ProfileItem";
import { connect } from "react-redux";
function Profiles({ getProfiles }) {
  const { profiles, isLoading } = useSelector((state) => state.profileReducer);

  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fa fa-connectdevelop"></i>
            <span> connect with developers</span>
          </p>
          {profiles.length > 0 ? (
            profiles.map((profile) => (
              <div key={profile._id}>
                <ProfileItem key={profile._id} profile={profile} />
              </div>
            ))
          ) : (
            <h4>... No Profiles Present</h4>
          )}
        </>
      )}
    </div>
  );
}

export default connect(null, { getProfiles })(Profiles);
