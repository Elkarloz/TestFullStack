import axios from "axios";
export default class ApiService {
  async get(endpoint, token) {
    return await axios
      .get(`http://localhost:3001/api${endpoint}`, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        } else if (res.status === 510) {
          alert("Email already exists");
        } else if (res.status === 511) {
          alert("Email or password is incorrect");
        } else if (res.status === 512) {
          alert("User does not exist ");
        } else if (res.status === 403) {
          alert("You are not authorized to access this page");
        } else {
          alert(res.status.toJSON().message);
        }
      });
  }

  async post(endpoint, data, token) {
    return await axios
      .post(`http://localhost:3001/api${endpoint}`, data, {
        headers: { Authorization: `${token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
        if (res.status === 403) {
          console.log("no token");
        } else {
          console.log("error");
        }
      });
  }

  async put(endpoint, data, token) {
    return await axios
      .put(`http://localhost:3001/api${endpoint}`, data, {
        headers: { Authorization: `${token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
        if (res.status === 403) {
          console.log("no token");
        } else {
          console.log("error");
        }
      });
  }

  async delete(endpoint, token) {
    return await axios
      .delete(`http://localhost:3001/api${endpoint}`, {
        headers: { Authorization: `${token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
        if (res.status === 403) {
          console.log("no token");
        } else {
          console.log("error");
        }
      });
  }
}
