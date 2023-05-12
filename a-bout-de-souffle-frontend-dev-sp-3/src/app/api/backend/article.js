import { URL_BACK_PRODUCT_DETAIL } from "../../constants/urls/urlBackEnd";
import apiBackEnd from "./api.Backend";

export function productDetail(values) {
  return apiBackEnd.get(`${URL_BACK_PRODUCT_DETAIL}${values}`);
}
