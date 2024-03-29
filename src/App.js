import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function Home() {
  console.log('Home component rendered');

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function About() {
  console.log('About component rendered');

  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

function MoviePage() {
  console.log('Movie component rendered');

  return (
    <div>
      <h1>Movie Page</h1>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      {/* NOTE : Redirect after 3 seconds */}
      {setTimeout(() => <Navigate to="/" />, 3_000)}
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          {/* NOTE : this must be ALWAYS the last one */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
