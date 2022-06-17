import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../action/profile";
import Spinner from "../spinner";

function ProfileGitHub({ username }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRepos(username));
  }, []);
  const { repos } = useSelector((state) => state.profileReducer);
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      {repos === null ? (
        <Spinner />
      ) : (
        <div>
          <h3>Git Hub Repos</h3>
          <ul>
            <li>
              <a href="github.com/developer0009/campground">Campground</a>
            </li>
            <li>
              <a href="github.com/developer0009/campground">Campground</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileGitHub;
