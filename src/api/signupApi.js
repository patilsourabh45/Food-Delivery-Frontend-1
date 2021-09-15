const axios = require('axios');
// const BACKEND_URL = 'https://NodewithJWTtoken-Actual.patilsourabh45.repl.co';
// const BACKEND_URL = 'https://i50znmkokc.execute-api.us-east-1.amazonaws.com/dev/ ';
const BACKEND_URL = 'https://v8aqbw0tz0.execute-api.us-east-1.amazonaws.com/dev'

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