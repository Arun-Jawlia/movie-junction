import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3`;

// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDdiYTNkODM0NmM3NTM1Y2QzMzcwNDdiNGQ3MzAxYSIsInN1YiI6IjY1NWVlMTQxMjQ0MTgyMDBjYTc1OGNlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xDc0GPhuDY1cy0gt9uMEjbRVk6lGNhZmY3_1Y6mGz_A"

const headers = {
  Authorization: `Bearer ${TMDB_TOKEN}`,
};

// Fetch data using axios from tmdb api
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });

    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
