const Base_URL = 'https://api.themoviedb.org/3';

const TMDB_token = import.meta.env.VITE_APIKEY;
console.log(TMDB_token)

export const fetchDataFromApi = async (url, params) => {
    try {
        const headers = {
            Authorization: 'Bearer ' + TMDB_token
        };

        // Construct the URL with query parameters
        const query = new URLSearchParams(params).toString();
        const apiUrl = `${Base_URL}${url}?${query}`;

        const response = await fetch(apiUrl, {
            headers
        });

        const data = await response.json();
        console.log(data);
        return data;

    } catch (err) {
        console.error(err);
        return err;
    }
};
