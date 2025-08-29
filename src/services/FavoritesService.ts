// favorites-service.js
import type { Pokemon, PokemonFavorites } from "../Interface";
import apiFetch from "./ApiFetch";

export function createFavorite(data: PokemonFavorites) {
  return apiFetch<PokemonFavorites>("/favorites", {
    method: "POST",
    body: (data),
  });
}

export function removeFavorite(id: Pokemon['id']) {
  return apiFetch<PokemonFavorites>(`/favorites/${id}`, { method: "DELETE" });
}

export function getFavorites() {
  return apiFetch<PokemonFavorites[]>("/favorites");
}

