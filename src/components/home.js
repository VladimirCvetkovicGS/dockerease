import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navigation from './navigation';

function Home() {
    let history = useNavigate();

    //if no data for logged user and company in localstorage - return to login page
    useEffect(() => {
        let userID = localStorage.getItem("userID");
        let userName = localStorage.getItem("userName");
        let companyID = localStorage.getItem("companyID");
        let companyName = localStorage.getItem("companyName");
        if (userID.trim() === "" || userID === null || userID === undefined){
            history("/");
            return;
        }
        if (userName.trim() === "" || userName === null || userName === undefined){
          history("/");
          return;
        }
        if (companyID.trim() === "" || companyID === null || companyID === undefined){
          history("/");
          return;
        }
        if (companyName.trim() === "" || companyName === null || companyName === undefined){
          history("/");
          return;
        }
    }, [history]);

    return (
      <>
        <Navigation />
      </>
    );
}

export default Home;