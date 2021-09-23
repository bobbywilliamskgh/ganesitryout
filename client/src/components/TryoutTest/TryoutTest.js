import { Component } from "react";
import TestInformation from "../TestInformation/TestInformation";
import CountDownTimer from "../CountDownTimer/CountDownTImer";
import TestContent from "../TestContent/TestContent";
import baseURL from "../../apis/baseUrl";
import { Prompt } from "react-router-dom";

class AnswerKey {
  tryoutId;
  twkAnswers;
  tiuAnswers;
  tkpAnswers;

  constructor() {
    this.tryoutId = "";
    this.twkAnswers = [];
    this.tiuAnswers = [];
    this.tkpAnswers = [];
  }

  setTryoutId(tryoutId) {
    this.tryoutId = tryoutId;
  }

  setTwkAnswers(twkAnswers) {
    this.twkAnswers = twkAnswers;
  }

  setTiuAnswers(tiuAnswers) {
    this.tiuAnswers = tiuAnswers;
  }

  setTkpAnswers(tkpAnswers) {
    this.tkpAnswers = tkpAnswers;
  }

  getTwkAnswers() {
    return this.twkAnswers;
  }

  getTiuAnswers() {
    return this.tiuAnswers;
  }

  getTkpAnswers() {
    return this.tkpAnswers;
  }
}

const answerKeys = [new AnswerKey(), new AnswerKey(), new AnswerKey(), new AnswerKey(), new AnswerKey(), new AnswerKey()];

class TryoutTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 1,
      totalAnswered: 0,
      numbers: [
        {
          id: 1,
          isSaved: false,
        },
        {
          id: 2,
          isSaved: false,
        },
        {
          id: 3,
          isSaved: false,
        },
        {
          id: 4,
          isSaved: false,
        },
        {
          id: 5,
          isSaved: false,
        },
        {
          id: 6,
          isSaved: false,
        },
        {
          id: 7,
          isSaved: false,
        },
        {
          id: 8,
          isSaved: false,
        },
        {
          id: 9,
          isSaved: false,
        },
        {
          id: 10,
          isSaved: false,
        },
        {
          id: 11,
          isSaved: false,
        },
        {
          id: 12,
          isSaved: false,
        },
        {
          id: 13,
          isSaved: false,
        },
        {
          id: 14,
          isSaved: false,
        },
        {
          id: 15,
          isSaved: false,
        },
        {
          id: 16,
          isSaved: false,
        },
        {
          id: 17,
          isSaved: false,
        },
        {
          id: 18,
          isSaved: false,
        },
        {
          id: 19,
          isSaved: false,
        },
        {
          id: 20,
          isSaved: false,
        },
        {
          id: 21,
          isSaved: false,
        },
        {
          id: 22,
          isSaved: false,
        },
        {
          id: 23,
          isSaved: false,
        },
        {
          id: 24,
          isSaved: false,
        },
        {
          id: 25,
          isSaved: false,
        },
        {
          id: 26,
          isSaved: false,
        },
        {
          id: 27,
          isSaved: false,
        },
        {
          id: 28,
          isSaved: false,
        },
        {
          id: 29,
          isSaved: false,
        },
        {
          id: 30,
          isSaved: false,
        },
        {
          id: 31,
          isSaved: false,
        },
        {
          id: 32,
          isSaved: false,
        },
        {
          id: 33,
          isSaved: false,
        },
        {
          id: 34,
          isSaved: false,
        },
        {
          id: 35,
          isSaved: false,
        },
        {
          id: 36,
          isSaved: false,
        },
        {
          id: 37,
          isSaved: false,
        },
        {
          id: 38,
          isSaved: false,
        },
        {
          id: 39,
          isSaved: false,
        },
        {
          id: 40,
          isSaved: false,
        },
        {
          id: 41,
          isSaved: false,
        },
        {
          id: 42,
          isSaved: false,
        },
        {
          id: 43,
          isSaved: false,
        },
        {
          id: 44,
          isSaved: false,
        },
        {
          id: 45,
          isSaved: false,
        },
        {
          id: 46,
          isSaved: false,
        },
        {
          id: 47,
          isSaved: false,
        },
        {
          id: 48,
          isSaved: false,
        },
        {
          id: 49,
          isSaved: false,
        },
        {
          id: 50,
          isSaved: false,
        },
        {
          id: 51,
          isSaved: false,
        },
        {
          id: 52,
          isSaved: false,
        },
        {
          id: 53,
          isSaved: false,
        },
        {
          id: 54,
          isSaved: false,
        },
        {
          id: 55,
          isSaved: false,
        },
        {
          id: 56,
          isSaved: false,
        },
        {
          id: 57,
          isSaved: false,
        },
        {
          id: 58,
          isSaved: false,
        },
        {
          id: 59,
          isSaved: false,
        },
        {
          id: 60,
          isSaved: false,
        },
        {
          id: 61,
          isSaved: false,
        },
        {
          id: 62,
          isSaved: false,
        },
        {
          id: 63,
          isSaved: false,
        },
        {
          id: 64,
          isSaved: false,
        },
        {
          id: 65,
          isSaved: false,
        },
        {
          id: 66,
          isSaved: false,
        },
        {
          id: 67,
          isSaved: false,
        },
        {
          id: 68,
          isSaved: false,
        },
        {
          id: 69,
          isSaved: false,
        },
        {
          id: 70,
          isSaved: false,
        },
        {
          id: 71,
          isSaved: false,
        },
        {
          id: 72,
          isSaved: false,
        },
        {
          id: 73,
          isSaved: false,
        },
        {
          id: 74,
          isSaved: false,
        },
        {
          id: 75,
          isSaved: false,
        },
        {
          id: 76,
          isSaved: false,
        },
        {
          id: 77,
          isSaved: false,
        },
        {
          id: 78,
          isSaved: false,
        },
        {
          id: 79,
          isSaved: false,
        },
        {
          id: 80,
          isSaved: false,
        },
        {
          id: 81,
          isSaved: false,
        },
        {
          id: 82,
          isSaved: false,
        },
        {
          id: 83,
          isSaved: false,
        },
        {
          id: 84,
          isSaved: false,
        },
        {
          id: 85,
          isSaved: false,
        },
        {
          id: 86,
          isSaved: false,
        },
        {
          id: 87,
          isSaved: false,
        },
        {
          id: 88,
          isSaved: false,
        },
        {
          id: 89,
          isSaved: false,
        },
        {
          id: 90,
          isSaved: false,
        },
        {
          id: 91,
          isSaved: false,
        },
        {
          id: 92,
          isSaved: false,
        },
        {
          id: 93,
          isSaved: false,
        },
        {
          id: 94,
          isSaved: false,
        },
        {
          id: 95,
          isSaved: false,
        },
        {
          id: 96,
          isSaved: false,
        },
        {
          id: 97,
          isSaved: false,
        },
        {
          id: 98,
          isSaved: false,
        },
        {
          id: 99,
          isSaved: false,
        },
        {
          id: 100,
          isSaved: false,
        },
        {
          id: 101,
          isSaved: false,
        },
        {
          id: 102,
          isSaved: false,
        },
        {
          id: 103,
          isSaved: false,
        },
        {
          id: 104,
          isSaved: false,
        },
        {
          id: 105,
          isSaved: false,
        },
        {
          id: 106,
          isSaved: false,
        },
        {
          id: 107,
          isSaved: false,
        },
        {
          id: 108,
          isSaved: false,
        },
        {
          id: 109,
          isSaved: false,
        },
        {
          id: 110,
          isSaved: false,
        },
      ],
      userAnswers: [
        {
          questId: "1",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "2",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "3",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "4",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "5",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "6",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "7",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "8",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "9",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "10",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "11",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "12",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "13",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "14",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "15",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "16",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "17",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "18",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "19",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "20",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "21",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "22",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "23",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "24",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "25",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "26",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "27",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "28",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "29",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "30",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "31",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "32",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "33",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "34",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "35",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "36",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "37",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "38",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "39",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "40",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "41",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "42",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "43",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "44",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "45",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "46",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "47",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "48",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "49",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "50",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "51",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "52",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "53",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "54",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "55",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "56",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "57",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "58",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "59",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "60",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "61",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "62",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "63",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "64",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "65",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "66",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "67",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "68",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "69",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "70",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "71",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "72",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "73",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "74",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "75",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "76",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "77",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "78",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "79",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "80",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "81",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "82",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "83",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "84",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "85",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "86",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "87",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "88",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "89",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "90",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "91",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "92",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "93",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "94",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "95",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "96",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "97",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "98",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "99",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "100",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "101",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "102",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "103",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "104",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "105",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "106",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "107",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "108",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "109",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
        {
          questId: "110",
          answerChosen: "",
          isAnswerSaved: false,
          isQuestionClicked: false,
        },
      ],
      currentChoice: {
        questId: "",
        answerChosen: "",
      },
      isNavBlock: true,
    };
  }

  onUnload = (e) => {
    // console.log("onUnload");
    // the method that will be used for both add and remove event
    // e.preventDefault();
    e.returnValue = "";
  };

  componentDidMount() {
    // console.log("didMount");
    window.addEventListener("beforeunload", this.onUnload);
  }

  componentWillUnmount() {
    // console.log("willunmount");
    window.removeEventListener("beforeunload", this.onUnload);
  }

  changeQuestionNumber = (num) => {
    // console.log("num", num);
    // console.log("changeQuestion", num);
    const newUserAnswers = this.state.userAnswers;
    newUserAnswers[num - 1].isQuestionClicked = true;
    // console.log("userAnswers after changeQuestionNumber", newUserAnswers);
    // reset currentChoice
    const currentChoice = this.state.currentChoice;
    currentChoice.questId = "";
    currentChoice.answerChosen = "";
    this.setState({ questionNumber: num, userAnswers: newUserAnswers, currentChoice: currentChoice });
  };

  saveAnswer = (number) => {
    // console.log("saveAnswer");
    // To make a mark for question that has been answered
    const numbers = this.state.numbers;
    numbers[number - 1].isSaved = true;

    // To assign currentChoice to element of userAnswers
    const newUserAnswers = this.state.userAnswers;
    const userChoice = this.state.currentChoice.answerChosen;
    newUserAnswers[number - 1].answerChosen = userChoice;
    newUserAnswers[number - 1].isAnswerSaved = true;
    // console.log("newUserAnswer", newUserAnswers);

    this.setState({ numbers: numbers, userAnswers: newUserAnswers });

    // save answer
    // const newUserAnswers = this.state.userAnswers;
    // newUserAnswers[number - 1].isAnswerSaved = true;
    // console.log("save, newUserAnswers", newUserAnswers);
    // this.setState({ userAnswers: newUserAnswers });
  };

  nextQuestion = (num) => {
    // console.log("nextQuestion", num);
    const nextNum = ++num;
    const newUserAnswers = this.state.userAnswers;
    newUserAnswers[nextNum - 1].isQuestionClicked = true;
    // console.log("nextNumber", nextNum);
    this.setState({ questionNumber: nextNum, userAnswers: newUserAnswers });
  };

  onUserAnswerChange = (event, questId) => {
    // console.log("onUserAnswerChange");
    let target = event.target;
    let userChoice = "";
    switch (target.id) {
      case "A":
        userChoice = "A";
        break;
      case "B":
        userChoice = "B";
        break;
      case "C":
        userChoice = "C";
        break;
      case "D":
        userChoice = "D";
        break;
      case "E":
        userChoice = "E";
        break;
      default:
        break;
    }
    const newUserAnswers = this.state.userAnswers;
    questId = parseInt(questId, 10);
    // newUserAnswers[questId - 1].answerChosen = userChoice;
    newUserAnswers[questId - 1].isQuestionClicked = false;
    // console.log("newUserAnswer", newUserAnswers);
    const currentChoice = this.state.currentChoice;
    questId = questId.toString(); // id
    currentChoice.questId = questId;
    currentChoice.answerChosen = userChoice;
    // console.log("currentChoice", currentChoice);
    this.setState({ userAnswers: newUserAnswers, currentChoice: currentChoice });
  };

  incrementTotalAnswered = () => {
    // console.log("incrementTotalAnswered");
    let totalAnswered = this.state.totalAnswered;
    totalAnswered++;
    this.setState({ totalAnswered: totalAnswered });
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
    // console.log("countScore", answerKey);
    const twkAnswers = answerKey.getTwkAnswers();
    const tiuAnswers = answerKey.getTiuAnswers();
    const tkpAnswers = answerKey.getTkpAnswers();
    // console.log("userAnswers", userAnswers);
    // console.log("twkAnswers", twkAnswers);
    // console.log("tiuAnswers", tiuAnswers);
    // console.log("tkpAnswers", tkpAnswers);

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
    if (twkScore >= 65 && tiuScore >= 80 && tkpScore >= 166) {
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

    // console.log("twkScore", twkScore);
    // console.log("tiuScore", tiuScore);
    // console.log("tkpScore", tkpScore);
    // console.log("totalScore", totalScore);
    // console.log("isPassed", isPassed);
    // this.setState({ score: { twk: twkScore, tiu: tiuScore, tkp: tkpScore, total: totalScore, isPassed: isPassed } });
    return score;
  };

  onSubmitResult = (score) => {
    // api calls
    // console.log("onSubmitResult");
    // const { user, tryoutId } = this.state;
    // const userId = user.id;
    const tryoutId = this.props.match.params.tryoutId;
    const data = this.props.location.state;
    // console.log("data from location state");
    const userId = data.userId;
    const twkScore = score.twk;
    const tiuScore = score.tiu;
    const tkpScore = score.tkp;
    const totalScore = score.total;
    const isPassed = score.isPassed;
    // console.log("result", {
    //   user_id: userId,
    //   tryout_id: tryoutId,
    //   twk_score: twkScore,
    //   tiu_score: tiuScore,
    //   tkp_score: tkpScore,
    //   total_score: totalScore,
    //   isPassed: isPassed,
    // });
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("authToken")}`);
    fetch(`${baseURL}/private/results`, {
      method: "post",
      headers: myHeaders,
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
      .then((data) => {
        console.log("data", data);
        this.props.history.replace(`/result/${userId}`, { userId: userId });
      });
  };

  onSubmitTest = () => {
    this.setState({ isNavBlock: false });
    console.log("onSubmitTest...");
    const tryoutId = this.props.match.params.tryoutId;
    const firstChar = tryoutId.charAt(0);
    const tryoutNumber = firstChar === "p" ? tryoutId.slice(7) : tryoutId.slice(8);
    // console.log("tryoutId", tryoutId);
    const answerKey = answerKeys[parseInt(tryoutNumber, 10) - 1];
    const userAnswers = this.state.userAnswers;
    // console.log("userAnswers in onSubmitTest", userAnswers);
    const score = this.countScore(answerKey, userAnswers);
    this.onSubmitResult(score);
    // onRouteChange("result");
  };

  render() {
    console.log("render TryoutTest");
    const { totalAnswered, questionNumber, numbers, userAnswers, currentChoice, isNavBlock } = this.state;
    // const { tryoutId, onRouteChange, countScore, onSubmitResult } = this.props;
    const tryoutId = this.props.match.params.tryoutId;
    // console.log("tryoutId in TryoutTest", tryoutId);
    // const data = this.props.location.state;
    // console.log("userId in TryoutTest", data.userId);
    // populate data
    // TRYOUT Freemium 4 KEY ANSWERS
    answerKeys[3].setTryoutId("freemium4");
    answerKeys[3].setTwkAnswers([
      {
        questId: "1",
        answer: "B",
      },
      {
        questId: "2",
        answer: "B",
      },
      {
        questId: "3",
        answer: "E",
      },
      {
        questId: "4",
        answer: "C",
      },
      {
        questId: "5",
        answer: "E",
      },
      {
        questId: "6",
        answer: "E",
      },
      {
        questId: "7",
        answer: "B",
      },
      {
        questId: "8",
        answer: "A",
      },
      {
        questId: "9",
        answer: "A",
      },
      {
        questId: "10",
        answer: "A",
      },
      {
        questId: "11",
        answer: "A",
      },
      {
        questId: "12",
        answer: "E",
      },
      {
        questId: "13",
        answer: "C",
      },
      {
        questId: "14",
        answer: "A",
      },
      {
        questId: "15",
        answer: "D",
      },
      {
        questId: "16",
        answer: "E",
      },
      {
        questId: "17",
        answer: "A",
      },
      {
        questId: "18",
        answer: "C",
      },
      {
        questId: "19",
        answer: "A",
      },
      {
        questId: "20",
        answer: "D",
      },
      {
        questId: "21",
        answer: "D",
      },
      {
        questId: "22",
        answer: "E",
      },
      {
        questId: "23",
        answer: "B",
      },
      {
        questId: "24",
        answer: "B",
      },
      {
        questId: "25",
        answer: "E",
      },
      {
        questId: "26",
        answer: "E",
      },
      {
        questId: "27",
        answer: "A",
      },
      {
        questId: "28",
        answer: "D",
      },
      {
        questId: "29",
        answer: "C",
      },
      {
        questId: "30",
        answer: "D",
      },
    ]);
    answerKeys[3].setTiuAnswers([
      {
        questId: "31",
        answer: "C",
      },
      {
        questId: "32",
        answer: "D",
      },
      {
        questId: "33",
        answer: "C",
      },
      {
        questId: "34",
        answer: "A",
      },
      {
        questId: "35",
        answer: "B",
      },
      {
        questId: "36",
        answer: "E",
      },
      {
        questId: "37",
        answer: "A",
      },
      {
        questId: "38",
        answer: "E",
      },
      {
        questId: "39",
        answer: "B",
      },
      {
        questId: "40",
        answer: "B",
      },
      {
        questId: "41",
        answer: "A",
      },
      {
        questId: "42",
        answer: "C",
      },
      {
        questId: "43",
        answer: "A",
      },
      {
        questId: "44",
        answer: "B",
      },
      {
        questId: "45",
        answer: "B",
      },
      {
        questId: "46",
        answer: "C",
      },
      {
        questId: "47",
        answer: "C",
      },
      {
        questId: "48",
        answer: "E",
      },
      {
        questId: "49",
        answer: "A",
      },
      {
        questId: "50",
        answer: "B",
      },
      {
        questId: "51",
        answer: "C",
      },
      {
        questId: "52",
        answer: "A",
      },
      {
        questId: "53",
        answer: "D",
      },
      {
        questId: "54",
        answer: "C",
      },
      {
        questId: "55",
        answer: "A",
      },
      {
        questId: "56",
        answer: "D",
      },
      {
        questId: "57",
        answer: "E",
      },
      {
        questId: "58",
        answer: "C",
      },
      {
        questId: "59",
        answer: "C",
      },
      {
        questId: "60",
        answer: "E",
      },
      {
        questId: "61",
        answer: "A",
      },
      {
        questId: "62",
        answer: "D",
      },
      {
        questId: "63",
        answer: "B",
      },
      {
        questId: "64",
        answer: "A",
      },
      {
        questId: "65",
        answer: "E",
      },
    ]);
    answerKeys[3].setTkpAnswers([
      {
        questId: "66",
        answer: [
          {
            choiceId: "A",
            value: 2,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 4,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "67",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "68",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "69",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 4,
          },
          {
            choiceId: "D",
            value: 3,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "70",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "71",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "72",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "73",
        answer: [
          {
            choiceId: "A",
            value: 2,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "74",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "75",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "76",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "77",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "78",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "79",
        answer: [
          {
            choiceId: "A",
            value: 2,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 4,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "80",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "81",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "82",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "83",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "84",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "85",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "86",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "87",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "88",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 4,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "89",
        answer: [
          {
            choiceId: "A",
            value: 2,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 3,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "90",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "91",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "92",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 4,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "93",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "94",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "95",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 4,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "96",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 3,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "97",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "98",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "99",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "100",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "101",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 3,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "102",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "103",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "104",
        answer: [
          {
            choiceId: "A",
            value: 2,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 4,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "105",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "106",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "107",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "108",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 3,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "109",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 3,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "110",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
    ]);

    // TRYOUT Premium 1 KEY ANSWERS
    answerKeys[4].setTryoutId("premium1");
    answerKeys[4].setTwkAnswers([
      {
        questId: "1",
        answer: "A",
      },
      {
        questId: "2",
        answer: "A",
      },
      {
        questId: "3",
        answer: "B",
      },
      {
        questId: "4",
        answer: "C",
      },
      {
        questId: "5",
        answer: "A",
      },
      {
        questId: "6",
        answer: "C",
      },
      {
        questId: "7",
        answer: "A",
      },
      {
        questId: "8",
        answer: "A",
      },
      {
        questId: "9",
        answer: "D",
      },
      {
        questId: "10",
        answer: "C",
      },
      {
        questId: "11",
        answer: "A",
      },
      {
        questId: "12",
        answer: "C",
      },
      {
        questId: "13",
        answer: "A",
      },
      {
        questId: "14",
        answer: "D",
      },
      {
        questId: "15",
        answer: "D",
      },
      {
        questId: "16",
        answer: "D",
      },
      {
        questId: "17",
        answer: "A",
      },
      {
        questId: "18",
        answer: "A",
      },
      {
        questId: "19",
        answer: "B",
      },
      {
        questId: "20",
        answer: "E",
      },
      {
        questId: "21",
        answer: "B",
      },
      {
        questId: "22",
        answer: "D",
      },
      {
        questId: "23",
        answer: "B",
      },
      {
        questId: "24",
        answer: "C",
      },
      {
        questId: "25",
        answer: "B",
      },
      {
        questId: "26",
        answer: "B",
      },
      {
        questId: "27",
        answer: "B",
      },
      {
        questId: "28",
        answer: "A",
      },
      {
        questId: "29",
        answer: "E",
      },
      {
        questId: "30",
        answer: "A",
      },
    ]);
    answerKeys[4].setTiuAnswers([
      {
        questId: "31",
        answer: "B",
      },
      {
        questId: "32",
        answer: "C",
      },
      {
        questId: "33",
        answer: "B",
      },
      {
        questId: "34",
        answer: "A",
      },
      {
        questId: "35",
        answer: "B",
      },
      {
        questId: "36",
        answer: "B",
      },
      {
        questId: "37",
        answer: "A",
      },
      {
        questId: "38",
        answer: "A",
      },
      {
        questId: "39",
        answer: "D",
      },
      {
        questId: "40",
        answer: "C",
      },
      {
        questId: "41",
        answer: "D",
      },
      {
        questId: "42",
        answer: "B",
      },
      {
        questId: "43",
        answer: "D",
      },
      {
        questId: "44",
        answer: "B",
      },
      {
        questId: "45",
        answer: "C",
      },
      {
        questId: "46",
        answer: "D",
      },
      {
        questId: "47",
        answer: "A",
      },
      {
        questId: "48",
        answer: "C",
      },
      {
        questId: "49",
        answer: "A",
      },
      {
        questId: "50",
        answer: "C",
      },
      {
        questId: "51",
        answer: "C",
      },
      {
        questId: "52",
        answer: "C",
      },
      {
        questId: "53",
        answer: "A",
      },
      {
        questId: "54",
        answer: "C",
      },
      {
        questId: "55",
        answer: "A",
      },
      {
        questId: "56",
        answer: "B",
      },
      {
        questId: "57",
        answer: "B",
      },
      {
        questId: "58",
        answer: "B",
      },
      {
        questId: "59",
        answer: "D",
      },
      {
        questId: "60",
        answer: "E",
      },
      {
        questId: "61",
        answer: "C",
      },
      {
        questId: "62",
        answer: "D",
      },
      {
        questId: "63",
        answer: "C",
      },
      {
        questId: "64",
        answer: "D",
      },
      {
        questId: "65",
        answer: "A",
      },
    ]);
    answerKeys[4].setTkpAnswers([
      {
        questId: "66",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "67",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 4,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "68",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 4,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "69",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "70",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "71",
        answer: [
          {
            choiceId: "A",
            value: 2,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 3,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "72",
        answer: [
          {
            choiceId: "A",
            value: 2,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 4,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "73",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "74",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "75",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "76",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "77",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "78",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "79",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 3,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "80",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "81",
        answer: [
          {
            choiceId: "A",
            value: 2,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "82",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "83",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "84",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "85",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "86",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "87",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "88",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "89",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "90",
        answer: [
          {
            choiceId: "A",
            value: 2,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "91",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "92",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "93",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "94",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "95",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "96",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "97",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 3,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "98",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "99",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "100",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "101",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "102",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "103",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 3,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "104",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "105",
        answer: [
          {
            choiceId: "A",
            value: 2,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "106",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "107",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "108",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "109",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "110",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 3,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
    ]);

    // TRYOUT Freemium 5 KEY ANSWERS
    answerKeys[5].setTryoutId("freemium5");
    answerKeys[5].setTwkAnswers([
      {
        questId: "1",
        answer: "A",
      },
      {
        questId: "2",
        answer: "A",
      },
      {
        questId: "3",
        answer: "B",
      },
      {
        questId: "4",
        answer: "C",
      },
      {
        questId: "5",
        answer: "A",
      },
      {
        questId: "6",
        answer: "C",
      },
      {
        questId: "7",
        answer: "A",
      },
      {
        questId: "8",
        answer: "A",
      },
      {
        questId: "9",
        answer: "D",
      },
      {
        questId: "10",
        answer: "C",
      },
      {
        questId: "11",
        answer: "A",
      },
      {
        questId: "12",
        answer: "C",
      },
      {
        questId: "13",
        answer: "A",
      },
      {
        questId: "14",
        answer: "D",
      },
      {
        questId: "15",
        answer: "D",
      },
      {
        questId: "16",
        answer: "D",
      },
      {
        questId: "17",
        answer: "A",
      },
      {
        questId: "18",
        answer: "A",
      },
      {
        questId: "19",
        answer: "B",
      },
      {
        questId: "20",
        answer: "E",
      },
      {
        questId: "21",
        answer: "B",
      },
      {
        questId: "22",
        answer: "D",
      },
      {
        questId: "23",
        answer: "B",
      },
      {
        questId: "24",
        answer: "C",
      },
      {
        questId: "25",
        answer: "B",
      },
      {
        questId: "26",
        answer: "B",
      },
      {
        questId: "27",
        answer: "B",
      },
      {
        questId: "28",
        answer: "A",
      },
      {
        questId: "29",
        answer: "E",
      },
      {
        questId: "30",
        answer: "A",
      },
    ]);
    answerKeys[5].setTiuAnswers([
      {
        questId: "31",
        answer: "B",
      },
      {
        questId: "32",
        answer: "C",
      },
      {
        questId: "33",
        answer: "B",
      },
      {
        questId: "34",
        answer: "A",
      },
      {
        questId: "35",
        answer: "B",
      },
      {
        questId: "36",
        answer: "B",
      },
      {
        questId: "37",
        answer: "A",
      },
      {
        questId: "38",
        answer: "A",
      },
      {
        questId: "39",
        answer: "D",
      },
      {
        questId: "40",
        answer: "C",
      },
      {
        questId: "41",
        answer: "D",
      },
      {
        questId: "42",
        answer: "B",
      },
      {
        questId: "43",
        answer: "D",
      },
      {
        questId: "44",
        answer: "B",
      },
      {
        questId: "45",
        answer: "C",
      },
      {
        questId: "46",
        answer: "D",
      },
      {
        questId: "47",
        answer: "A",
      },
      {
        questId: "48",
        answer: "C",
      },
      {
        questId: "49",
        answer: "A",
      },
      {
        questId: "50",
        answer: "C",
      },
      {
        questId: "51",
        answer: "C",
      },
      {
        questId: "52",
        answer: "C",
      },
      {
        questId: "53",
        answer: "A",
      },
      {
        questId: "54",
        answer: "C",
      },
      {
        questId: "55",
        answer: "A",
      },
      {
        questId: "56",
        answer: "B",
      },
      {
        questId: "57",
        answer: "B",
      },
      {
        questId: "58",
        answer: "B",
      },
      {
        questId: "59",
        answer: "D",
      },
      {
        questId: "60",
        answer: "E",
      },
      {
        questId: "61",
        answer: "C",
      },
      {
        questId: "62",
        answer: "D",
      },
      {
        questId: "63",
        answer: "C",
      },
      {
        questId: "64",
        answer: "D",
      },
      {
        questId: "65",
        answer: "A",
      },
    ]);
    answerKeys[5].setTkpAnswers([
      {
        questId: "66",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "67",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 4,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "68",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 4,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "69",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "70",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "71",
        answer: [
          {
            choiceId: "A",
            value: 2,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 3,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "72",
        answer: [
          {
            choiceId: "A",
            value: 2,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 4,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "73",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "74",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "75",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "76",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "77",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "78",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "79",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 3,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "80",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "81",
        answer: [
          {
            choiceId: "A",
            value: 2,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "82",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "83",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "84",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "85",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "86",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "87",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "88",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "89",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "90",
        answer: [
          {
            choiceId: "A",
            value: 2,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "91",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "92",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 5,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 4,
          },
        ],
      },
      {
        questId: "93",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "94",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "95",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "96",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "97",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 3,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "98",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "99",
        answer: [
          {
            choiceId: "A",
            value: 3,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 2,
          },
        ],
      },
      {
        questId: "100",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 1,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "101",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "102",
        answer: [
          {
            choiceId: "A",
            value: 1,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 4,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "103",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 2,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 3,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "104",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "105",
        answer: [
          {
            choiceId: "A",
            value: 2,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 5,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "106",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "107",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 3,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 1,
          },
          {
            choiceId: "E",
            value: 5,
          },
        ],
      },
      {
        questId: "108",
        answer: [
          {
            choiceId: "A",
            value: 4,
          },
          {
            choiceId: "B",
            value: 1,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 5,
          },
          {
            choiceId: "E",
            value: 3,
          },
        ],
      },
      {
        questId: "109",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 3,
          },
          {
            choiceId: "D",
            value: 2,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
      {
        questId: "110",
        answer: [
          {
            choiceId: "A",
            value: 5,
          },
          {
            choiceId: "B",
            value: 4,
          },
          {
            choiceId: "C",
            value: 2,
          },
          {
            choiceId: "D",
            value: 3,
          },
          {
            choiceId: "E",
            value: 1,
          },
        ],
      },
    ]);

    return (
      <div>
        <Prompt when={isNavBlock} message="Anggap ini ujian asli, apakah Anda yakin ingin meninggalkan halaman ujian ?" />
        <TestInformation totalAnswered={totalAnswered} onSubmitTest={this.onSubmitTest} />
        <CountDownTimer onSubmitTest={this.onSubmitTest} />
        <TestContent
          tryoutId={tryoutId}
          questionNumber={questionNumber}
          numbers={numbers}
          userAnswers={userAnswers}
          currentChoice={currentChoice}
          changeQuestionNumber={this.changeQuestionNumber}
          saveAnswer={this.saveAnswer}
          nextQuestion={this.nextQuestion}
          onUserAnswerChange={this.onUserAnswerChange}
          incrementTotalAnswered={this.incrementTotalAnswered}
        />
      </div>
    );
  }
}

export default TryoutTest;
