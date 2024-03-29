import { useEffect, useState } from "react";
import PokeCardCompletaPrueba from "../components/CardCompletaPrueba";

export default function PokemonInicial() {
  const [pokemon, setPokemon] = useState({});

  const PokeRandom = () => {
    const poke = ["1", "4", "7"];
    const pokeRandom = Math.floor(Math.random() * poke.length);
    return poke[pokeRandom];
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${PokeRandom()}`)
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
      <div>
        <p className="font-semibold text-xl flex flex-col items-center pt-10 ">
          tu Pokemón inicial es:
        </p>
      </div>
      <PokeCardCompletaPrueba name={pokemon.name} />
    </main>
  );
}
