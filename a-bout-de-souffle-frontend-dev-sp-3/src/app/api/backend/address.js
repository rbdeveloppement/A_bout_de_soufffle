import {
  URL_BACK_ADDRESS,
  URL_BACK_ADDRESS_ADD,
} from "../../constants/urls/urlBackEnd";
import { store } from "../../redux-store/store";
import apiBackEnd from "./api.Backend";

export function getAddress(values) {
  return apiBackEnd.get(`${URL_BACK_ADDRESS}${values}`, {
    headers: { Authorization: `Bearer ${store.getState().auth.token}` },
  });
}

export function addAddress(values, mail, token) {
  return apiBackEnd.post(`${URL_BACK_ADDRESS_ADD}${mail}`, values, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
