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

export async function fetchSearchedMovies(keywords, pageNo) {
  const endUrl = 'search/movie';
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query: keywords,
    include_adult: false,
    language: 'en-US',
    page: pageNo,
  });
  const url = `${BASE_URL}${endUrl}?${searchParams}`;
  const responseSearched = await axios(url, options);
  return responseSearched.data;
}

export async function fetchMovieDetails(movieId) {
  const endUrl = 'movie';
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  const url = `${BASE_URL}${endUrl}/${movieId}?${searchParams}`;
  const responseDetails = await axios(url, options);
  return responseDetails.data;
}

export async function fetchMovieCast(movieId) {
  const endUrl = 'movie';
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  const url = `${BASE_URL}${endUrl}/${movieId}/credits?${searchParams}`;
  const responseCast = await axios(url, options);
  return responseCast.data;
}

export async function fetchMovieReviews(movieId) {
  const endUrl = 'movie';
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  const url = `${BASE_URL}${endUrl}/${movieId}/reviews?${searchParams}`;
  const responseReview = await axios(url, options);
  return responseReview.data;
}

export async function fetchGenres() {
  const endUrl = 'genre/movie/list';
  const searchParams = new URLSearchParams({
    language: 'en',
  });
  const url = new URL(`${BASE_URL}${endUrl}?${searchParams}`);

  const responseGenre = await axios.get(url, options);
  console.log(responseGenre);
  return responseGenre.data;
}
