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
    fetch(`${baseURL}/leaderboard/${this.props.tryoutId}`)
      .then((response) => response.json())
      .then(
        (users) => {
          console.log(users);
          this.setState({ users: users });
        },
        (error) => console.log(error)
      );
  }
  render() {
    const { users } = this.state;
    const { tryoutId } = this.props;
    return (
      <div>
        <h2>{`Peringkat Tryout ${tryoutId}`}</h2>
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
