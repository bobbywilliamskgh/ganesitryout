const TestResult = ({ score }) => {
  return (
    <div>
      {score.isPassed ? <p className="green f2">LULUS</p> : <p className="red f2">TIDAK LULUS</p>}
      <p className="b">{`Total Skor : ${score.total}`}</p>
      {score.twk >= 65 ? <p className="green b">{`TWK : ${score.twk}`}</p> : <p className="red b">{`TWK : ${score.twk}`}</p>}
      {score.tiu >= 80 ? <p className="green b">{`TIU : ${score.tiu}`}</p> : <p className="red b">{`TIU : ${score.tiu}`}</p>}
      {score.tkp >= 156 ? <p className="green b">{`TKP : ${score.tkp}`}</p> : <p className="red b">{`TKP : ${score.tkp}`}</p>}
    </div>
  );
};

export default TestResult;
