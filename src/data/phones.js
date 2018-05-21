import axios from 'axios';

const API_URL = 'https://phone-catalog.herokuapp.com/';

const getPhones = () => {
  return axios.get(API_URL)
    .then(res => res.data);
};

export { getPhones };