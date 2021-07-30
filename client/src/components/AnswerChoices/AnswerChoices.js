import AnswerChoice from "../AnswerChoice/AnswerChoice";

const AnswerChoices = ({ questId, answerChoices, onUserAnswerChange, answerChosen, isAnswerSaved, isQuestionClicked, currentAnswer }) => {
  console.log("answeChoices", answerChoices);
  return (
    <div className="pa4 pl0">
      <fieldset id="answer_choices" className="bn pl0">
        {answerChoices.map((ansChoice) => (
          <AnswerChoice
            key={ansChoice.getChoiceId()}
            choiceId={ansChoice.getChoiceId()}
            choiceText={ansChoice.getChoiceText()}
            questId={questId}
            onUserAnswerChange={onUserAnswerChange}
            answerChosen={answerChosen}
            isAnswerSaved={isAnswerSaved}
            isQuestionClicked={isQuestionClicked}
            currentAnswer={currentAnswer}
          />
        ))}
      </fieldset>
    </div>
  );
};

export default AnswerChoices;
