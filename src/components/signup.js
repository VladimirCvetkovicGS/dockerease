import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import CompanyData, {saveCompany} from "../data/CompanyData.js";
import UserData  from "../data/UserData.js";
import '../style/login.css';

function SignUp() {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [dateofbirth, setdateofbirth] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [companyid, setcompanyid] = useState(null);
    const [companyname, setcompanyname] = useState("");
    const [companycode, setcompanycode] = useState("");
    const [messagetoast, setmessagetoast] = useState("");
    const [showtoast, setshowtoast] = useState("hide");

    let history = useNavigate();

    function Register() {
        if (HasInvalidInput()) return;

        let userData = {
          firstname: firstname,
          lastname: lastname,
          dateofbirth: dateofbirth,
          username: username,
          password: password,         
        }
        let companyData = {
          companycode: companycode,
          companyname: companyname,
        }
        //TO DO
        let user = SignUp(userData);
        if(user === null || user === undefined){
          setmessagetoast("User not logged. Please check User name and Password.");
          setshowtoast("show");
          return;
        }
        //if success store data to localstorage and redirect to Home page
        SetUserData(user);
        SetCompanyData();
        history("/Home");
    }

    //TO DO - create company and user
    function SignUp() {
        return UserData.find(el => 
            el.UserName === username && el.Password === password
        );
    }

    function ValidateInputFirstName() {
        return username === undefined || username.trim() === "";
    }
    function ValidateInputLastName() {
        return username === undefined || username.trim() === "";
    }
    function ValidateInputDateOfBirth() {
        return username === undefined || username.trim() === "";
    }
    function ValidateInputUsername() {
        return username === undefined || username.trim() === "";
    }
    function ValidateInputPassword() {
        return password === undefined || password.trim() === "";
    }
    function ValidateInputCompanyName() {
      return companyid === undefined || companyid === null;
    }
    function ValidateInputCompanyCode() {
        return companyid === undefined || companyid === null;
    }

    function HasInvalidInput(){
      if (ValidateInputFirstName()){
        setmessagetoast("First Name is required field.");
        setshowtoast("show");
        return true;
    }
    if (ValidateInputLastName()){
        setmessagetoast("Last Name is required field.");
        setshowtoast("show");
        return true;
    }        
    if (ValidateInputDateOfBirth()){
        setmessagetoast("Date of Birth is required field.");
        setshowtoast("show");
        return true;
    }        
    if (ValidateInputUsername()){
      setmessagetoast("User name is required field.");
      setshowtoast("show");
      return true;
    }
    if(ValidateInputPassword()){
      setmessagetoast("Password is required field.");
      setshowtoast("show");
      return true;
    }
    if(ValidateInputCompanyName()){
      setmessagetoast("Company Name is required field.");
      setshowtoast("show");
      return true;
    }
    if(ValidateInputCompanyCode()){
      setmessagetoast("Company Code is required field.");
      setshowtoast("show");
      return true;
    }
    }

    function SetUserData(user) {
        localStorage.setItem("userID", user.ID);
        localStorage.setItem("userName", user.UserName);
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
              <h3 className="Auth-form-title">SIgnUp</h3>
              <div className="form-group mt-3">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter First Name"
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Last Name"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Date of Birth</label>
                <input
                  type="date"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={dateofbirth}
                  onChange={(e) => setdateofbirth(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter User Name"
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
                <label>Company Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Company Name"
                  value={companyname}
                  onChange={(e) => setcompanyname(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Company Code</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Company Code"
                  value={companycode}
                  onChange={(e) => setcompanycode(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3 mb-5">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => Register()}
                >
                  Submit
                </button>
              </div>
              <div className="text-center">
                <span>Have an account? </span>
                <a href="/">Log In</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default SignUp;