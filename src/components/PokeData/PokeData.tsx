import styled from "@emotion/styled";
import { RiStarFill } from "react-icons/ri";
import type { PokemonDataProps } from "../../Interface";

export const PokeImage = styled.img`
  max-width: 144px;
`;

function formatId(id: number | string) {
  id = String(id);
  return id.length < 2 ? `#00${id}` : id.length < 3 ? `#0${id}` : `#${id}`;
}

const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${'#985dd0'};
  border: none;
  border-radius: 0.8rem;
  padding: 0.5rem 1rem;
  font-family: ${'sans-serif'};
  font-weight: bold;
  color: white;
`;

function PokemonData({ dataPokemon, onAddFavorite, isFavorite, onRemoveFavorite }: PokemonDataProps) {
  const regularContent = (
    <>
      <RiStarFill color={'coral'} /> Mark as favorite
    </>
  );

  const favoriteContent = (
    <>
      <RiStarFill color={'blue'} /> Remove Favorite
    </>
  );
  return (
    <div>
      <h2>{dataPokemon.name}</h2>
      <p>{formatId(dataPokemon.id)}</p>
      {dataPokemon.id ? (
      <PokeImage
        src={dataPokemon.sprites.other["official-artwork"].front_default}
        alt={dataPokemon.name}
      />): null}
      {dataPokemon.types?.map((element) => (
        <p key={element.slot}>{element.type.name}</p>
      ))}
      <p>Height: {dataPokemon.height / 10} m</p>
      <p>Weight: {dataPokemon.weight / 10} kg</p>
    <FavoriteButton onClick={() => isFavorite 
      ? onRemoveFavorite() 
      : onAddFavorite()
      }>
        {isFavorite ? favoriteContent : regularContent}
    </FavoriteButton>
    </div>
  );
}
export default PokemonData;