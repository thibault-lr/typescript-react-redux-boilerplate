import Axios, { AxiosResponse } from 'axios';

const getRequest = async (url:string): Promise<AxiosResponse> => {
  try {
    const res = await Axios.get(url);
    return res.data;
  } catch (error) {
    return error;
  }
};

export default {
  getRequest,
};
