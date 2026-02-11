import { useParams } from 'react-router-dom';
import { getMoviesById } from '../Service/MoviesService';
import type { Movie } from '../types/Movie';
import { useEffect, useState } from 'react';

export default function MoviesDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getMoviesById(id)
      .then((movie) => setMovie(movie))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Cargando...
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Película no encontrada
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* IMAGEN PRINCIPAL */}
      <div className="relative h-[80vh] w-full">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="h-full w-full object-cover"
        />

        {/* overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* título */}
        <div className="absolute bottom-10 left-8 max-w-xl">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
        </div>
      </div>

    </div>
  );
}
