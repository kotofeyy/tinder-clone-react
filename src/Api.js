import axios from 'axios/index'

const devMode = process.env.NODE_ENV === 'development'

const api = axios.create({
  baseURL: devMode ? 'http://127.0.0.1:5001/' : '/',
  headers: {
    common: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    patch: {
      'Content-Type': 'application/json',
    },
  },
})

export const getRequest = (method) => {
  return api.get(method)
}

export const postRequest = (method, body) => {
  return api.post(method, body)
}

export const putRequest = (method, body = {}) => {
  return api.put(method, body)
}

export const deleteRequest = (method, body = {}) => {
  return api.delete(method, body)
}

export const ANY_PAGE = 'any_page'
export const GET_MESSAGE_AND_SEND = 'get_message_and_send'
export const REGISTRATION_NEW_USER = 'registration_new_user'
export const LOGIN_USER = 'login_user'

