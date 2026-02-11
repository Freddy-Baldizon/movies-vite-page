import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./feactures/Home";
import NotFound from "./share/NotFound";
import Movies from "./movies/Movies";
import MoviesDetails from "./movies/MoviesDetails";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-white">
        
        <main className="container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/movies/:id" element={<MoviesDetails/>}/> 
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
       
      </div>
    </BrowserRouter>
  )
}


export default App
