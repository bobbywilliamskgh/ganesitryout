import exam from "../../images/exam.png";
import { Component } from "react";
import baseURL from "../../apis/baseUrl";

class TryoutList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userStatus: {
        isParticipant: false,
        isFinishTryout: false,
      },
      isStartButtonClicked: false,
    };
  }

  componentDidMount() {
    let userStatus = {
      isParticipant: false,
      isFinishTryout: false,
    };

    fetch(`${baseURL}/participants/${this.props.user.email}`)
      .then((response) => response.json())
      .then(
        (participant) => {
          if (participant.email) {
            console.log("participant exist");
            userStatus.isParticipant = true;
          } else {
            console.log("participant is not exist");
            userStatus.isParticipant = false;
          }
          fetch(`${baseURL}/results/${this.props.user.id}`)
            .then((response) => response.json())
            .then(
              (user) => {
                if (user.user_id) {
                  console.log("user has been done tryout");
                  userStatus.isFinishTryout = true;
                } else {
                  console.log("user has not finished tryout yet");
                  userStatus.isFinishTryout = false;
                }
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

  startTryout = (setTryoutId, onRouteChange) => {
    const { isParticipant, isFinishTryout } = this.state.userStatus;
    if (isParticipant && !isFinishTryout) {
      setTryoutId("4");
      onRouteChange("tryout");
    } else {
      this.setState({ isStartButtonClicked: true });
    }
  };

  render() {
    const { onRouteChange, setTryoutId } = this.props;
    const { userStatus, isStartButtonClicked } = this.state;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-100-m w-100-l mw9 shadow-5">
        <p className="pl4 tl">Akan Berlangsung</p>
        <ul className="list pl4 mt0 measure">
          <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img className="w2 h2 w3-ns h3-ns br-100" src={exam} alt="exam-icon" />
            <div className="pl3 flex-auto">
              <span className="f6 db black-70">Tryout 4</span>
              {/* <span class="f6 db black-70">Countdown</span> */}
              <div onClick={() => this.startTryout(setTryoutId, onRouteChange)} className="f4 fw6 green button center" style={{ width: "fit-content" }}>
                Mulai
              </div>
              {isStartButtonClicked ? (
                <div>
                  {userStatus.isParticipant ? <p></p> : <p className="red">Kamu belum menyelesaikan persyaratan</p>}
                  {userStatus.isFinishTryout ? <p className="red">Kamu hanya boleh 1 kali tryout</p> : <p></p>}
                </div>
              ) : (
                <div></div>
              )}

              <div
                onClick={() => {
                  setTryoutId("4");
                  onRouteChange("leaderboard");
                }}
                className="f4 fw6 green button center"
                href="tryout"
                style={{ width: "fit-content" }}
              >
                Peringkat
              </div>
            </div>
          </li>
        </ul>
        <p className="pl4 tl">Pernah Berlangsung</p>
        <ul className="list pl4 mt0 measure">
          <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img className="w2 h2 w3-ns h3-ns br-100" src={exam} alt="exam-icon" />
            <div className="pl3 flex-auto">
              <span className="f6 db black-70">Tryout 1</span>
              <span className="f6 db black-70">01/01/2021</span>
            </div>
            <div>
              <a href="tel:" className="f6 link blue hover-dark-gray">
                {/* Lihat */}
              </a>
            </div>
          </li>
          <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img className="w2 h2 w3-ns h3-ns br-100" src={exam} alt="exam-icon" />
            <div className="pl3 flex-auto">
              <span className="f6 db black-70">Tryout 2</span>
              <span className="f6 db black-70">01/01/2021</span>
            </div>
            <div>
              <a href="tel:" className="f6 link blue hover-dark-gray">
                {/* Lihat */}
              </a>
            </div>
          </li>
          <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img className="w2 h2 w3-ns h3-ns br-100" src={exam} alt="exam-icon" />
            <div className="pl3 flex-auto">
              <span className="f6 db black-70">Tryout 3</span>
              <span className="f6 db black-70">01/01/2021</span>
            </div>
            <div>
              <a href="tel:" className="f6 link blue hover-dark-gray">
                {/* Lihat */}
              </a>
            </div>
          </li>
        </ul>
      </article>
    );
  }
}

export default TryoutList;
