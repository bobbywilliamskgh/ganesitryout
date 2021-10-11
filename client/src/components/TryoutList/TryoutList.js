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
        {isCountDown ? <p className="pl4 tl">Akan berlangsung</p> : <p className="pl4 tl">Sedang Berlangsung</p>}

        <ul className="list pl4 mt0 measure"></ul>
        <p className="pl4 tl">Pernah Berlangsung</p>
        <ul className="list pl4 mt0 measure">
          <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img className="w2 h2 w3-ns h3-ns br-100" src={exam} alt="exam-icon" />
            <div className="pl3 flex-auto">
              <span className="b f6 db black-70">Tryout Part 1</span>
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
              <span className="b f6 db black-70">Tryout Part 2</span>
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
              <span className="b f6 db black-70">Tryout Part 3</span>
              <span className="f6 db black-70">18/06/2021</span>
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
              <span className="b f6 db black-70">Tryout Part 4</span>
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
              {/* {isCountDown ? (
                <CountDownTryoutDay stopCountDown={this.stopCountDown} />
              ) : (
                <Link
                  to={{
                    pathname: "/instruksi",
                    state: { userId: userId },
                  }}
                  className="no-underline"
                >
                  <div className="f5 fw6 dark-green button center" style={{ width: "fit-content" }}>
                    Instruksi
                  </div>
                </Link>
              )} */}

              {/* <Link to={"leaderboard/4"} className="f5 fw6 button dark-green center no-underline" style={{ width: "fit-content" }}>
                Peringkat
              </Link>
              <br /> */}
              <a
                href="https://drive.google.com/file/d/1mbLXuBf30jOXegHd3WJgo_6mRCOsWRUQ/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="f5 fw6 button dark-green center no-underline"
                style={{ width: "fit-content" }}
              >
                Kunci Jawaban
              </a>
            </div>
          </li>
          <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img className="w2 h2 w3-ns h3-ns br-100" src={exam} alt="exam-icon" />
            <div className="pl3 flex-auto">
              <span className="b f6 db black-70">Tryout Premium 1.0</span>
              <span className="f6 db black-70">17/09/2021</span>
              {/* {isCountDown ? (
                <div>
                  <CountDownTryoutDay stopCountDown={this.stopCountDown} />
                </div>
              ) : (
                <Link
                  to={{
                    pathname: "/instruksi",
                    state: { userId: userId },
                  }}
                  className="no-underline"
                >
                  <div className="f5 fw6 dark-green button center" style={{ width: "fit-content" }}>
                    Instruksi
                  </div>
                </Link>
              )} */}
              {/* Pendaftaran ditutup hari sabtu jam 23.59 */}
              {/* <a
                href="https://forms.gle/7oAahMowStD7z9C77"
                target="_blank"
                rel="noreferrer"
                className="f5 fw6 button dark-green center no-underline"
                style={{ width: "fit-content" }}
              >
                Daftar
              </a> */}
              <Link to={"leaderboard/premium1"} className="f5 fw6 button dark-green center no-underline" style={{ width: "fit-content" }}>
                Peringkat
              </Link>
            </div>
          </li>
          <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img className="w2 h2 w3-ns h3-ns br-100" src={exam} alt="exam-icon" />
            <div className="pl3 flex-auto">
              <span className="b f6 db black-70">Tryout Part 5</span>
              <span className="f6 db black-70">24/09/2021</span>
              <Link to={"leaderboard/freemium5"} className="f5 fw6 button dark-green center no-underline" style={{ width: "fit-content" }}>
                Peringkat
              </Link>
              <br />
              <a
                href="https://drive.google.com/file/d/18fKMMyXlM9VaRyfMYbRM_14TRO3BRz3H/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="f5 fw6 button dark-green center no-underline"
                style={{ width: "fit-content" }}
              >
                Kunci Jawaban
              </a>
            </div>
          </li>
          <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img className="w2 h2 w3-ns h3-ns br-100" src={exam} alt="exam-icon" />
            <div className="pl3 flex-auto">
              <span className="b f6 db black-70">Tryout Part 6</span>
              <span className="f6 db black-70">01/10/2021</span>
              <Link to={"leaderboard/freemium6"} className="f5 fw6 button dark-green center no-underline" style={{ width: "fit-content" }}>
                Peringkat
              </Link>
              <br />
              <a
                href="https://drive.google.com/file/d/1lTeZrl4h0Y9j23E26FnzGp756X1loLik/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="f5 fw6 button dark-green center no-underline"
                style={{ width: "fit-content" }}
              >
                Kunci Jawaban
              </a>
            </div>
          </li>
          <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img className="w2 h2 w3-ns h3-ns br-100" src={exam} alt="exam-icon" />
            <div className="pl3 flex-auto">
              <span className="b f6 db black-70">Tryout Part 7</span>
              <span className="f6 db black-70">08/10/2021</span>
              {/* {isCountDown ? (
                <CountDownTryoutDay stopCountDown={this.stopCountDown} />
              ) : (
                <div>
                  <Link
                    to={{
                      pathname: "/instruksi",
                      state: { userId: userId, tryoutId: "freemium7" },
                    }}
                    className="no-underline"
                  >
                    <div className="f5 fw6 dark-green button center" style={{ width: "fit-content" }}>
                      Instruksi
                    </div>
                  </Link>
                  <Link to={"leaderboard/freemium7"} className="f5 fw6 button dark-green center no-underline" style={{ width: "fit-content" }}>
                    Peringkat
                  </Link>
                </div>
              )} */}
              <Link to={"leaderboard/freemium7"} className="f5 fw6 button dark-green center no-underline" style={{ width: "fit-content" }}>
                Peringkat
              </Link>
              <br />
              <a
                href="https://drive.google.com/file/d/13HsDyYFPI784BH9Eyykbf3eGwuDusHC2/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="f5 fw6 button dark-green center no-underline"
                style={{ width: "fit-content" }}
              >
                Kunci Jawaban
              </a>
            </div>
          </li>
        </ul>
      </article>
    );
  }
}

export default TryoutList;
