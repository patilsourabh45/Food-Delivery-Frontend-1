const axios = require('axios');
// const BACKEND_URL = 'https://NodewithJWTtoken-Actual.patilsourabh45.repl.co';
const BACKEND_URL = 'http://localhost:6500';
function signupApi(name, email, phonenumber,  password) {
  return axios.post(`${BACKEND_URL}/signup`, {},{
    params: {
      name:name,
      phonenumber:phonenumber,
      email: email,
      password: password
    }
  });
}

export { signupApi };