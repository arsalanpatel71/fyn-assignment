import axios from "axios";

const API_URL = "http://localhost:8000/api/";

export const getComponents = () => axios.get(`${API_URL}components/`);
export const createComponent = (component) =>
  axios.post(`${API_URL}components/`, component);

export const getVehicles = () => axios.get(`${API_URL}vehicles/`);
export const createVehicle = (vehicle) =>
  axios.post(`${API_URL}vehicles/`, vehicle);

export const getIssues = () => axios.get(`${API_URL}issues/`);
export const createIssue = (issue) => axios.post(`${API_URL}issues/`, issue);

export const getRevenue = () => axios.get(`${API_URL}revenue/`);
