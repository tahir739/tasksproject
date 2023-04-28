import axiox from "axios";

const API_URL = "/api/users/";

// Register user

const register = async (userData) => {
  const response = await axiox.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// login  user

const login = async (userData) => {
  const response = await axiox.post(API_URL + 'login', userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login
};

export default authService;
