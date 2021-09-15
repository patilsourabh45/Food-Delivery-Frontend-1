const axios = require('axios');
// const BACKEND_URL = 'https://NodewithJWTtoken-Actual.patilsourabh45.repl.co';
// const BACKEND_URL = 'https://i50znmkokc.execute-api.us-east-1.amazonaws.com/dev/';
const BACKEND_URL = 'http://localhost:6500'

function loginApi(email, password) {
  return axios.get(`${BACKEND_URL}/auth/login`, {
    params: {
      email: email,
      password: password
    }
  });
}

export { loginApi };