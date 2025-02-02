import styled from 'styled-components';

const ImageStyled = styled.img`
  width: ${(props) => props.width || '200px'};
  height: ${(props) => props.height || '200px'};
  border-radius: ${(props) => props.rounded ? '50%' : '0'};
  object-fit: cover;
`;

function Image(props) {
  const { url, width, height, rounded } = props;

  return <ImageStyled src={url} alt="Foto de el artista/personaje" width={width} height={height} rounded={rounded} />;
}

export default Image;