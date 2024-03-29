import { useState } from "react";
import axios from "axios";
import baseURL from "../../apis/baseUrl";
import Navigation from "../Navigation/Navigation";
// import "./RegisterScreen.css";
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

const Signup = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [isSubmitClick, setIsSubmitClick] = useState(false);
  // const [error, setError] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
    // this.setState({ name: event.target.value });
  };

  const onProvinsiChange = (event) => {
    setProvinsi(event.target.value);
    // this.setState({ provinsi: event.target.value });
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
    // this.setState({ email: event.target.value });
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
    // this.setState({ password: event.target.value });
  };

  const onPasswordConfirmationChange = (event) => {
    setConfirmPassword(event.target.value);
    // console.log("confirm password", event.target.value);
    // this.setState({ passwordConfirmation: event.target.value });
  };

  const validateEmail = () => {
    // const { email } = this.state;
    var mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  };

  const passwordValidation = () => {
    // const { password, passwordConfirmation } = this.state;
    // console.log("password", password);
    // console.log("cf password", confirmpassword);
    if (password === confirmpassword && password.length >= 8) {
      // console.log("password valid");
      return true;
    } else {
      // console.log("password invalid");
      return false;
    }
  };

  const validation = () => {
    // const { name, provinsi, email, password, passwordConfirmation } = this.state;
    const isEmailValid = validateEmail();
    const isPasswordValid = passwordValidation();
    if (name && provinsi && email && password && confirmpassword && isPasswordValid && isEmailValid) {
      return true;
    } else {
      return false;
    }
  };

  const registerHandler = async () => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    console.log("submit register euy");
    const isValid = validation();

    if (!isValid) {
      console.log("registration is not valid");
      setIsSubmitClick(true);
      return;
    }
    console.log("register valid");
    try {
      console.log("try register");
      const { data } = await axios.post(
        `${baseURL}/auth/register`,
        {
          name,
          provinsi,
          email,
          password,
        },
        config
      );
      console.log("data", data);
      console.log("data token", data.token);
      localStorage.setItem("authToken", data.token);
      console.log("has done setItem");
      history.push("/");
    } catch (error) {
      console.log("error euy register");
      // setError(error.response.data.error);
      // setTimeout(() => {
      // setError("");
      // }, 5000);
    }
  };

  return (
    <div>
      <Particles params={particlesOptions} className="particles" />
      <Navigation isSignedin={false} />
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="nama-lengkap">
                  Nama Lengkap
                </label>
                <input
                  onChange={onNameChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="nama-lengkap"
                  id="nama-lengkap"
                />
                {isSubmitClick ? <div>{name.length === 0 ? <p className="ma0 red">Wajib diisi</p> : <p></p>}</div> : <p></p>}
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="asal-provinsi">
                  Asal Provinsi
                </label>
                <select
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  name="provinces"
                  id="provinces"
                  defaultValue=""
                  onChange={onProvinsiChange}
                  style={{ textAlign: "center" }}
                >
                  <option disabled className="tc"></option>
                  <option value="Aceh">Aceh</option>
                  <option value="Sumatera Utara">Sumatera Utara</option>
                  <option value="Sumatera Barat">Sumatera Barat</option>
                  <option value="Riau">Riau</option>
                  <option value="Jambi">Jambi</option>
                  <option value="Sumatera Selatan">Sumatera Selatan</option>
                  <option value="Bengkulu">Bengkulu</option>
                  <option value="Lampung">Lampung</option>
                  <option value="Kepulauan Bangka Belitung">Kepulauan Bangka Belitung</option>
                  <option value="Kepulauan Riau">Kepulauan Riau</option>
                  <option value="DKI Jakarta">DKI Jakarta</option>
                  <option value="Jawa Barat">Jawa Barat</option>
                  <option value="Jawa Tengah">Jawa Tengah</option>
                  <option value="DI Yogyakarta">DI Yogyakarta</option>
                  <option value="Jawa Timur">Jawa Timur</option>
                  <option value="Banten">Banten</option>
                  <option value="Bali">Bali</option>
                  <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                  <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                  <option value="Kalimantan Barat">Kalimantan Barat</option>
                  <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                  <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                  <option value="Kalimantan Timur">Kalimantan Timur</option>
                  <option value="Kalimantan Utara">Kalimantan Utara</option>
                  <option value="Sulawesi Utara">Sulawesi Utara</option>
                  <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                  <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                  <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                  <option value="Gorontalo">Gorontalo</option>
                  <option value="Sulawesi Barat">Sulawesi Barat</option>
                  <option value="Maluku">Maluku</option>
                  <option value="Maluku Utara">Maluku Utara</option>
                  <option value="Papua Barat">Papua Barat</option>
                  <option value="Papua">Papua</option>
                </select>
                {isSubmitClick ? <div>{provinsi.length === 0 ? <p className="ma0 red">Wajib diisi</p> : <p></p>}</div> : <p></p>}
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  onChange={onEmailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
                {isSubmitClick ? (
                  <div>
                    {email.length === 0 ? <p className="ma0 red">Wajib diisi</p> : <p></p>}
                    {!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ? <p className="ma0 red">Email tidak valid</p> : <p></p>}
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={onPasswordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
                {isSubmitClick ? (
                  <div>
                    {password.length === 0 ? <p className="ma0 red">Wajib diisi</p> : <p></p>}
                    {password.length < 8 ? <p className="ma0 red">Harus minimal 8 karakter</p> : <p></p>}
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Konfirmasi Password
                </label>
                <input
                  onChange={onPasswordConfirmationChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password-confirmation"
                  id="password-confirmation"
                />
                {isSubmitClick ? (
                  <div>
                    {confirmpassword.length === 0 ? <p className="ma0 red">Wajib diisi</p> : <p></p>}
                    {password !== confirmpassword ? <p className="ma0 red">Password tidak sama</p> : <p></p>}
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={registerHandler}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    </div>
  );
};

// import { Component } from "react";
// import baseURL from "../../apis/baseUrl";
// import AuthService from "../../services/auth.service";

// class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       provinsi: "",
//       email: "",
//       password: "",
//       passwordConfirmation: "",
//       isSubmit: false,
//     };
//   }

//   onNameChange = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   onProvinsiChange = (event) => {
//     this.setState({ provinsi: event.target.value });
//   };

//   onEmailChange = (event) => {
//     this.setState({ email: event.target.value });
//   };

//   onPasswordChange = (event) => {
//     this.setState({ password: event.target.value });
//   };

//   onPasswordConfirmationChange = (event) => {
//     console.log("confirm password", event.target.value);
//     this.setState({ passwordConfirmation: event.target.value });
//   };

//   validateEmail = () => {
//     const { email } = this.state;
//     var mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//     if (email.match(mailformat)) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   passwordValidation = () => {
//     const { password, passwordConfirmation } = this.state;
//     console.log("password", password);
//     console.log("cf password", passwordConfirmation);
//     if (password === passwordConfirmation && password.length >= 8) {
//       console.log("password valid");
//       return true;
//     } else {
//       console.log("password invalid");
//       return false;
//     }
//   };

//   validation = () => {
//     const { name, provinsi, email, password, passwordConfirmation } = this.state;
//     const isEmailValid = this.validateEmail();
//     const isPasswordValid = this.passwordValidation();
//     if (name && provinsi && email && password && passwordConfirmation && isPasswordValid && isEmailValid) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   onSubmitRegister = () => {
//     console.log("submit register");
//     console.log("fetch");
//     const isValid = this.validation();
//     if (isValid) {
//       const { name, provinsi, email, password } = this.state;
//       AuthService.register(name, email, provinsi, password).then(
//         (response) => {
//           // setState
//         },
//         (error) => {
//           // setState
//           console.log("error", error);
//         }
//       );
//       // fetch(`${baseURL}/register`, {
//       //   method: "post",
//       //   headers: { "Content-Type": "application/json" },
//       //   body: JSON.stringify({
//       //     name: this.state.name,
//       //     provinsi: this.state.provinsi,
//       //     email: this.state.email,
//       //     password: this.state.password,
//       //   }),
//       // })
//       //   .then((response) => response.json())
//       //   .then((user) => {
//       //     if (user.user_id) {
//       //       this.props.loadUser(user);
//       //       this.props.onRouteChange("home");
//       //     }
//       //   });
//     } else {
//       console.log("not valid");
//       this.setState({ isSubmit: true });
//     }
//   };

//   render() {
//     const { name, provinsi, email, password, passwordConfirmation, isSubmit } = this.state;
//     return (
//       <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
//         <main className="pa4 black-80">
//           <div className="measure">
//             <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//               <legend className="f1 fw6 ph0 mh0">Register</legend>
//               <div className="mt3">
//                 <label className="db fw6 lh-copy f6" htmlFor="nama-lengkap">
//                   Nama Lengkap
//                 </label>
//                 <input
//                   onChange={this.onNameChange}
//                   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                   type="text"
//                   name="nama-lengkap"
//                   id="nama-lengkap"
//                 />
//                 {isSubmit ? <div>{name.length === 0 ? <p className="ma0">Wajib diisi</p> : <p></p>}</div> : <p></p>}
//               </div>
//               <div className="mt3">
//                 <label className="db fw6 lh-copy f6" htmlFor="asal-provinsi">
//                   Asal Provinsi
//                 </label>
//                 <select
//                   className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                   name="provinces"
//                   id="provinces"
//                   onChange={this.onProvinsiChange}
//                   style={{ textAlign: "center" }}
//                 >
//                   <option selected disabled className="tc"></option>
//                   <option value="Aceh">Aceh</option>
//                   <option value="Sumatera Utara">Sumatera Utara</option>
//                   <option value="Sumatera Barat">Sumatera Barat</option>
//                   <option value="Riau">Riau</option>
//                   <option value="Jambi">Jambi</option>
//                   <option value="Sumatera Selatan">Sumatera Selatan</option>
//                   <option value="Bengkulu">Bengkulu</option>
//                   <option value="Lampung">Lampung</option>
//                   <option value="Kepulauan Bangka Belitung">Kepulauan Bangka Belitung</option>
//                   <option value="Kepulauan Riau">Kepulauan Riau</option>
//                   <option value="DKI Jakarta">DKI Jakarta</option>
//                   <option value="Jawa Barat">Jawa Barat</option>
//                   <option value="Jawa Tengah">Jawa Tengah</option>
//                   <option value="DI Yogyakarta">DI Yogyakarta</option>
//                   <option value="Jawa Timur">Jawa Timur</option>
//                   <option value="Banten">Banten</option>
//                   <option value="Bali">Bali</option>
//                   <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
//                   <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
//                   <option value="Kalimantan Barat">Kalimantan Barat</option>
//                   <option value="Kalimantan Tengah">Kalimantan Tengah</option>
//                   <option value="Kalimantan Selatan">Kalimantan Selatan</option>
//                   <option value="Kalimantan Timur">Kalimantan Timur</option>
//                   <option value="Kalimantan Utara">Kalimantan Utara</option>
//                   <option value="Sulawesi Utara">Sulawesi Utara</option>
//                   <option value="Sulawesi Tengah">Sulawesi Tengah</option>
//                   <option value="Sulawesi Selatan">Sulawesi Selatan</option>
//                   <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
//                   <option value="Gorontalo">Gorontalo</option>
//                   <option value="Sulawesi Barat">Sulawesi Barat</option>
//                   <option value="Maluku">Maluku</option>
//                   <option value="Maluku Utara">Maluku Utara</option>
//                   <option value="Papua Barat">Papua Barat</option>
//                   <option value="Papua">Papua</option>
//                 </select>
//                 {isSubmit ? <div>{provinsi.length === 0 ? <p className="ma0">Wajib diisi</p> : <p></p>}</div> : <p></p>}
//               </div>
//               <div className="mt3">
//                 <label className="db fw6 lh-copy f6" htmlFor="email-address">
//                   Email
//                 </label>
//                 <input
//                   onChange={this.onEmailChange}
//                   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                   type="email"
//                   name="email-address"
//                   id="email-address"
//                 />
//                 {isSubmit ? (
//                   <div>
//                     {email.length === 0 ? <p className="ma0">Wajib diisi</p> : <p></p>}
//                     {!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ? <p className="ma0">Email tidak valid</p> : <p></p>}
//                   </div>
//                 ) : (
//                   <p></p>
//                 )}
//               </div>
//               <div className="mv3">
//                 <label className="db fw6 lh-copy f6" htmlFor="password">
//                   Password
//                 </label>
//                 <input
//                   onChange={this.onPasswordChange}
//                   className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                   type="password"
//                   name="password"
//                   id="password"
//                 />
//                 {isSubmit ? (
//                   <div>
//                     {password.length === 0 ? <p className="ma0">Wajib diisi</p> : <p></p>}
//                     {password.length < 8 ? <p className="ma0">Harus minimal 8 karakter</p> : <p></p>}
//                   </div>
//                 ) : (
//                   <p></p>
//                 )}
//               </div>
//               <div className="mt3">
//                 <label className="db fw6 lh-copy f6" htmlFor="email-address">
//                   Konfirmasi Password
//                 </label>
//                 <input
//                   onChange={this.onPasswordConfirmationChange}
//                   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                   type="password"
//                   name="password-confirmation"
//                   id="password-confirmation"
//                 />
//                 {isSubmit ? (
//                   <div>
//                     {passwordConfirmation.length === 0 ? <p className="ma0">Wajib diisi</p> : <p></p>}
//                     {password !== passwordConfirmation ? <p className="ma0">Password tidak sama</p> : <p></p>}
//                   </div>
//                 ) : (
//                   <p></p>
//                 )}
//               </div>
//             </fieldset>
//             <div className="">
//               <input
//                 onClick={this.onSubmitRegister}
//                 className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
//                 type="submit"
//                 value="Register"
//               />
//             </div>
//           </div>
//         </main>
//       </article>
//     );
//   }
// }

export default Signup;
