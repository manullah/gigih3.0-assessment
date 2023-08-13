import Axios from 'axios';

const axios = Axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1`,
});

export default axios;
