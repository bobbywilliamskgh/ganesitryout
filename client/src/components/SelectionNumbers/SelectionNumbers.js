import GridQuestionNumbers from "../GridQuestionNumbers/GridQuestionNumbers";
import { Component } from "react";

class SelectionNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  prevNumber = () => {
    const currentNum = this.state.num;
    if (currentNum > 0) {
      this.setState({ num: currentNum - 20 });
    }
  };

  // next list question numbers. Add all number with 20
  nextNumber = () => {
    const currentNum = this.state.num;
    if (currentNum < 100) {
      this.setState({ num: currentNum + 20 });
    }
  };

  continue = (questionNumber, nextQuestion) => {
    if (questionNumber < 110) {
      nextQuestion(questionNumber);
      if (questionNumber === 20 || questionNumber === 40 || questionNumber === 60 || questionNumber === 80 || questionNumber === 100) {
        this.nextNumber();
      }
    }
  };

  saveAndNextQuestion = (saveAnswer, nextQuestion, questionNumber, currentChoice, incrementTotalAnswered, userAnswers) => {
    // console.log("currentChoice", currentChoice);
    const answerChosen = currentChoice.answerChosen;
    let questId = currentChoice.questId;
    questId = parseInt(questId, 10);
    const isAnswerSaved = userAnswers[questionNumber - 1].isAnswerSaved;
    // console.log("isAnswerSaved", isAnswerSaved);
    // console.log("answerChosen after click save", answerChosen);
    // console.log("questId === questionNumber", questId === questionNumber);
    // could be saved if user click radio button before hit save button or if user doesn't click radio button but the answer has been saved before
    if ((questId === questionNumber && answerChosen.length !== 0) || isAnswerSaved) {
      if (!isAnswerSaved) {
        // increment total question that has been answered
        incrementTotalAnswered();
      }
      if (answerChosen.length !== 0) {
        // if answerChosen is not empty string
        // console.log("answerChosen is not empty");
        saveAnswer(questionNumber);
      }
      this.continue(questionNumber, nextQuestion);
    }
  };

  render() {
    const { num } = this.state;
    const { changeQuestionNumber, nextQuestion, saveAnswer, questionNumber, numbers, userAnswers, currentChoice, incrementTotalAnswered } = this.props;
    return (
      <div>
        <GridQuestionNumbers
          changeQuestionNumber={changeQuestionNumber}
          prevNumber={this.prevNumber}
          nextNumber={this.nextNumber}
          nextQuestion={nextQuestion}
          numbers={numbers}
          num={num}
          questionNumber={questionNumber}
        />
        <div className="flex mh4">
          <div
            onClick={() => this.saveAndNextQuestion(saveAnswer, nextQuestion, questionNumber, currentChoice, incrementTotalAnswered, userAnswers)}
            className="f6 link dim ph3 pv2 mb2 ml5 mr4 dib white bg-dark-blue button"
            href="#0"
          >
            Simpan dan Lanjutkan
          </div>
          <div onClick={() => this.continue(questionNumber, nextQuestion)} className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue button" href="#0">
            Lewatkan soal ini
          </div>
        </div>
      </div>
    );
  }
}

export default SelectionNumbers;
