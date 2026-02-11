import Movies from "../movies/Movies";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white bg-fixed bg-center bg-cover pt-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* HERO: overlay sutil solo en la zona superior (no oscurece el resto) */}
      <header className="min-h-[65vh] flex items-center">
        <div className="w-full max-w-3xl mx-6 md:mx-12 lg:mx-16 p-6 md:p-8 rounded-lg bg-black/30 backdrop-blur-sm">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Explora el catálogo
          </h1>
          <p className="mt-3 text-sm md:text-lg text-gray-200 max-w-xl leading-relaxed">
            Toca cualquier póster para ver la imagen ampliada y la descripción. Navega por el catálogo para
            descubrir tus películas favoritas.
          </p>
          <div className="mt-4">
            <span className="inline-block bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded">
              Nuevo
            </span>
          </div>
        </div>
      </header>

      {/* CATALOGO: transparente para dejar ver el fondo */}
      <main className="bg-transparent">
        <div className="mt-10 px-4">
          <Movies />
        </div>
      </main>
    </div>
  );
}