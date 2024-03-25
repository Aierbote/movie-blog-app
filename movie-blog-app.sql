-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 26, 2024 at 06:04 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movie-blog-app`
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
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `idReview` int(11) NOT NULL,
  `idFilm` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`idReview`, `idFilm`, `rating`, `comment`, `user`) VALUES
(1, 1, 3, 'The Conjuring colpisce con una regia avvincente e performance convincenti, creando un\'atmosfera horror autentica. Tuttavia, potrebbe risultare prevedibile per alcuni.', 'motozzappa03'),
(2, 1, 5, 'The Conjuring offre un\'esperienza horror efficace, grazie alla maestria di James Wan nel creare tensione e al fascino inquietante della trama basata su eventi reali.', 'betto'),
(3, 2, 3, 'It del 2017 mescola abilmente terrore, commedia e nostalgia, grazie a una performance fenomenale di Bill Skarsgård come Pennywise. Tuttavia, il finale potrebbe deludere alcuni spettatori.', 'puposiculo'),
(4, 2, 4, 'It cattura perfettamente l\'essenza del rapporto tra i giovani protagonisti, offrendo un viaggio emotivo tra l\'orrore e l\'amicizia. Nonostante alcune deviazioni dalla trama originale, resta un\'esperienza cinematografica avvincente e memorabile.', 'betto'),
(5, 3, 5, 'Get Out è un thriller psicologico che mescola abilmente suspense e satira sociale, offrendo una visione inquietante e riflessiva sul razzismo. Le performance sono intense e la trama tiene incollati allo schermo fino all\'ultimo secondo.', 'princi<3'),
(6, 3, 4, 'Un capolavoro del genere horror psicologico, Get Out affronta tematiche profonde come il razzismo in America con una trama intricata e una regia magistrale. Un\'esperienza cinematografica coinvolgente che lascia il pubblico con riflessioni durature.', 'puposiculo'),
(7, 4, 5, 'Una notte da leoni è una commedia esilarante. Con battute taglienti e situazioni al limite, il film offre risate garantite dall\'inizio alla fine.', 'motozzappa03'),
(8, 4, 3, 'Una commedia divertente e irriverente, \"Una notte da leoni\" cattura l\'essenza dell\'avventura caotica anche se può sembrare un pò grottesco in certe parti.', 'Gamabunta'),
(9, 5, 2, 'Sebbene riprenda la formula vincente del suo predecessore, The Hangover - Parte II manca dell\'elemento sorpresa e rischia di diventare una ripetizione della stessa trama. Tuttavia, le gag comiche e l\'ambientazione esotica mantengono l\'atmosfera divertente', 'motozzappa03'),
(10, 5, 3, 'Questo sequel non riesce a catturare lo stesso fascino del suo predecessore, offrendo una trama prevedibile e meno fresca. Nonostante ciò, gli attori mantengono il loro carisma e regalano ancora qualche risata.', 'Gamabunta'),
(11, 6, 4, 'Cattivissimo Me è un\'animazione divertente e toccante che segue le avventure di Gru, un cattivo dal cuore tenero che si scioglie alla presenza di tre adorabili bambine. Con personaggi memorabili e una trama avvincente, è perfetto per tutta la famiglia.', 'puposiculo'),
(12, 6, 5, 'Con il suo mix di comicità irresistibile e momenti dolci, \"Cattivissimo Me\" conquista il pubblico di tutte le età. Gli spettatori si affezionano ai personaggi eccentrici e alla storia che celebra l\'importanza della famiglia e del cambiamento personale.', 'betto'),
(13, 7, 5, 'Avatar è un capolavoro visivo che trasporta gli spettatori in un mondo straordinario ricco di dettagli e colori. La trama coinvolgente e i personaggi ben sviluppati si combinano per creare un\'epica avventura che rimane impressa nella memoria.', 'Gamabunta'),
(14, 7, 5, 'James Cameron trasporta il pubblico in un viaggio indimenticabile attraverso Pandora con \"Avatar\", un film che ridefinisce gli standard dell\'esperienza cinematografica. La combinazione di effetti speciali straordinari e una trama avvincente rende questo f', 'princi<3'),
(15, 8, 5, 'Inception è un tour de force di Christopher Nolan, che sfida l\'intelletto dello spettatore con un intricato labirinto di sogno e realtà. Con una trama complessa e azione mozzafiato, questo film lascia il pubblico con interrogativi che persistono molto dop', 'motozzappa03'),
(16, 8, 3, 'Bella l\'idea, un pò meno nell\'esecuzione. Qui Nolan vuole al suo solito complicare troppo le cose rendendo tutto un pò confusionario. Il film risulta comunque godibile alla fine.', 'princi<3'),
(17, 9, 4, 'Interstellar è un\'epica spaziale che mescola scienza e fantasia in un viaggio emozionante attraverso l\'universo. Con una narrazione avvincente e effetti visivi mozzafiato, il film esplora temi universali come l\'amore, la perdita e la ricerca della salvezz', 'Gamabunta'),
(18, 9, 5, 'Christopher Nolan si avventura nello spazio con Interstellar, offrendo una visione ambiziosa e emozionante del futuro dell\'umanità. Con una colonna sonora potente e performance straordinarie, questo film cattura l\'immaginazione e tocca il cuore degli spet', 'motozzappa03');

--
-- Struttura della tabella `reviews`
--

CREATE TABLE `reviews` (
  `idReviews` int(11) NOT NULL,
  `idFilm` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `reviews`
--

INSERT INTO `reviews` (`idReviews`, `idFilm`, `rating`, `comment`, `idUser`) VALUES
(1, 1, 3, 'The Conjuring colpisce con una regia avvincente e performance convincenti, creando un\'atmosfera horror autentica. Tuttavia, potrebbe risultare prevedibile per alcuni.', 1),
(2, 1, 5, 'The Conjuring offre un\'esperienza horror efficace, grazie alla maestria di James Wan nel creare tensione e al fascino inquietante della trama basata su eventi reali.', 2),
(3, 2, 3, 'It del 2017 mescola abilmente terrore, commedia e nostalgia, grazie a una performance fenomenale di Bill Skarsgård come Pennywise. Tuttavia, il finale potrebbe deludere alcuni spettatori.', 4),
(4, 2, 4, 'It cattura perfettamente l\'essenza del rapporto tra i giovani protagonisti, offrendo un viaggio emotivo tra l\'orrore e l\'amicizia. Nonostante alcune deviazioni dalla trama originale, resta un\'esperienza cinematografica avvincente e memorabile.', 2),
(5, 3, 5, 'Get Out è un thriller psicologico che mescola abilmente suspense e satira sociale, offrendo una visione inquietante e riflessiva sul razzismo. Le performance sono intense e la trama tiene incollati allo schermo fino all\'ultimo secondo.', 5),
(6, 3, 4, 'Un capolavoro del genere horror psicologico, Get Out affronta tematiche profonde come il razzismo in America con una trama intricata e una regia magistrale. Un\'esperienza cinematografica coinvolgente che lascia il pubblico con riflessioni durature.', 4),
(7, 4, 5, 'Una notte da leoni è una commedia esilarante. Con battute taglienti e situazioni al limite, il film offre risate garantite dall\'inizio alla fine.', 1),
(8, 4, 3, 'Una commedia divertente e irriverente, \"Una notte da leoni\" cattura l\'essenza dell\'avventura caotica anche se può sembrare un pò grottesco in certe parti.', 3),
(9, 5, 2, 'Sebbene riprenda la formula vincente del suo predecessore, The Hangover - Parte II manca dell\'elemento sorpresa e rischia di diventare una ripetizione della stessa trama. Tuttavia, le gag comiche e l\'ambientazione esotica mantengono l\'atmosfera divertente', 1),
(10, 5, 3, 'Questo sequel non riesce a catturare lo stesso fascino del suo predecessore, offrendo una trama prevedibile e meno fresca. Nonostante ciò, gli attori mantengono il loro carisma e regalano ancora qualche risata.', 3),
(11, 6, 4, 'Cattivissimo Me è un\'animazione divertente e toccante che segue le avventure di Gru, un cattivo dal cuore tenero che si scioglie alla presenza di tre adorabili bambine. Con personaggi memorabili e una trama avvincente, è perfetto per tutta la famiglia.', 4),
(12, 6, 5, 'Con il suo mix di comicità irresistibile e momenti dolci, \"Cattivissimo Me\" conquista il pubblico di tutte le età. Gli spettatori si affezionano ai personaggi eccentrici e alla storia che celebra l\'importanza della famiglia e del cambiamento personale.', 2),
(13, 7, 5, 'Avatar è un capolavoro visivo che trasporta gli spettatori in un mondo straordinario ricco di dettagli e colori. La trama coinvolgente e i personaggi ben sviluppati si combinano per creare un\'epica avventura che rimane impressa nella memoria.', 3),
(14, 7, 5, 'James Cameron trasporta il pubblico in un viaggio indimenticabile attraverso Pandora con \"Avatar\", un film che ridefinisce gli standard dell\'esperienza cinematografica. La combinazione di effetti speciali straordinari e una trama avvincente rende questo f', 5),
(15, 8, 5, 'Inception è un tour de force di Christopher Nolan, che sfida l\'intelletto dello spettatore con un intricato labirinto di sogno e realtà. Con una trama complessa e azione mozzafiato, questo film lascia il pubblico con interrogativi che persistono molto dop', 1),
(16, 8, 3, 'Bella l\'idea, un pò meno nell\'esecuzione. Qui Nolan vuole al suo solito complicare troppo le cose rendendo tutto un pò confusionario. Il film risulta comunque godibile alla fine.', 5),
(17, 9, 4, 'Interstellar è un\'epica spaziale che mescola scienza e fantasia in un viaggio emozionante attraverso l\'universo. Con una narrazione avvincente e effetti visivi mozzafiato, il film esplora temi universali come l\'amore, la perdita e la ricerca della salvezz', 3),
(18, 9, 5, 'Christopher Nolan si avventura nello spazio con Interstellar, offrendo una visione ambiziosa e emozionante del futuro dell\'umanità. Con una colonna sonora potente e performance straordinarie, questo film cattura l\'immaginazione e tocca il cuore degli spet', 1);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `film`
--
ALTER TABLE `film`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`idReviews`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `film`
--
ALTER TABLE `film`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT per la tabella `reviews`
--
ALTER TABLE `reviews`
  MODIFY `idReviews` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
