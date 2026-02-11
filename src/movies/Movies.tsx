import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie";
import { getMovies } from "../Service/MoviesService";
import MoviesList from "./MoviesList";

export default function Movies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMovies()
            .then(setMovies)
            .finally(() => setLoading(false));
    }, [movies]);

    if (loading)
        return (
            <div className="">
                cargando...
            </div>
        );

    return (
        <div className="">
            <MoviesList movies={movies} />
        </div>
    );



} 
