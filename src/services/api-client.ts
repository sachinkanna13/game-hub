import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c0d4641971ba4c789f5f7af63ebf8275',
  },
});
