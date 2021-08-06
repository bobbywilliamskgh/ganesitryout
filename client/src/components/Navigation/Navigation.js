import { Link } from "react-router-dom";

const Navigation = ({ isSignedin, logoutHandler }) => {
  if (isSignedin) {
    return (
      <nav>
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <div onClick={logoutHandler} className="f3 link dim black underline pa3 pointer">
            Sign Out
          </div>
        </nav>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to="/login" className="f3 link dim black underline pa3 pointer">
          Sign In
        </Link>
        <Link to="/register" className="f3 link dim black underline pa3 pointer">
          Register
        </Link>
      </nav>
    );
  }
};

export default Navigation;
