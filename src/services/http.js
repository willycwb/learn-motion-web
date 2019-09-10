import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:8080/app/v1',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default client; 