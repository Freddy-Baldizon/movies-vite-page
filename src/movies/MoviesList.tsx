import { useState } from "react";
import type { Movie } from "../types/Movie";
import MoviesCard from "./MoviesCard";

export default function MoviesList({ movies }: { movies: Movie[] }) {
  const [selected, setSelected] = useState<Movie | null>(null);

  return (
    <section className="container mx-auto px-4 py-6">
      <h2 className="text-2xl text-white font-bold mb-4">Catálogo</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((m) => (
          <MoviesCard key={m.id} movie={m} onOpen={(movie) => setSelected(movie)} />
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={() => setSelected(null)} />
          <div className="relative w-11/12 max-w-3xl bg-gray-900 text-white rounded-lg overflow-hidden shadow-xl">
            <button
              className="absolute top-3 right-3 text-white bg-black/40 rounded-full p-2 hover:bg-black/60"
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
            >
              ✕
            </button>

            <div className="md:flex">
              <img
                src={selected.posterUrl}
                alt={selected.title}
                className="w-full md:w-1/3 object-cover h-64 md:h-auto"
              />
              <div className="p-4 md:p-6 md:flex-1">
                <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
                <p className="text-sm text-gray-300 mb-3">
                  {selected.genre} • {selected.year} • {selected.duration} min
                </p>
                <p className="text-gray-200 mb-4">{selected.description}</p>
                <div className="text-sm text-yellow-400 font-semibold">
                  Rating: {selected.rating.toFixed(1)}
                </div>
                <div className="text-sm text-gray-400 mt-2">Director: {selected.director}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}