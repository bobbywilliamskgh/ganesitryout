import exam from "../../images/exam.png";
import { Component } from "react";
import { Link } from "react-router-dom";
import CountDownTryoutDay from "../CountDownTryoutDay/CountDownTryoutDay";

class TryoutList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCountDown: true,
    };
  }

  stopCountDown = () => {
    console.log("stop countdown");
    this.setState({ isCountDown: false });
  };

  render() {
    // const { setTryoutId, userId } = this.props;
    const { isCountDown } = this.state;
    const { userId } = this.props;
    // const { userStatus, isStartButtonClicked } = this.state;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-100-m w-100-l mw9 shadow-5">
        <p className="pl4 tl">Akan Berlangsung</p>
        <ul className="list pl4 mt0 measure">
          <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img className="w2 h2 w3-ns h3-ns br-100" src={exam} alt="exam-icon" />
            <div className="pl3 flex-auto">
              <span className="f6 db black-70">Tryout 4</span>
              {/* <span class="f6 db black-70">Countdown</span> */}
              {/* <Link
                to={{
                  pathname: "/instruksi",
                  state: { userId: userId },
                }}
              > */}
              {/* <div className="f4 fw6 green button center" style={{ width: "fit-content" }}>
                  Instruksi
                </div> */}
              {/* </Link> */}
              {isCountDown ? (
                <CountDownTryoutDay stopCountDown={this.stopCountDown} />
              ) : (
                <Link
                  to={{
                    pathname: "/instruksi",
                    state: { userId: userId },
                  }}
                >
                  <div className="f4 fw6 green button center" style={{ width: "fit-content" }}>
                    Instruksi
                  </div>
                </Link>
              )}

              {/* <Link
                to={"leaderboard/4"}
                className="f4 fw6 green button center"
                href="tryout"
                style={{ width: "fit-content" }}
              >
                Peringkat
              </Link> */}
            </div>
          </li>
        </ul>
        <p className="pl4 tl">Pernah Berlangsung</p>
        <ul className="list pl4 mt0 measure">
          <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img className="w2 h2 w3-ns h3-ns br-100" src={exam} alt="exam-icon" />
            <div className="pl3 flex-auto">
              <span className="f6 db black-70">Tryout 1</span>
              <span className="f6 db black-70">08/05/2021</span>
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
              <span className="f6 db black-70">22/05/2021</span>
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
              <span className="f6 db black-70">18/06/2021</span>
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
