import axios from "axios";

const API = axios.create({
  baseURL: "http://3.25.255.219:5000",
});

// Register
export const registerUser = async (data) => {
  const res = await API.put("/auth/register", data);
  return res.data;
};

// login user
export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};
    
