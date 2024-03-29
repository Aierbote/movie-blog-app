import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { MoviePage } from './routes/MoviePage';
import { NotFound } from './routes/NotFound';


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
    path: '/movie/:idFilm',
    component: MoviePage,
    exact: false,
  },
  // NOTE : This route must ALWAYS be the last one
  {
    path: '*',
    component: NotFound,
    exact: false,
  },
]

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
