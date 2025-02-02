import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  text-align: center;
`;

const CharacterCard = ({ title, image, genre, status }) => {
  return (
    <Card>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>Género: {genre}</p>
      <p>Estado: {status}</p>
    </Card>
  );
};

export default CharacterCard;