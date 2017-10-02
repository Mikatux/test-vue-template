import axios from 'axios';
import * as types from './mutation-types';
import config from '../config';

const loginEndpoint = `${config.API_URL}/login`;

export const login = ({ commit }, JWT) => new Promise((resolve, reject) => {
  axios.get(loginEndpoint, { headers: { Authorization: `Bearer ${JWT}` } })
    .then((response) => {
      commit(types.SET_APIKEY, response.data);
      resolve();
    })
    .catch((error) => {
      reject(error);
    });
});

export const logout = ({ commit }) => new Promise((resolve, reject) => {
  try {
    commit(types.LOG_OUT);
    resolve();
  } catch (e) {
    reject(e);
  }
});
