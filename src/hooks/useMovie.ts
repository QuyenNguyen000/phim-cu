import { fetchMovies } from '@/services/FetchServices';
import { useState, useEffect } from 'react';

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

const useMovie = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    useEffect(() => {
        fetchMovies().then((response) => {
            setMovies(response);
        });
    }, []);
    return { movies };
};

export default useMovie;
