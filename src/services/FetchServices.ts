type Movie = {
    rank: number;
    title: string;
    description: string;
    image: string;
    big_image: string;
    genre: string[];
    thumbnail: string;
    rating: string;
    id: string;
    year: number;
    imdbid: string;
    imdb_link: string;
};

const fetchMovies = async (): Promise<Movie[]> => {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e1c0058e6emsh5f9334dcc9a7896p1c3a41jsn72073c6bdb44',
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
};

export { fetchMovies };
