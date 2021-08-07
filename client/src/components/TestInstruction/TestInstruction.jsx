import { Component } from "react";
import baseURL from "../../apis/baseUrl";

class TestInstruction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userStatus: {
        isParticipant: false,
        isFinishTryout: false,
      },
      isStartButtonClicked: false,
      isInstructionClicked: true,
    };
  }

  componentDidMount() {
    console.log("didmount");
    let userStatus = {
      isParticipant: false,
      isFinishTryout: false,
    };
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("authToken")}`);

    const data = this.props.location.state;
    if (!data) {
      console.log("data", data);

      this.setState({ isInstructionClicked: false });
      return;
    }
    console.log("data from tryoutList", data);
    const userId = data.userId;
    fetch(`${baseURL}/private/participants/${userId}`, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then(
        (data) => {
          console.log("data", data);
          if (data.success) {
            console.log("user is participant", data.participant);
            userStatus.isParticipant = true;
          } else {
            console.log("user is not participant", data.participant);
            userStatus.isParticipant = false;
          }
          fetch(`${baseURL}/private/results/${userId}`, {
            method: "GET",
            headers: myHeaders,
          })
            .then((response) => response.json())
            .then(
              (data) => {
                if (data.success) {
                  console.log("user has been done tryout", data.result);
                  userStatus.isFinishTryout = true;
                } else {
                  console.log("user has not finished tryout yet", data.result);
                  userStatus.isFinishTryout = false;
                }
                // if (user.user_id) {
                //   console.log("user has been done tryout");
                //   userStatus.isFinishTryout = true;
                // } else {
                //   console.log("user has not finished tryout yet");
                //   userStatus.isFinishTryout = false;
                // }
                this.setState({ userStatus: userStatus });
              },
              (error) => {
                console.log(error);
              }
            );
        },
        (error) => {
          console.log(error);
        }
      );
  }

  startTryout = () => {
    const { isParticipant, isFinishTryout } = this.state.userStatus;
    const { history } = this.props;
    const data = this.props.location.state;
    const userId = data.userId;
    console.log("userId in TestInstruction", userId);
    // const userId = this.props.userId;
    console.log("startTryout...");
    if (isParticipant && !isFinishTryout) {
      // history.push("/tryout/4", { userId: userId });
      history.replace("tryout/4", { userId: userId });
      // setTryoutId("4");
      // onRouteChange("tryout");
    } else {
      this.setState({ isStartButtonClicked: true });
    }
  };
  render() {
    const { userStatus, isStartButtonClicked, isInstructionClicked } = this.state;
    return (
      <div>
        <h2>Kata-kata peringatan</h2>
        <h4>Sistem Penilaian</h4>
        <h4>Jumlah soal dan Passing grade</h4>
        <div onClick={this.startTryout} className="f4 fw6 green button center" style={{ width: "fit-content" }}>
          Mulai
        </div>
        {isStartButtonClicked ? (
          !isInstructionClicked ? (
            <p className="red">Klik tombol instruksi di halaman utama terlebih dahulu</p>
          ) : (
            <div>
              {userStatus.isParticipant ? null : <p className="red">Kamu belum menyelesaikan persyaratan</p>}
              {userStatus.isFinishTryout ? <p className="red">Kamu hanya boleh 1 kali tryout</p> : null}
            </div>
          )
        ) : null}
      </div>
    );
  }
}

export default TestInstruction;
