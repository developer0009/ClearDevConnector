import React, { Fragment, useEffect } from "react";
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Alert from "./components/layouts/Alert";
import { loadUser } from "./action/auth";
import store from "./store";
import { setAuthToken } from "./utils/setAuthToken";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile-form/CreateProfile";
import EditProfile from "../../client/src/components/profile-form/EditProfile";
import AddExperience from "./components/profile-form/AddExperience";
import AddEducation from "./components/profile-form/AddEduacation";
import Profiles from "./profiles/Profiles";
import Profile from "./profiles/Profile";
import Posts from "./components/post/Posts";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Post from "./components/post/Post";
const history = createBrowserHistory({ window });
function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <HistoryRouter history={history}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <section className="container">
        <Alert />
        <Routes>
          <Route path="/login" element={<Login history={history} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route
            path="/create-profile"
            element={
              <PrivateRoute>
                <CreateProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-experience"
            element={
              <PrivateRoute>
                <AddExperience />
              </PrivateRoute>
            }
          />
          <Route
            path="/posts"
            element={
              <PrivateRoute>
                <Posts />
              </PrivateRoute>
            }
          />
          <Route
            path="/post/:id"
            element={
              <PrivateRoute>
                <Post />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-education"
            element={
              <PrivateRoute>
                <AddEducation />
              </PrivateRoute>
            }
          />

          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </section>
    </HistoryRouter>
  );
}
export default App;
