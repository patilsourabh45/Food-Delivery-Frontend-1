const axios = require('axios');
// const BACKEND_URL = 'https://NodewithJWTtoken-Actual.patilsourabh45.repl.co';
const BACKEND_URL = 'http://localhost:6500';

function loginApi(email, password) {
  return axios.get(`${BACKEND_URL}/auth/login`, {
    params: {
      email: email,
      password: password
    }
  });
}

export { loginApi };