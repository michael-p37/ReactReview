// AuthenticatedApp.jsx
import { useEffect, useState } from "react";
import type { Pokemon, PokemonFavorites } from "../Interface";
import { createFavorite, getFavorites, removeFavorite } from "../services/FavoritesService";
// import FavoritesPage from "../views/FavoritesPage";
import SearchPage from "../views/SearchPage"
import FavoritesPage from "../views/FavoritesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AuthenticatedApp() {
  const [favorites, setFavorites] = useState<PokemonFavorites[]>([]);
  
  useEffect(() => {
    getFavorites().then((data) => setFavorites(data)); //?? data
  }, []);  //?? favorites
  console.log("Favorites in AuthenticatedApp: ", favorites);

  function handleAddFavorite(pokemon: Pokemon) {
    const data = {
      id: 0,
      pokemon_name: pokemon.name,
      pokemon_id: pokemon.id,
      pokemon_type: pokemon.types[0].type.name,
      pokemon_avatar_url:
        pokemon.sprites.other["official-artwork"].front_default,
    };
    createFavorite(data)
      .then((newFavorite) => setFavorites([...favorites, newFavorite]))
      .catch((error) => console.log(error));
  }
  function handleRemoveFavorite(pokemon: Pokemon) {
    const favorite = favorites.find((favorite) => favorite.pokemon_name === pokemon.name);
    if (!favorite) return; // salimos si no existe
    console.log(favorite.id);
    removeFavorite(favorite.id).then(() => {
      const newFavorites = favorites.filter(fav => fav.pokemon_name !== pokemon.name);
      setFavorites(newFavorites);
    });
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
        element={<SearchPage 
        favorites={favorites} 
        onAddFavorites={handleAddFavorite}
        onRemoveFavorites={handleRemoveFavorite}
        />
      }
      />
      <Route
        path="/favorites"
        element={<FavoritesPage favorites={favorites} />}
      />
      </Routes>
    </BrowserRouter>
  )
}

export default AuthenticatedApp