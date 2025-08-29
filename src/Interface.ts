// Used in
export interface inputProps {
  type?: string;
  id?: string;
  label?: string; 
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
// Used in
export interface ApiFetchProps {
    method?: string;
    headers?: HeadersInit;
    body?: unknown;
}
// Used in
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}
// Used in
export interface LoginResponse {
  token: string;
  user: User;
}
// Used in
export interface Credentials {
    email: string;
    password: string;
}
// Used in
export interface CreateUserProp extends Credentials {
    first_name: string;
    last_name: string;
}
// Used in
export interface CreateUserResponse {
  token: string;
  user: User;
}
// Used in
export interface LoginFormProps {
  onLogin: (credentials: Credentials) => void;
}
// Used in
export interface SignupFormProps {
  onSignup: (userData: CreateUserProp) => void;
}

// Used in
export interface UnauthenticatedAppProps {
  onLogin: (credentials: Credentials) => void;
  onSignup: (userData: CreateUserProp) => void;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
// Used in
export interface Pokemon {
  id: number;
  name: string;
  avatar_url: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  }; 
  types: PokemonType[];
  height: number;
  weight: number;
}
// used in SearchPage.tsx
export interface StateTypes {
   status: "idle" | "pending" | "success" | "error";
    data: Pokemon | null;
    error: string | null;
}
// Used in SearchPage.tsx and FavoritesService.ts
export interface PokemonFavorites {
  id: number; // id del favorito en la base de datos
  pokemon_name: string ;
  pokemon_id: number;
  pokemon_type: string;
  pokemon_avatar_url:string;
}
export type pokeResponse = {
  ok: boolean;
  data: PokemonFavorites;
};
// Used in AuthenticatedApp.tsx - SearchPage()
export type SearchPageProps= {
  favorites: PokemonFavorites[]; 
  onRemoveFavorites: (pokemon: Pokemon) => void,
  onAddFavorites: (pokemon: Pokemon) => void
}
// Used in PokeData.tsx - PokeData() 
export type PokemonDataProps = {
   dataPokemon: Pokemon ; 
   onAddFavorite: () => void; 
   isFavorite: boolean;
  onRemoveFavorite: () => void;
}