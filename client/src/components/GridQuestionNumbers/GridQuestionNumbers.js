import leftArrow from "../../images/left-arrow.png";
import rightArrow from "../../images/right-arrow.png";
import QuestionNumber from "../QuestionNumber/QuestionNumber";
import { Component } from "react";

class GridQuestionNumbers extends Component {
  rowOfNumbers = (startNumber, listNumbers) => {
    const newNumbers = [];
    for (let i = startNumber; i < startNumber + 5; i++) {
      newNumbers.push(listNumbers[i]);
    }
    return newNumbers;
  };

  render() {
    const { changeQuestionNumber, prevNumber, nextNumber, numbers, num, questionNumber } = this.props;
    // console.log("numbers", numbers);
    const listNumbers = numbers.map((number) => (
      <QuestionNumber key={number.id} id={number.id} changeQuestionNumber={changeQuestionNumber} isSaved={number.isSaved} questionNumber={questionNumber} />
    ));
    // console.log("listNumbers", listNumbers);
    return (
      <article className="ma4 br3 ba b--black-10 w-100 w-100-m w-100-l h-25 mw6 tl shadow-5 flex">
        <img
          onClick={prevNumber}
          className="w2 h2"
          src={leftArrow}
          alt="left-arrow"
          style={{ flexGrow: "1", marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
        />
        {num === 100 ? (
          <div style={{ flexGrow: "2" }}>
            <div className="mw7 center ph3-ns pv3-ns">
              <div className="cf ph2-ns">{this.rowOfNumbers(num, listNumbers)}</div>
            </div>
            <div className="mw7 center ph3-ns pv3-ns">
              <div className="cf ph2-ns">{this.rowOfNumbers(num + 5, listNumbers)}</div>
            </div>
          </div>
        ) : (
          <div style={{ flexGrow: "2" }}>
            <div className="mw7 center ph3-ns pv3-ns">
              <div className="cf ph2-ns">{this.rowOfNumbers(num, listNumbers)}</div>
            </div>
            <div className="mw7 center ph3-ns pv3-ns">
              <div className="cf ph2-ns">{this.rowOfNumbers(num + 5, listNumbers)}</div>
            </div>

            <div className="mw7 center ph3-ns pv3-ns">
              <div className="cf ph2-ns">{this.rowOfNumbers(num + 10, listNumbers)}</div>
            </div>
            <div className="mw7 center ph3-ns pv3-ns">
              <div className="cf ph2-ns">{this.rowOfNumbers(num + 15, listNumbers)}</div>
            </div>
          </div>
        )}

        <img
          onClick={nextNumber}
          className="w2 h2"
          src={rightArrow}
          alt="right-arrow"
          style={{ flexGrow: "1", marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
        />
      </article>
    );
  }
}

export default GridQuestionNumbers;
