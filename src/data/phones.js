import axios from 'axios';

const API_URL = 'http://localhost:3000/phones';

const getPhones = () => {
  return axios.get(API_URL)
    .then(res => res.data);
};

export { getPhones };