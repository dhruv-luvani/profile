import axios from "axios";
import { Logout } from "./commonFunctions";
import { localStorageKey } from "../constants/common";

const defaultHeaders = {
    isAuth: true,
    AdditionalParams: {},
    isJsonRequest: false,
    api_key: true,
    access_token: null
};

const BaseURL = process.env.REACT_APP_BASE_URL

export const ApiGet = async (url, params, isAuth = true) => {
    return new Promise(async (resolve, reject) => {
        axios
            .get(BaseURL + url, { params, ...getHttpOptions({ ...defaultHeaders, isAuth }) })
            .then((response) => {
                resolve(response?.data);
            })
            .catch(async (error) => {
                if (error?.response?.status === 401) {
                    Logout()
                }
                reject(error?.response?.data || error);
            });
    });
}

export const ApiPost = async (url, body, params, isAuth = true, isFormData) => {
    return new Promise(async (resolve, reject) => {
        let headers = { ...defaultHeaders, isAuth, isFormData: isFormData || false };
        axios
            .post(BaseURL + url, body, { params, ...getHttpOptions(headers) })
            .then((response) => {
                resolve(response?.data);
            })
            .catch(async (error) => {
                if (error?.response?.status === 401) {
                    Logout()
                }
                reject(error?.response?.data || error);
            });
    });
}

export const ApiPut = async (url, body, params, isAuth = true) => {
    return new Promise((resolve, reject) => {
        axios
            .put(BaseURL + url, body, { params, ...getHttpOptions({ ...defaultHeaders, isAuth }) })
            .then((response) => {
                resolve(response?.data);
            })
            .catch(async (error) => {
                if (error?.response?.status === 401) {
                    Logout()
                }
                reject(error?.response?.data || error);
            });
    });
}

export const ApiDelete = async (url, body, params, isAuth = true) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(BaseURL + url, { params, data: body, ...getHttpOptions({ ...defaultHeaders, isAuth }) })
            .then((response) => {
                resolve(response?.data);
            })
            .catch(async (error) => {
                if (error?.response?.status === 401) {
                    Logout()
                }
                reject(error?.response?.data || error);
            });
    });
}

export const getHttpOptions = (options = defaultHeaders) => {
    let userData = null
    let headers = {};

    if (options.hasOwnProperty("isAuth") && options.isAuth) {
        userData = localStorage.getItem(localStorageKey)
        if (userData) {
            userData = JSON.parse(userData)
            headers["Authorization"] = userData?.token;
        }
        headers["Cache-Control"] = "no-cache";
    }

    if (options.hasOwnProperty("isJsonRequest") && options.isJsonRequest) {
        headers["Content-Type"] = "application/json";
    }
    if (options.hasOwnProperty("isFormData") && options.isFormData) {
        headers["Content-Type"] = "multipart/form-data";
    }
    if (options.hasOwnProperty("AdditionalParams") && options.AdditionalParams) {
        headers = { ...headers, ...options.AdditionalParams };
    }
    return { headers };
};