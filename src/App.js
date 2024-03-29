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
  const timer = 5;
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [countdown, setCountdown] = useState(timer);

  useEffect(() => {
    /* NOTE : To redirect after X seconds of countdown */
    setTimeout(() => {
      setIsRedirecting(true)
    }, timer * 1_000)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1_000);

    return () => clearInterval(interval);
  })

  if (isRedirecting) {
    return <Navigate to="/" />
  }


  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Redirecting in {countdown} seconds...</p>
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
