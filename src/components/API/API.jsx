import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2f2cee63bf905d38c7710f538683cdea';
const Authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjJjZWU2M2JmOTA1ZDM4Yzc3MTBmNTM4NjgzY2RlYSIsInN1YiI6IjY1ZWY2NzI1YzJiOWRmMDE2MTVkNzUwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lBPEiKzAhEBkDUQzR3mvJyCXQ1MJnEBII14S8J0Vkp0';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: Authorization,
  },
};

export const fetchTrending = async () => {
  const endUrl = 'trending/movie/day';
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  const url = `${BASE_URL}${endUrl}?${searchParams}`;
  const responseTrending = await axios(url, options);
  return responseTrending.data;
};
