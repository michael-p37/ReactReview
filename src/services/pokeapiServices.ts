// pokeapi-service.js
const BASE_URI = 'https://pokeapi.co/api/v2/pokemon';
export function getPokemon(query: string){
  return fetch(`${BASE_URI}/${query}`)
  .then(res => res.json())
}