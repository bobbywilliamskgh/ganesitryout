const AnswerChoice = ({ choiceId, choiceText, questId, onUserAnswerChange, answerChosen, isAnswerSaved, isQuestionClicked, currentAnswer }) => {
  return (
    <div className="flex items-center mb2">
      {isQuestionClicked && !isAnswerSaved ? (
        <input className="mr2" type="radio" id={choiceId} name="choice" value={choiceId} checked={false} onChange={(e) => onUserAnswerChange(e, questId)} />
      ) : isQuestionClicked && isAnswerSaved ? (
        <input
          className="mr2"
          type="radio"
          id={choiceId}
          name="choice"
          value={choiceId}
          checked={choiceId === answerChosen ? true : false}
          onChange={(e) => onUserAnswerChange(e, questId)}
        />
      ) : (
        <input
          className="mr2"
          type="radio"
          id={choiceId}
          name="choice"
          value={choiceId}
          checked={choiceId === currentAnswer ? true : false}
          onChange={(e) => onUserAnswerChange(e, questId)}
        />
      )}
      <label htmlFor={choiceId} className="lh-copy">
        {choiceText.substring(0, 5) === "https" ? <img src={choiceText} /> : <p>{`${choiceId}. ${choiceText}`}</p>}
      </label>
    </div>
  );
};

export default AnswerChoice;
