import axios from 'axios';
import api from 'config/api.json';

const getInfos = () => axios.get(api.url);

export default {
  getInfos,
};
