import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: false,
  },
  {
    path: '/movie/:id',
    component: MoviePage,
    exact: false,
  },
  {
    path: '*',
    component: NotFound,
    exact: false,
  },
]

// TODO : preliminary implementation of page/route components
function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

function MoviePage() {
  const { id: idFilm } = useParams();

  return (
    <div>
      <h1>Movie Page {idFilm}</h1>
    </div>
  );
}

function NotFound() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    /* NOTE : Redirect after 5 seconds */
    setTimeout(() => {
      setIsRedirecting(true)
    }, 5_000)
  }, [])

  if (isRedirecting) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Redirecting in 5 seconds...</p>
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
              exact={route.exact}
            />
          ))}
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
