import { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Routes from "./routes";
import JoblyAPI from "./JoblyAPI";
import JoblyLocalStorage from "./Utils/JoblyLocalStorage";
import UserContext from "./Context/UserContext";
import jwt from "jsonwebtoken";
import './App.css';

function App() {
  const [token, setToken] = useState(JoblyLocalStorage.loadToken())
  const [currentUser, setCurrentUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [dataLoaded, setDataLoaded] = useState(false);

  const signup = async (signupFormData) => {
    let res = await JoblyAPI.userSignup(signupFormData);
    setToken(token => res.token);
  }

  const login = async (loginFormData) => {
    let res = await JoblyAPI.userLogin(loginFormData);
    setToken(token => res.token);
  }

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  }

  useEffect(() => {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // put the token on the Api class so it can use it to call the API.
          JoblyAPI.token = token;
          let currentUser = await JoblyAPI.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (err) {
          setCurrentUser(null);
        }
        setDataLoaded(true);
      }
    }
    JoblyLocalStorage.saveToken(token);
    getCurrentUser();
  }, [token]);

  /** Checks if a job has been applied for. */
  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  /** Apply to a job: make API call and update set of application IDs. */
  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyAPI.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  if (!dataLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}>
          <Navbar logout={logout} />
          <Routes signup={signup} login={login} logout={logout} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
