import { Component } from "react";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";
import SelectionNumbers from "../SelectionNumbers/SelectionNumbers";

class TestContent extends Component {
  render() {
    const {
      tryoutId,
      questionNumber,
      numbers,
      userAnswers,
      currentChoice,
      changeQuestionNumber,
      saveAnswer,
      nextQuestion,
      onUserAnswerChange,
      incrementTotalAnswered,
    } = this.props;
    return (
      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <div className="fl w-100 w-100-m w-50-l pa2">
            <QuestionAnswer
              questionNumber={questionNumber}
              tryoutId={tryoutId}
              onUserAnswerChange={onUserAnswerChange}
              userAnswers={userAnswers}
              currentAnswer={currentChoice.answerChosen}
            />
          </div>
          <div className="fl w-100 w-100-m w-50-l pa2">
            <SelectionNumbers
              changeQuestionNumber={changeQuestionNumber}
              nextQuestion={nextQuestion}
              saveAnswer={saveAnswer}
              questionNumber={questionNumber}
              numbers={numbers}
              userAnswers={userAnswers}
              currentChoice={currentChoice}
              incrementTotalAnswered={incrementTotalAnswered}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TestContent;
