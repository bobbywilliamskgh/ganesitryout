import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import baseURL from "../../apis/baseUrl";
import Navigation from "../Navigation/Navigation";

const Signin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const onEmailChange = (event) => {
    setEmail(event.target.value);
    // this.setState({ signInEmail: event.target.value });
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
    // this.setState({ signInPassword: event.target.value });
  };

  const loginHandler = async () => {
    console.log("loginHandler");
    try {
      const response = await fetch(`${baseURL}/auth/login`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      // const data = await response.json();
      // console.log("login data", data);
      // localStorage.setItem("authToken", data.token);
      // history.push("/");
      const data = await response.json();
      console.log(data);
      if (data.success) {
        localStorage.setItem("authToken", data.token);
        history.push("/");
      } else {
        console.log("error login", data.message);
        setError(data.message);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    } catch (error) {
      console.log("error euy");
      setError("Terjadi kesalahan");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <Navigation isSignedin={false} />
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <span className="red">{error}</span>
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
                {/* <p className="red">{this.state.validationText}</p> */}
              </div>
            </fieldset>
            <input onClick={loginHandler} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
            <div className="lh-copy mt3">
              <Link to="/register">
                <p className="f6 link dim black db pointer">Register</p>
              </Link>
            </div>
          </div>
        </main>
      </article>
    </div>
  );
};

// class Signin extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       signInEmail: "",
//       signInPassword: "",
//       validationText: "",
//     };
//   }

//   onEmailChange = (event) => {
//     this.setState({ signInEmail: event.target.value });
//   };

//   onPasswordChange = (event) => {
//     this.setState({ signInPassword: event.target.value });
//   };

//   onSubmitSignIn = () => {
//     const { signInEmail, signInPassword } = this.state;
//     AuthService.login(signInEmail, signInPassword).then(
//       () => {
//         this.props.history("/");
//       },
//       (error) => {
//         console.log("Email atau password yang Anda masukkan salah");
//         this.setState({ validationText: "Email atau password salah" });
//       }
//     );
//   };

//   render() {
//     // const { loginUser } = this.props;
//     return (
//       <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
//         <main className="pa4 black-80">
//           <div className="measure">
//             <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//               <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
//                 <p className="red">{this.state.validationText}</p>
//               </div>
//             </fieldset>

//             <input
//               onClick={this.onSubmitSignIn}
//               className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
//               type="submit"
//               value="Sign in"
//             />

//             <div className="lh-copy mt3">
//               <p className="f6 link dim black db pointer">Register</p>
//             </div>
//           </div>
//         </main>
//       </article>
//     );
//   }
// }

export default Signin;
