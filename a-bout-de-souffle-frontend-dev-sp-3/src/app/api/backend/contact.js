import { URL_BACK_CONTACT } from "../../constants/urls/urlBackEnd";
import apiBackEnd from "./api.Backend";

export function Contact(values) {
  return apiBackEnd.post(URL_BACK_CONTACT, values);
}
