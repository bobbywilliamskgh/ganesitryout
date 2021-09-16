const Question = ({ questionParagraphs }) => {
  return (
    <div>
      {!Array.isArray(questionParagraphs) ? (
        <div>{questionParagraphs.substring(0, 5) === "https" ? <img src={questionParagraphs} alt="image-question" /> : "bukan array"}</div>
      ) : (
        questionParagraphs.map((par) => (
          <div>
            <p>{par}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Question;
