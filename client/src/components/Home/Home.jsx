import { useState, useEffect } from "react";
import axios from "axios";
import baseURL from "../../apis/baseUrl";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import UserInformation from "../UserInformation/UserInformation";
import TryoutList from "../TryoutList/TryoutList";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

const Home = ({ history }) => {
  // const [error, setError] = useState("");
  // const [privateData, setPrivateData] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // console.log("useEffect Home");
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get(`${baseURL}/private`, config);
        // console.log(data);
        setUserId(data.id);
        // setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        history.push("/login");
        // setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, [history]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };

  // console.log("userId", userId);

  return (
    <div>
      <Particles params={particlesOptions} className="particles" />
      <Navigation isSignedin={true} logoutHandler={logoutHandler} />
      {/* <div>{privateData} </div> */}
      {/* <button onClick={logoutHandler}>Logout</button> */}
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Logo />
          <UserInformation />
          {/* {userId} */}
        </div>
        {userId && <TryoutList userId={userId} history={history} />}
      </div>
    </div>
  );
};

export default Home;

// import Logo from "../Logo/Logo";
// import UserInformation from "../UserInformation/UserInformation";
// import { Component } from "react";
// // import AuthService from "../../services/auth.service";
// import TryoutList from "../TryoutList/TryoutList";
// import baseURL from "../../apis/baseUrl";

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     fetch(`${baseURL}/`)
//       .then((response) => response.json())
//       .then(console.log);
//   }

//   render() {
//     // const { currentUser } = this.state;
//     // const userEmail = currentUser.email;
//     // const { user, setTryoutId } = this.props;
//     return (
//       <div>
//         <div style={{ display: "flex", flexDirection: "row" }}>
//           <Logo />
//           {/* <UserInformation userId={user.id} /> */}
//           User Information
//         </div>
//         {/* <TryoutList setTryoutId={setTryoutId} user={user} /> */}
//         Tryout List
//       </div>
//     );
//   }
// }

// export default Home;
