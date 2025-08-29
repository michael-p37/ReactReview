import 'ldrs/ring';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { getPokemon } from '../services';
import Input from '../components/Input';
import PokemonData from '../components/PokeData';
import type { SearchPageProps, StateTypes } from '../Interface';

const SearchPage = ({favorites, onAddFavorites, onRemoveFavorites}: SearchPageProps) => {
  const [query, setQuery] = useState<string>("");
  const [state, setState] = useState<StateTypes>({
    status: "idle", // success, error,pending
    data: null,
    error: null,
  });
  const { status, data: pokemon, error} = state;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(query);
    if(query.length === 0) return;
    setState({ status: "pending", data: null, error: null });
    getPokemon(query)
      .then((data) => {
         setState({ status: "success", data: data, error: null });
      })
      .catch((err) =>{
        setState({
          status: "error",
          data: null,
          error: "El pokemon no existe! Intenta de nuevo",
        });
        console.error(err)
      }
      );
  }
 console.log('Pokemones', pokemon, "Favorites: ",favorites);
  const isFavorite = favorites.find((fav) => fav.pokemon_name === pokemon?.name)
    ? true
    : false;
  return (
    <div>
      <Link to="favorites">Go to Favorites</Link>
      <form onSubmit={handleSubmit}>
        <Input
          name="query"
          placeholder="pokemon name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      {status === "idle" && "Ready to search"}
      {status === "pending" && "Loading..."}
      {status === "success" && pokemon && 
        <PokemonData 
        dataPokemon={pokemon} 
        onAddFavorite={() => onAddFavorites(pokemon)} 
        // onRemoveFavorite={handleRemoveFavorite}
        onRemoveFavorite={() => onRemoveFavorites(pokemon)}
        isFavorite={isFavorite}
      />}
      {status === "error" && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SearchPage;
