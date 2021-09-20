import { Component } from "react";
import baseURL from "../../apis/baseUrl";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("authToken")}`);
    const tryoutId = this.props.match.params.tryoutId;
    console.log("tryoutId", tryoutId);
    fetch(`${baseURL}/private/leaderboard/${tryoutId}`, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then(
        (users) => {
          console.log("users", users);
          this.setState({ users: users });
        },
        (error) => console.log(error)
      );
  }
  render() {
    const { users } = this.state;
    // const { tryoutId } = this.props;
    const tryoutId = this.props.match.params.tryoutId;
    const firstChar = tryoutId.charAt(0);
    const tryoutIdCapitalized =
      firstChar === "p"
        ? firstChar.toUpperCase() + tryoutId.slice(1, 7) + " " + tryoutId.slice(7)
        : firstChar.toUpperCase() + tryoutId.slice(1, 8) + " " + tryoutId.slice(8);
    return (
      <div>
        <h2>{`Peringkat Tryout ${tryoutIdCapitalized}`}</h2>
        {users.length === 0 ? (
          <p>Peringkat belum tersedia</p>
        ) : (
          <div className="pa4">
            <div className="overflow-auto">
              <table className="f6 w-100 mw8 center" cellSpacing="0">
                <thead>
                  <tr>
                    <th className="fw6 bb b--black-20 tc pb3 pr3">No</th>
                    <th className="fw6 bb b--black-20 tc pb3 pr3">Nama</th>
                    <th className="fw6 bb b--black-20 tc pb3 pr3">Provinsi</th>
                    <th className="fw6 bb b--black-20 tc pb3 pr3">TWK</th>
                    <th className="fw6 bb b--black-20 tc pb3 pr3">TIU</th>
                    <th className="fw6 bb b--black-20 tc pb3 pr3">TKP</th>
                    <th className="fw6 bb b--black-20 tc pb3 pr3">Total</th>
                    <th className="fw6 bb b--black-20 tc pb3 pr3">Keterangan</th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {users.map((user, i) => (
                    <tr key={user.user_id}>
                      <td className="pv3 pr3 bb b--black-20">{i + 1}</td>
                      <td className="pv3 pr3 bb b--black-20">{user.name}</td>
                      <td className="pv3 pr3 bb b--black-20">{user.provinsi}</td>
                      <td className="pv3 pr3 bb b--black-20">{user.twk_score}</td>
                      <td className="pv3 pr3 bb b--black-20">{user.tiu_score}</td>
                      <td className="pv3 pr3 bb b--black-20">{user.tkp_score}</td>
                      <td className="pv3 pr3 bb b--black-20">{user.total_score}</td>
                      {user.is_passed ? <td className="pv3 pr3 bb b--black-20">LULUS</td> : <td className="pv3 pr3 bb b--black-20">TIDAK LULUS</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Leaderboard;
