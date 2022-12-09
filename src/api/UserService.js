const USER_API = "https://wishboard-backend-ianv.vercel.app/api/users";

const USER_ID = "63909a5b947100621cebf1da";

class UserService {
  static async getUser() {
    try {
      const response = await fetch(`${USER_API}/${USER_ID}`);
      const user = await response.json();
      return user;
    } catch (e) {
      console.log(e);
    }
  }

  static async createUser(user) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(USER_API, options);
      const user = await response.json();
      return user;
    } catch (e) {
      console.log(e);
    }
  }

  static async editUser(user) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(USER_API, options);
      const user = await response.json();
      return user;
    } catch (e) {
      console.log(e);
    }
  }

  static async removeUser(user) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(USER_API, options);
      const user = await response.json();
      return user;
    } catch (e) {
      console.log(e);
    }
  }
}

export default UserService;
