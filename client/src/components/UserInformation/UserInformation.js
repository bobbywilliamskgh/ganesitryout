import { Component } from "react";

class UserInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      provinsi: "",
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/info/${this.props.userId}`)
      .then((res) => res.json())
      .then(
        (user) => {
          if (user.user_id) {
            this.setState({ name: user.name, email: user.email, provinsi: user.provinsi });
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    const { name, email, provinsi } = this.state;
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
  }
}

export default UserInformation;
