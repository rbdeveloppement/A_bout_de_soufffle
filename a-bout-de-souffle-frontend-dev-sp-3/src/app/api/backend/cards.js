import { URL_BACK_POPULAR } from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function popularcards(values) {
    return apiBackEnd.get(URL_BACK_POPULAR, values);
}