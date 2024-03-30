import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { MoviePage } from './routes/MoviePage';
import { NotFound } from './routes/NotFound';
import { memo } from 'react';
import { Suspense } from 'react';


const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/movie/:idFilm',
    component: MoviePage,
  },
  // NOTE : This route must ALWAYS be the last one
  {
    path: '*',
    component: NotFound,
  },
]

const App = memo(() => {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Suspense >
      </BrowserRouter>

      <Footer />
    </>
  );
})

export default App;
