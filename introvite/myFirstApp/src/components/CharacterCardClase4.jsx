// import React from 'react';
// import Title from './Title';
// import Image from './Image';
// import Details from './details';
// import './CharacterCardClase4.css';

// function CharacterCardClase4(props) {
//   return (
//     <div className="character-card">
//       {/* Nombre de el personaje */}
//       <Title title={props.name} />
//       {/* Imagen de el personaje */}
//       <Image url={props.image} />
//       {/* Detalles de el personaje */}
//       <Details genre={props.genre} status={props.status} />
//     </div>
//   );
// }

// export default CharacterCardClase4;

// import React from 'react';
// import './CharacterCardClase4.css';

// function CharacterCardClase4({ name, image, status }) {
//   return (
//     <div className="character-card">
//       <h3>{name}</h3>
//       <img src={image} alt={name} />
//       <p>Status: {status}</p>
//     </div>
//   );
// }

// export default CharacterCardClase4;

import React from 'react';
import './CharacterCardClase4.css';

function CharacterCardClase4({ name, image, status, species }) {
  const defaultImage = 'https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeJtBpd7gVufNBcVqvz9HPneSuK06oCuSWVIe1rbvL9yoBfZbHbUhjLgU0yv1DoOG8gWtyFUjonoxF132iuRBPNf_LoVM6tKrbKc.png?r=871'; // URL por defecto

  return (
    <div className="character-card">
      <img src={image || defaultImage} alt={name} onError={(e) => e.target.src = defaultImage} />
      <h3>{name}</h3>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
    </div>
  );
}

export default CharacterCardClase4;