import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5500',
});

export const createSession = async (email, password) => {
  return api.post("/session", { email, password});
};

export const getUsers = async () => {
  return api.get("/users");
}