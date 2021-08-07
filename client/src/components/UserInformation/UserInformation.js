import { useState, useEffect } from "react";
import axios from "axios";
import baseURL from "../../apis/baseUrl";

const UserInformation = () => {
  // const [error, setError] = useState("");
  // const [privateData, setPrivateData] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [provinsi, setProvinsi] = useState("");

  useEffect(() => {
    // console.log("useEffect UserInformation");
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get(`${baseURL}/private/info`, config);
        // console.log("user", data.user);
        const user = data.user;
        setName(user.name);
        setEmail(user.email);
        setProvinsi(user.provinsi);
      } catch (error) {
        console.log("error fetch userInformation");
      }
    };

    fetchPrivateDate();
  }, []);

  return (
    <article className="br3 ba b--black-10 w-100 w-50-m w-100-l h-25 mw6 shadow-5 center">
      <h1 className="f6 f4-ns">Informasi Peserta</h1>
      <hr className="mw3 bb bw1 b--black-10"></hr>
      <div className="lh-copy measure center f7 f5-ns black-70">
        <p>{name}</p>
        <p>{email}</p>
        <p>{provinsi}</p>
      </div>
    </article>
  );
};

// import { Component } from "react";
// import baseURL from "../../apis/baseUrl";
// import AuthService from "../../services/auth.service";

// class UserInformation extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

// componentDidMount() {
//   fetch(`${baseURL}/info/${this.props.userId}`)
//     .then((res) => res.json())
//     .then(
//       (user) => {
//         if (user.user_id) {
//           this.setState({ name: user.name, email: user.email, provinsi: user.provinsi });
//         }
//       },
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//       (error) => {
//         console.log(error);
//       }
//     );
// }

// render() {
// const { currentUser } = this.state;
// const userEmail = currentUser.email;
//     return (
//       <article className="br3 ba b--black-10 w-100 w-50-m w-100-l h-25 mw6 shadow-5 center">
//         <h1 className="f6 f4-ns">Informasi Peserta</h1>
//         <hr className="mw3 bb bw1 b--black-10"></hr>
//         <div className="lh-copy measure center f7 f5-ns black-70">
//           {/* <p>{name}</p> */}
//           <p>{userEmail}</p>
//           {/* <p>{provinsi}</p> */}
//         </div>
//       </article>
//     );
//   }
// }

export default UserInformation;
