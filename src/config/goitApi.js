import axios from "axios";

export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export function setToken(token) {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function clearToken() {
  goitApi.defaults.headers.common.Authorization = "";
}
