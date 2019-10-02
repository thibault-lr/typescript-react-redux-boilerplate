import axios from 'axios';
import api from 'config/api.json';


const getInfos = async () => {
  const res = await axios.get(api.url);
  return res.data;
};

export default {
  getInfos,
};
