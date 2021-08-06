import baseURL from "../apis/baseUrl";

const API_URL = baseURL;

class AuthService {
  login(email, password) {
    console.log("authservice login");
    return fetch(`${API_URL}/auth/signin`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("user", JSON.stringify(data));
        }
        return data;
        // console.log(user);
        // if (user.user_id) {
        //   loginUser();
        //   this.props.loadUser(user);
        // }
      });
  }
  catch(error) {
    console.log("Terjadi kesalahan", error);
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, email, provinsi, password) {
    return fetch(`${API_URL}/register`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        provinsi: provinsi,
        email: email,
        password: password,
      }),
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
