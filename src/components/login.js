import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import CompanyData from "../data/CompanyData.js";
import UserData  from "../data/UserData.js";
import '../style/login.css';

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [companyid, setcompanyid] = useState(CompanyData[2].ID);
  const [companyname, setcompanyname] = useState(CompanyData[2].CompanyName);
  const [messagetoast, setmessagetoast] = useState("");
  const [showtoast, setshowtoast] = useState("hide");

  let history = useNavigate();

  function LoginUser() {
    if (HasInvalidInput()) return;

    let loginUser = TryLogin();
    if (loginUser === null || loginUser === undefined) {
      setmessagetoast(
        "User not logged. Please check User name, Password and selected Company."
      );
      setshowtoast("show");
      return;
    }
    SetUserData(loginUser);
    SetCompanyData();
    history("/Home");
    return;
  }

  function TryLogin() {
    if (!CompanyData.some((el) => el.ID === companyid)) {
      return null;
    }
    return UserData.find(
      (el) => el.UserName === username && el.Password === password
    );
  }

  function ValidateInputUsername() {
    return username === undefined || username.trim() === "";
  }

  function ValidateInputPassword() {
    return password === undefined || password.trim() === "";
  }

  function ValidateInputCompany() {
    return companyid === undefined || companyid === null;
  }

  function HasInvalidInput() {
    if (ValidateInputUsername()) {
      setmessagetoast("User name is required field.");
      setshowtoast("show");
      return true;
    }
    if (ValidateInputPassword()) {
      setmessagetoast("Password is required field.");
      setshowtoast("show");
      return true;
    }
    if (ValidateInputCompany()) {
      setmessagetoast("Company is required field.");
      setshowtoast("show");
      return true;
    }
    return false;
  }

  function SetUserData(loginUser) {
    localStorage.setItem("userID", loginUser.ID);
    localStorage.setItem("userName", loginUser.UserName);
  }
  function SetCompanyData() {
    localStorage.setItem("companyID", companyid);
    localStorage.setItem("companyName", companyname);
  }

  return (
    <div>
      <div
        className={`toast align-items-center bg-danger text-white ${showtoast}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">{messagetoast}</div>
          <button
            className="btn-close me-2 m-auto"
            onClick={() => setshowtoast("hide")}
            aria-label="Close"
          ></button>
        </div>
      </div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="form-group mt-3">
              <label>User Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="User Name"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Company</label>
              <select
                className="form-select"
                defaultValue={companyid}
                onChange={(e) => {
                  setcompanyid(e.value);
                  setcompanyname(e.text);
                }}
                aria-label="Default select example"
              >
                {CompanyData.map((item) => (
                  <option key={item.ID} value={item.ID}>
                    {item.CompanyName}
                  </option>
                ))}
              </select>
            </div>
            <div className="d-grid gap-2 mt-3 mb-5">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  LoginUser();
                }}
              >
                Submit
              </button>
            </div>
            <div className="text-center">
              <span>Create an account? </span>
              <a href="/SignUp">Sign Up</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login
