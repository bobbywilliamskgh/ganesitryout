import { Component } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Register/Register";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import UserInformation from "./components/UserInformation/UserInformation";
import TryoutList from "./components/TryoutList/TryoutList";
import TryoutTest from "./components/TryoutTest/TryoutTest";
import TestResult from "./components/TestResult.js/TestResult";
import Leaderboard from "./components/Leaderboard/Leaderboard";
// import TestInstruction from "./components/TestInstruction/TestInstruction";

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "signin",
      isSignedin: false,
      user: {
        id: "",
        name: "",
        email: "",
      },
      tryoutId: "1",
      score: {
        twk: 0,
        tiu: 0,
        tkp: 0,
        total: 0,
        isPassed: false,
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.user_id,
        name: data.name,
        email: data.email,
      },
    });
  };

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL)
      .then((response) => response.json())
      .then(console.log);
  }

  onRouteChange = (route) => {
    console.log("change route", route);
    if (route === "signout") {
      this.setState({ isSignedin: false });
    } else if (route === "home") {
      this.setState({ isSignedin: true });
    }
    this.setState({ route: route });
  };

  setTryoutId = (tryoutId) => {
    console.log("tryoutId", tryoutId);
    this.setState({ tryoutId: tryoutId });
  };

  countTwkScore = (userAnswers, twkAnswers) => {
    let twkScore = 0;
    for (let i = 0; i < 30; i++) {
      if (userAnswers[i].answerChosen === twkAnswers[i].answer) {
        twkScore += 5;
      }
    }
    return twkScore;
  };

  countTiuScore = (userAnswers, tiuAnswers) => {
    let tiuScore = 0;
    let j = 0;
    for (let i = 30; i < 65; i++) {
      if (userAnswers[i].answerChosen === tiuAnswers[j].answer) {
        tiuScore += 5;
      }
      j++;
    }
    return tiuScore;
  };

  countTkpScore = (userAnswers, tkpAnswers) => {
    let tkpScore = 0;
    let j = 0;
    for (let i = 65; i < 110; i++) {
      let answer = tkpAnswers[j].answer; // arrray of answer
      const userAnswer = userAnswers[i].answerChosen;
      switch (userAnswer) {
        case "A":
          tkpScore += answer[0].value;
          break;
        case "B":
          tkpScore += answer[1].value;
          break;
        case "C":
          tkpScore += answer[2].value;
          break;
        case "D":
          tkpScore += answer[3].value;
          break;
        case "E":
          tkpScore += answer[4].value;
          break;
        default:
          break;
      }
      j++;
    }
    return tkpScore;
  };

  countTotalScore = (twkScore, tiuScore, tkpScore) => {
    let totalScore = 0;
    totalScore = twkScore + tiuScore + tkpScore;
    return totalScore;
  };

  countScore = (answerKey, userAnswers) => {
    console.log("countScore", answerKey);
    const twkAnswers = answerKey.getTwkAnswers();
    const tiuAnswers = answerKey.getTiuAnswers();
    const tkpAnswers = answerKey.getTkpAnswers();
    console.log("userAnswers", userAnswers);
    console.log("twkAnswers", twkAnswers);
    console.log("tiuAnswers", tiuAnswers);
    console.log("tkpAnswers", tkpAnswers);

    // count TWK Score
    const twkScore = this.countTwkScore(userAnswers, twkAnswers);
    // count TIU Score
    const tiuScore = this.countTiuScore(userAnswers, tiuAnswers);
    // count TKP Score
    const tkpScore = this.countTkpScore(userAnswers, tkpAnswers);
    // count Total Score
    const totalScore = this.countTotalScore(twkScore, tiuScore, tkpScore);
    // Passed or Failed
    let isPassed = false;
    if (twkScore >= 65 && tiuScore >= 80 && tkpScore >= 156) {
      isPassed = true;
    }
    // score object
    const score = {
      twk: twkScore,
      tiu: tiuScore,
      tkp: tkpScore,
      total: totalScore,
      isPassed: isPassed,
    };

    console.log("twkScore", twkScore);
    console.log("tiuScore", tiuScore);
    console.log("tkpScore", tkpScore);
    console.log("totalScore", totalScore);
    console.log("isPassed", isPassed);
    this.setState({ score: { twk: twkScore, tiu: tiuScore, tkp: tkpScore, total: totalScore, isPassed: isPassed } });
    return score;
  };

  onSubmitResult = (score) => {
    console.log("onSubmitResult");
    const { user, tryoutId } = this.state;
    const userId = user.id;
    const twkScore = score.twk;
    const tiuScore = score.tiu;
    const tkpScore = score.tkp;
    const totalScore = score.total;
    const isPassed = score.isPassed;
    console.log("result", {
      user_id: userId,
      tryout_id: tryoutId,
      twk_score: twkScore,
      tiu_score: tiuScore,
      tkp_score: tkpScore,
      total_score: totalScore,
      isPassed: isPassed,
    });
    fetch("https://powerful-eyrie-55332.herokuapp.com/results", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        tryoutId: tryoutId,
        twkScore: twkScore,
        tiuScore: tiuScore,
        tkpScore: tkpScore,
        totalScore: totalScore,
        isPassed: isPassed,
      }),
    })
      .then((response) => response.json())
      .then(console.log);
  };

  render() {
    const { route, isSignedin, user, tryoutId, score } = this.state;
    return (
      <div className="App">
        <Particles params={particlesOptions} className="particles" />
        <Navigation onRouteChange={this.onRouteChange} isSignedin={isSignedin} />
        {route === "home" ? (
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Logo />
              <UserInformation userId={user.id} />
            </div>
            <TryoutList onRouteChange={this.onRouteChange} setTryoutId={this.setTryoutId} user={user} />
          </div>
        ) : route === "tryout" ? (
          <div>
            <TryoutTest tryoutId={tryoutId} onRouteChange={this.onRouteChange} countScore={this.countScore} onSubmitResult={this.onSubmitResult} />
          </div>
        ) : route === "result" ? (
          <TestResult score={score} />
        ) : route === "leaderboard" ? (
          <Leaderboard tryoutId={tryoutId} />
        ) : route === "signin" || route === "signout" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Signup loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
