import axios from 'axios'

export const fetchMovies = async (searchTerm: string, method: string) => {
    const API_KEY = process.env.OMDB_API_KEY;
    console.log('Using OMDB API Key:', API_KEY); // Логирование API ключа

    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&${method}=${searchTerm}`;

    console.log(`Fetching movies with URL: ${url}`); // Логирование URL

    try {
        const response = await axios.get(url);
        console.log('OMDB API response:', response.data); // Логирование ответа
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from OMDB: ${error}`);
        throw new Error('Failed to fetch movies from OMDB API');
    }
};
