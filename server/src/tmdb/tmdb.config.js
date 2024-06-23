const baseUrl = process.env.TMDB_BASE_URL;
const key = process.env.TMDB_KEY;

const getUrl = (endpoint, params) => {
  // console.log(baseUrl, key);
  const qs = new URLSearchParams(params);
  // console.log(process.env);
  const url = `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
  console.log(url);
  return url;
};

export default { getUrl };
