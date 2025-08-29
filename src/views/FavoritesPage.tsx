import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { removeFavorite } from "../services/FavoritesService";
import type { PokemonFavorites } from "../Interface";
import { PokeImage } from "../components/PokeData";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

type typColors = {
    bug: string;
    dark: string;
    dragon: string;
    electric: string;
    fairy: string;
    fighting: string;
    fire: string;
    flying: string;
    ghost: string;
    grass: string;
    ground: string;
    ice: string;
    normal: string;
    poison: string;
    psychic: string;
    rock: string;
    steel: string;
    water: string;
}

const typeColors: typColors ={
  bug: "#A8B820",
  dark: "#705848",
  dragon: "#7038F8",
  electric: "#F8D030",
  fairy: "#EE99AC",
  fighting: "#C03028",
  fire: "#F08030",
  flying: "#A890F0",
  ghost: "#705898",
  grass: "#78C850",
  ground: "#E0C068",
  ice: "#98D8D8",
  normal: "#A8A878",
  poison: "#A040A0",
  psychic: "#F85888",
  rock: "#B8A038",
  steel: "#B8B8D0",
  water: "#6890F0",
};

const PokeCard = styled("div")`
  border: 2px solid black;
	border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;
const Favorites = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const FavoritesPage = ({favorites}: {favorites: PokemonFavorites[]}) => {
  function handleDelete(id: number) {
    removeFavorite(id)
    .then(() => {
      console.log("Favorite removed");
    })
    .catch((err) => {
      console.error(err);
    });
  }   
  return (
    <Wrapper>
      <h3>Favorites</h3>
      <Link to="/">Search</Link>
      <Favorites>
      {favorites.map((fav) => (
        <PokeCard key={fav.id} style={{borderColor: typeColors[fav.pokemon_type as keyof typColors]}}>
        <div>
          <PokeImage src={fav.pokemon_avatar_url} alt={fav.pokemon_name} />
          <p>{fav.pokemon_type}</p>
          <p>{fav.pokemon_name}</p>
          <button onClick={() => handleDelete(fav.id)}>Delete</button>
        </div>
        </PokeCard>
      ))}
      </Favorites>

    </Wrapper>
  );
};

export default FavoritesPage;
