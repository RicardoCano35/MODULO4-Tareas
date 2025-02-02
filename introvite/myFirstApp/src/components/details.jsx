// import styled from 'styled-components';

// const DetailsContainer = styled.div`
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const DetailItem = styled.p`
//   margin: 0;
//   font-size: 16px;
// `;

// const DetailTitle = styled.span`
//   font-weight: bold;
// `;

// function Details(props) {
//   const { genre, status } = props;

//   return (
//     <DetailsContainer>
//       <DetailItem>
//         <DetailTitle>Género:</DetailTitle> {genre || 'No especificado'}
//       </DetailItem>
//       <DetailItem>
//         <DetailTitle>Estado:</DetailTitle> {status || 'No disponible'}
//       </DetailItem>
//     </DetailsContainer>
//   );
// }

// export default Details;

import styled from 'styled-components';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: green;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(12, 11, 11, 0.1);
`;

const DetailItem = styled.p`
  margin: 0;
  font-size: 16px;
  text-align: center;
`;

const DetailTitle = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`;

const StatusBadge = styled.div`
  background-color: #4CAF50; /* Green */
  color: black;
  padding: 5px 10px;
  border-radius: 3px;
  margin-bottom: 10px;
`;

function Details(props) {
  const { genre, status } = props;

  return (
    <DetailsContainer>
      <StatusBadge>{status}</StatusBadge>
      <DetailItem>
        <DetailTitle>Rick Sanchez</DetailTitle>
      </DetailItem>
      <DetailItem>{genre}</DetailItem>
    </DetailsContainer>
  );
}

export default Details;