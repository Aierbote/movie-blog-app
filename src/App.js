import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { MoviePage } from './routes/MoviePage';
import { NotFound } from './routes/NotFound';
import { memo, Suspense } from 'react';
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";


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


const defaultTheme = createTheme();

const App = memo(() => {
  return (
    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
        <Navbar />

        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "95%",
              md: "90%",
              lg: "85%",
              xl: "80%",
            },

            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            minHeight: "80vh",
            alignItems: "flex-start",

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
        </Box >
      </BrowserRouter>

      <Footer />
    </ThemeProvider>
  );
})

export default App;
