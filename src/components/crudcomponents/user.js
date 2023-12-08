import React, { useState } from 'react';
import UserData from '../../data/UserData';


function User() {
    const [users, setusers] = useState(UserData);
    const [userid, setuserid] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [personid, setpersonid] = useState("");
    const [messagetoast, setmessagetoast] = useState("");
    const [showtoast, setshowtoast] = useState("hide");

    function createUser(){
      if(HasInvalidInput()) return;

      let newUser = {
        ID: userid,
        UserName: username,
        Password: password,
        PersonID: personid,
      };

      setusers([
        ...users,
        newUser,
      ])

      resetAfterSave();
    }

    function resetAfterSave(){
      setuserid("");
      setpassword("");
      setusername("");
      setpersonid("");
    }

    function ValidateInputUserID(){
      return userid === undefined || userid.trim() === "";
    }
    function ValidateInputUsername(){
      return username === undefined || username.trim() === "";
    }
    function ValidateInputPassword(){
      return password === undefined || password.trim() === "";
    }
    function ValidateInputPersonID(){
      return personid === undefined || personid.trim() === "";
    }

    function HasInvalidInput(){
      if(ValidateInputUserID()){
        setmessagetoast("User ID is required field.");
        setshowtoast("show");
        return true;
      }
      if (ValidateInputUsername()) {
        setmessagetoast("User Name is required field.");
        setshowtoast("show");
        return true;
      }
      if(ValidateInputPassword()){
        setmessagetoast("Password is required field.");
        setshowtoast("show");
        return true;
      }
      if(ValidateInputPersonID()){
        setmessagetoast("Person ID is required field.");
        setshowtoast("show");
        return true;
      }
      return false;
    }

    return (
      <>
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
        <div className="card-body border p-4">
          <div className="row pb-3">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th className="col">ID</th>
                  <th className="col">User Name</th>
                  <th className="col">Password</th>
                  <th className="col">PersonID</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.ID}</td>
                      <td>{item.UserName}</td>
                      <td>{"*".repeat(item.Password.length)}</td>
                      <td>{item.PersonID}</td>
                      <td>
                        <a href={`/edit`}>
                          <button
                            className="btn btn-success mx-2"
                            onClick={(e) => e}
                          >
                            Update
                          </button>
                        </a>
                        <a href={`/edit`}>
                          <button
                            className="btn btn-danger mx-2"
                            onClick={(e) => e}
                          >
                            Delete
                          </button>
                        </a>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter ID"
                      onChange={(e) => setuserid(e.target.value)}
                      value={userid}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter User Name"
                      onChange={(e) => setusername(e.target.value)}
                      value={username}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                      onChange={(e) => setpassword(e.target.value)}
                      value={password}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Person ID"
                      onChange={(e) => setpersonid(e.target.value)}
                      value={personid}
                    ></input>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary mx-2"
                      onClick={(e) => createUser()}
                    >
                      Create
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
}

export default User;