// import React from 'react';
// import CharacterCard from './components/CharacterCard';

// function RickAndMortyCharacterCard(props) {

//   const rickAndMortyCharacterId = props.id;
//   {/* 
//     Incluye la logica de consulta de la API. los hooks useState y useEffect
//   */}


//   return (
//     <div>
//       <CharacterCard 
//         name={name}
//         image={image}
//         genre={genre}
//         status={status}
//       >
//     </div>
//   );
// }

// export default RickAndMortyCharacterCard;


// CLASE 7


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterCard from './CharacterCard';

function RickAndMortyCharacterCard() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (isLoading) {
    return <p>Cargando detalles del personaje...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!character) {
    return <p>Personaje no encontrado.</p>;
  }

  return (
    <div>
      <CharacterCard {...character} /> {/* Usa el spread operator para pasar las props */}
    </div>
  );
}

export default RickAndMortyCharacterCard;