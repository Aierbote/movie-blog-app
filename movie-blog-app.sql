-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mar 26, 2024 alle 13:40
-- Versione del server: 10.4.32-MariaDB
-- Versione PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movie-blog-app.sql`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `film`
--

CREATE TABLE `film` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `year` varchar(4) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `director` varchar(255) DEFAULT NULL,
  `cast` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`cast`)),
  `genre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `film`
--

INSERT INTO `film` (`id`, `title`, `year`, `image`, `director`, `cast`, `genre`) VALUES
(1, 'The Conjuring', '2013', 'https://www.queryonline.it/wp-content/uploads/2015/01/The-Conjuring-Poster.jpg', 'James Wan', '[\"Vera Farmiga\", \"Patrick Wilson\", \"Lili Taylor\", \"Ron Livingston\", \"Shanley Caswell\", \"Hayley McFarland\", \"Joey King\", \"Mackenzie Foy\", \"Kyla Deaver\", \"Sterling Jerins\"]', 'Horror'),
(2, 'It', '2017', 'https://m.media-amazon.com/images/M/MV5BMDgyYWZlMTItYjgwNy00Mjg4LTljYmItZDY0OTU3M2U2ZTk3XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX1000_.jpg', 'Andy Muschietti', '[\"Bill Skarsgård\", \"Jaeden Martell\", \"Jeremy Ray Taylor\", \"Sophia Lillis\", \"Finn Wolfhard\", \"Chosen Jacobs\", \"Jack Dylan Grazer\", \"Wyatt Oleff\", \"Nicholas Hamilton\", \"Jackson Robert Scott\"]', 'Horror'),
(3, 'Get Out', '2017', 'https://m.media-amazon.com/images/M/MV5BNTE2Nzg1NjkzNV5BMl5BanBnXkFtZTgwOTgyODMyMTI@._V1_FMjpg_UX947_.jpg', 'Jordan Peele', '[\"Daniel Kaluuya\", \"Allison Williams\", \"Catherine Keener\", \"Bradley Whitford\", \"Caleb Landry Jones\", \"Marcus Henderson\", \"Betty Gabriel\", \"Lakeith Stanfield\", \"Stephen Root\", \"Lil Rel Howery\"]', 'Horror'),
(4, 'Una notte da leoni', '2009', 'https://m.media-amazon.com/images/M/MV5BOTM0MWYxYzktMTE4ZS00NzNmLWI4OTYtZDkwNmRiY2Y2Njc5XkEyXkFqcGdeQXVyNjcwMjczMzE@._V1_FMjpg_UX794_.jpg', 'Todd Phillips', '[\"Bradley Cooper\", \"Ed Helms\", \"Zach Galifianakis\", \"Justin Bartha\", \"Heather Graham\", \"Ken Jeong\"]', 'Comedy'),
(5, 'Una notte da leoni 2', '2011', 'https://m.media-amazon.com/images/M/MV5BNDVhYzJhZjEtMzJjOC00YTgwLWE0M2EtNDY2MzdmMWI4N2EwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UX420_.jpg', 'Todd Phillips', '[\"Bradley Cooper\", \"Ed Helms\", \"Zach Galifianakis\", \"Justin Bartha\", \"Ken Jeong\", \"Jamie Chung\"]', 'Comedy'),
(6, 'Cattivissimo Me', '2010', 'https://m.media-amazon.com/images/M/MV5BNTgzMjU3MzMtZWQ0MS00MDFmLTg1OTktOGU3ODNmZGVjM2FiXkEyXkFqcGdeQXVyNjMwOTA1MDM@._V1_FMjpg_UY2120_.jpg', 'Pierre Coffin, Chris Renaud', '[\"Steve Carell\", \"Jason Segel\", \"Russell Brand\", \"Julie Andrews\", \"Will Arnett\", \"Kristen Wiig\"]', 'Comedy'),
(7, 'Avatar', '2009', 'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UY2902_.jpg', 'James Cameron', '[\"Sam Worthington\", \"Zoe Saldana\", \"Sigourney Weaver\", \"Stephen Lang\", \"Michelle Rodriguez\", \"Giovanni Ribisi\"]', 'Sci-Fi'),
(8, 'Inception', '2010', 'https://m.media-amazon.com/images/M/MV5BMWVjOTM1MzAtOTk3ZS00YmUyLThkNDgtNDhhNjU4YTI2MWMxXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX1261_.jpg', 'Christopher Nolan', '[\"Leonardo DiCaprio\", \"Joseph Gordon-Levitt\", \"Ellen Page\", \"Tom Hardy\", \"Ken Watanabe\", \"Marion Cotillard\"]', 'Sci-Fi'),
(9, 'Interstellar', '2014', 'https://m.media-amazon.com/images/M/MV5BMjI3MTMyMjgtM2U4Yi00NDE5LTg1NzgtZWMzM2YwM2Y3ZjU2XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UY3543_.jpg', 'Christopher Nolan', '[\"Matthew McConaughey\", \"Anne Hathaway\", \"Jessica Chastain\", \"Michael Caine\", \"Casey Affleck\", \"Matt Damon\"]', 'Sci-Fi');

-- --------------------------------------------------------

--
-- Struttura della tabella `review`
--

CREATE TABLE `review` (
  `idReviews` int(11) NOT NULL,
  `idFilm` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `film`
--
ALTER TABLE `film`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`idReviews`),
  ADD KEY `idFilm` (`idFilm`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `film`
--
ALTER TABLE `film`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`idFilm`) REFERENCES `film` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
