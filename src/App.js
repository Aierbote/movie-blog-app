import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { MoviePage } from './routes/MoviePage';
import { NotFound } from './routes/NotFound';
import { memo, Suspense } from 'react';
import Container from "@mui/material/Container";


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


      <BrowserRouter>
        <Navbar />

        <Container
          sx={{
            width: {
              xs: "100%",
              sm: "95%",
              md: "90%",
              lg: "85%",
              xl: "80%",
            },
          }}>
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
        </Container >
      </BrowserRouter>

      <Footer />
    </>
  );
})

export default App;
