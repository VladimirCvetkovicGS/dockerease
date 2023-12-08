import React, { useRef, useState } from 'react';
import "../style/navigation.css";
import NavigationData from "../data/NavigationData";
import TabHeader from './tabheader';


function Navigation() {
  const navigationRef = useRef(NavigationData);

  const [selectedcomponent, setselectedcomponent] = useState(0);

  function changeSelection(e) {
    setselectedcomponent(e.target.value);
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="/Home">
              DockerEase
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto ">
                {navigationRef.current.map((item, i) => {
                  return (
                    <li key={i} className="nav-item">
                      <button
                        className="nav-link mx-2 navigation-button"
                        value={i}
                        onClick={(e) => changeSelection(e)}
                      >
                        {item.Text}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <ul className="navbar-nav ms-auto d-none d-lg-inline-flex"></ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="w-100 card border-0 p-4">
          <TabHeader
            component={navigationRef.current[selectedcomponent].HeaderText}
          ></TabHeader>
          <div>
            {React.createElement(
              navigationRef.current[selectedcomponent].Component
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Navigation;
