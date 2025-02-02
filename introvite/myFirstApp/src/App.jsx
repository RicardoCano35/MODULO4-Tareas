// import React from 'react';
// import Title from './components/Title';
// import Image from './components/Image';
// import Details from './components/details';


// import './app.css';

// function App() {
//   return (
//     <div className="app-container">
//       {/* Title of the artist/character */}
//       <Title title="Rick Sanchez" />

//       {/* Image of the artist/character */}
//       <Image url="https://static.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20160923150728" />

//       {/* Details of the artist/character */}
//       <Details genre="Científico" status="Vivo" />
//     </div>
//   );
// }

// export default App;

// 


// 

// .................

// CLASE 4


// import React, { useState, useEffect } from 'react';
// import CharacterCardClase4 from './components/CharacterCardClase4';

// import './components/CharacterCardClase4.css';

// function App() {
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");
//   const [genre, setGenre] = useState("");
//   const [status, setStatus] = useState("");

//   useEffect(() => {
//     fetch("https://rickandmortyapi.com/api/character/1")
//       .then((response) => response.json())
//       .then((result) => {
//         setName(result.name);
//         setImage(result.image);
//         setGenre(result.gender);
//         setStatus(result.status);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Personajes de Rick and Morty</h1>
//       <CharacterCardClase4
//         name={name}
//         image={image}
//         genre={genre}
//         status={status}
//       />
//     </div>
//   );
// }

// export default App;

// CLASE 5

// import React, { useState, useEffect } from 'react';
// import CharacterCardClase4 from './components/CharacterCardClase4';
// import ReactPaginate from 'react-paginate';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
// import './components/CharacterCardClase4.css';

// function App() {
//   const [charactersList, setCharactersList] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchCharacters = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
//         const data = await response.json();
//         setCharactersList(data.results);
//         setTotalPages(data.info.pages);
//       } catch (error) {
//         console.error('Error obteniendo personajes:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCharacters();
//   }, [currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page.selected + 1);
//   };

//     return (
//       <div>
//         <h1>Personajes de Rick and Morty</h1>
//         {isLoading && <p>Cargando personajes...</p>}
//         <div className="character-list">
//           {charactersList.map((character) => (
//             <CharacterCardClase4 key={character.id} {...character} />
//           ))}
//       </div>
//       <ReactPaginate
//         previousLabel={<span aria-label="Anterior"><FontAwesomeIcon icon={faAngleLeft} /></span>}
//         nextLabel={<span aria-label="Siguiente"><FontAwesomeIcon icon={faAngleRight} /></span>}
//         pageCount={totalPages}
//         onPageChange={handlePageChange}
//         containerClassName={"pagination justify-content-center"}
//         pageLinkClassName={"page-link"}
//         previousLinkClassName={"page-link"}
//         nextLinkClassName={"page-link"}
//         activeLinkClassName={"active"}
//       />
//     </div>
//   );
// }

// export default App;


// CLASE 7


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CharacterPage from './CharacterPage.jsx';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import RickAndMortyCharacterCard from './components/RickAndMortyCharacterCard';
import './components/CharacterCardClase4.css';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Ruta para la página principal */}
          <Route path="/characters" element={<CharacterPage />} /> {/* Ruta para el listado de personajes */}
          <Route path="/characters/:id" element={<RickAndMortyCharacterCard />} /> {/* Ruta para el detalle del personaje */}
          <Route path="*" element={<NotFoundPage />} /> {/* Ruta para páginas no encontradas */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;