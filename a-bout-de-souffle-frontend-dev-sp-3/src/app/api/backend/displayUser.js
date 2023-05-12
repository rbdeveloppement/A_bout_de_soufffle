import { URL_BACK_USER } from "../../constants/urls/urlBackEnd";
import apiBackEnd from "./api.Backend";

export function displayUser(values) {
  return apiBackEnd.get(`${URL_BACK_USER}${values}`);
}
