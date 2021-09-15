const axios = require('axios');
// const BACKEND_URL = 'https://NodewithJWTtoken-Actual.patilsourabh45.repl.co';
// const BACKEND_URL = 'https://i50znmkokc.execute-api.us-east-1.amazonaws.com/dev/';
const BACKEND_URL = 'https://v8aqbw0tz0.execute-api.us-east-1.amazonaws.com/dev'

function getRestaurants() {
  return axios.get(`${BACKEND_URL}/restaurant`);
}

export { getRestaurants };