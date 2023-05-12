import { URL_BACK_REGISTRATION } from "../../constants/urls/urlBackEnd";
import apiBackEnd from "./api.Backend";

export function registration(values) {
  return apiBackEnd.post(URL_BACK_REGISTRATION, values);
}
