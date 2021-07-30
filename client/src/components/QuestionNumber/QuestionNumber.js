const QuestionNumber = ({ id, changeQuestionNumber, isSaved, questionNumber }) => {
  // console.log("questionNumber", questionNumber);
  return id === questionNumber ? (
    <div onClick={() => changeQuestionNumber(parseInt(id, 10))} className="fl w-20 pa2 button">
      {isSaved ? <div className="outline pv2 tc bg-gold underline b">{id}</div> : <div className="outline pv2 tc underline b">{id}</div>}
    </div>
  ) : (
    <div onClick={() => changeQuestionNumber(parseInt(id, 10))} className="fl w-20 pa2 button">
      {isSaved ? <div className="outline pv2 tc bg-gold">{id}</div> : <div className="outline pv2 tc">{id}</div>}
    </div>
  );
};

export default QuestionNumber;
