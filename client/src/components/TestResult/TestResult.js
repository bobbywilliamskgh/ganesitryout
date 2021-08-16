import { useState, useEffect } from "react";
import axios from "axios";
import baseURL from "../../apis/baseUrl";

const TestResult = (props) => {
  const [result, setResult] = useState({});

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const userId = props.match.params.userId;
        const { data } = await axios.get(`${baseURL}/private/results/${userId}`, config);
        // console.log(data);
        if (!data.success) {
          return;
        }
        const result = data.result;
        setResult({
          userId: result.user_id,
          tryoutId: result.tryout_id,
          twk: result.twk_score,
          tiu: result.tiu_score,
          tkp: result.tkp_score,
          total: result.total_score,
          isPassed: result.is_passed,
        });
        // setUserId(data.id);
        // setPrivateData(data.data);
      } catch (error) {
        console.log("error getting results");
        // setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, [props.match.params.userId]);

  return (
    <div>
      {result.isPassed ? <p className="green f2">LULUS</p> : <p className="red f2">TIDAK LULUS</p>}
      <p className="b">{`Total Skor : ${result.total}`}</p>
      {result.twk >= 65 ? <p className="green b">{`TWK : ${result.twk}`}</p> : <p className="red b">{`TWK : ${result.twk}`}</p>}
      {result.tiu >= 80 ? <p className="green b">{`TIU : ${result.tiu}`}</p> : <p className="red b">{`TIU : ${result.tiu}`}</p>}
      {result.tkp >= 166 ? <p className="green b">{`TKP : ${result.tkp}`}</p> : <p className="red b">{`TKP : ${result.tkp}`}</p>}
    </div>
  );
};

export default TestResult;
