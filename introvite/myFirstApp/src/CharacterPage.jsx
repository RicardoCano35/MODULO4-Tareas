// import React from 'react';

// // TODO: agrega estilos un diseño personalizado a la página
// function HomePage(props) {
//   return (
//     <div>
//       <h1> Bienvenido a la pagina de rick and morty
//       </h1>

//       <h3> Enlaces rápidos </h3>
      
//       <Link to="/characters">
//         Ir a personajes
//       </Link>
//       <Link to="/episodes">
//         Ir a episodios
//       </Link>
//     </div>
   
//   );
// }
// export default HomePage;

import React, { useState, useEffect } from 'react';
import CharacterCardClase4 from './components/CharacterCardClase4';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import logoRickAndMorty from './components/logoRickyMorty.png';
import './components/CharacterCardClase4.css';


function CharacterPage() {
  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
        const data = await response.json();
        setCharactersList(data.results);
        setTotalPages(data.info.pages);
      } catch (error) {
        console.error('Error obteniendo personajes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page.selected + 1);
  };

  return (
    <div>
      <img src={logoRickAndMorty} alt="Rick and Morty Logo" className="logo" />
      {isLoading && <p>Cargando personajes...</p>}
      <div className="character-list">
        {charactersList.map((character) => (
          <CharacterCardClase4 key={character.id} {...character} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={<span aria-label="Anterior"><FontAwesomeIcon icon={faAngleLeft} /></span>}
        nextLabel={<span aria-label="Siguiente"><FontAwesomeIcon icon={faAngleRight} /></span>}
        pageCount={totalPages}
        onPageChange={handlePageChange}
        containerClassName={"pagination justify-content-center"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        activeLinkClassName={"active"}
      />
    </div>
  );
}

export default CharacterPage;