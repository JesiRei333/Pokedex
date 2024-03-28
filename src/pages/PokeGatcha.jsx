import { useEffect, useState } from "react";
import PokeCardCompletaPrueba from "../components/CardCompletaPrueba";

export default function PokeGatcha() {
  const [pokemon, setPokemon] = useState({});

  const numRandom = (min, max) => {
    var random = Math.floor(Math.random() * (max - min) + min);
    return random;
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${numRandom(1, 185)}`)
      .then((response) => response.json())
      .then((json) => {
        setPokemon(json);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  if (!pokemon.sprites) {
    return (
      <article className="w-full bg-slate-800 animate-pulse min-h-20"></article>
    );
  }

  return (
    <main
      className="bg-[url('https://wallpapers-clan.com/wp-content/uploads/2022/05/pokemon-gengar-minimalist-wallpaper.jpg')]  bg-opacity-80 bg-right-bottom  bg-repeat
     bg-slate-950 text-slate-300 min-h-screen flex flex-col items-center p-10 gap-10"
    >
      <PokeCardCompletaPrueba name={pokemon.name} />
    </main>
  );
}
