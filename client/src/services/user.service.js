import authHeader from "./auth-header";
import baseURL from "../apis/baseUrl";

const API_URL = baseURL;

class UserService {
  getTryoutPage() {
    return fetch(`${API_URL}/tryout`);
  }

  getResultsPage() {
    return fetch(`${API_URL}/results`, {
      method: "get",
      headers: authHeader(),
    });
  }

  getLeaderboard() {
    return fetch(`${API_URL}/leaderboard`, {
      method: "get",
      headers: authHeader(),
    });
  }
}

export default new UserService();
