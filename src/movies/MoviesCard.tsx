import { Link } from "react-router-dom";
import type { Movie } from "../types/Movie";

type Props = {
  movie: Movie;
  onOpen?: (m: Movie) => void;
};

export default function MoviesCard({ movie, onOpen }: Props) {
  return (
    <article className="bg-transparent">
      <Link to={`/movies/${movie.id}`} className="block group">
        <div className="relative rounded-md overflow-hidden shadow-lg">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-56 object-cover transform group-hover:scale-105 transition"
            onClick={(e) => {
              if (onOpen) {
                e.preventDefault();
                e.stopPropagation();
                onOpen(movie);
              }
            }}
          />
          <div className="absolute top-2 left-2 bg-black/60 text-yellow-300 px-2 py-1 rounded">
            {movie.rating.toFixed(1)}
          </div>
        </div>

        <div className="mt-2">
          <h3 className="text-white text-sm font-semibold truncate">{movie.title}</h3>
          <p className="text-gray-400 text-xs">{movie.year}</p>
        </div>
      </Link>
    </article>
  );
}