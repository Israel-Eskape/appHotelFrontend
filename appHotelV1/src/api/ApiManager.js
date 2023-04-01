import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'https://apphotel.iidtec.com/api/v1/',
  responseType: 'json',
  withCredentials: true,
});

export default ApiManager;
//http://example.com/api/v1
