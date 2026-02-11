import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-extrabold tracking-widest text-red-600">
          CINE MAX
        </Link>

        <div className="h-8 w-8 rounded bg-gray-600" />
      </div>
    </header>
  );
}
