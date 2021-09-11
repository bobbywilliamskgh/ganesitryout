import { Component } from "react";
import axios from "axios";
import baseURL from "../../apis/baseUrl";

class TestResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {
        userId: "",
        tryoutId: "",
        twk: 0,
        tiu: 0,
        tkp: 0,
        total: 0,
        isPassed: false,
      },
    };
  }

  componentDidMount() {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    const userId = this.props.match.params.userId;
    console.log("userId...", userId);
    axios
      .get(`${baseURL}/private/results/${userId}`, config)
      .then(({ data }) => {
        // console.log(data);
        if (!data.success) {
          return;
        }
        const result = data.result;
        const newResult = {
          userId: result.user_id,
          tryoutId: result.tryout_id,
          twk: result.twk_score,
          tiu: result.tiu_score,
          tkp: result.tkp_score,
          total: result.total_score,
          isPassed: result.is_passed,
        };
        console.log("result", result);
        this.setState({
          result: newResult,
        });
        // setUserId(data.id);
        // setPrivateData(data.data);
      })
      .catch((err) => {
        console.log("error getting results");
        // setError("You are not authorized please login");
      });
  }

  render() {
    const { result } = this.state;
    return (
      <div>
        {result.isPassed ? <p className="green f2">LULUS</p> : <p className="red f2">TIDAK LULUS</p>}
        <p className="b">{`Total Skor : ${result.total}`}</p>
        {result.twk >= 65 ? <p className="green b">{`TWK : ${result.twk}`}</p> : <p className="red b">{`TWK : ${result.twk}`}</p>}
        {result.tiu >= 80 ? <p className="green b">{`TIU : ${result.tiu}`}</p> : <p className="red b">{`TIU : ${result.tiu}`}</p>}
        {result.tkp >= 166 ? <p className="green b">{`TKP : ${result.tkp}`}</p> : <p className="red b">{`TKP : ${result.tkp}`}</p>}
      </div>
    );
  }
}

export default TestResult;
