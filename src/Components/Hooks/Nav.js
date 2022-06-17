import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="nav">
            <Link to={"/"}>UseState</Link>
            <Link to={"/effect"}>UseEffect</Link>
            <Link to={"/ref"}>UseRef</Link>
            <Link to={"/context"}>UseContext</Link>
            <Link to={"/reducer"}>UseReducer</Link>
            <Link to={"/memo"}>UseMemo</Link>
            <Link to={"/callback"}>UseCallback</Link>
            <Link to={"/test"}>React.memo</Link>

            <Link to={"/params/Isha"}>UseParams</Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
