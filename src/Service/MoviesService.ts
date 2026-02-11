import type { Movie } from "../types/Movie";

const MOVIES_URL = "/Data/Movies.json";

export async function getMovies(): Promise<Movie[]> {
  const response = await fetch(MOVIES_URL);

  if (!response.ok) {
    throw new Error("No se pudo cargar movies.json" + response.status);
  }

  const data = await response.json();
  console.log("Peliculas cargadas: ", data);
  return data as Movie[];
}

export async function getMoviesById(id: string): Promise<Movie | null> {
  const movies = await getMovies();

  const found = movies.find((m) => String(m.id) === String(id));

  return found ?? null;
}