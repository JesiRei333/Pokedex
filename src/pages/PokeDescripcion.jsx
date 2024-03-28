import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokeCardCompletaPrueba from "../components/CardCompletaPrueba";

export default function PokeCardStat() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((response) => response.json())
      .then((json) => {
        setPokemon(json);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [params.name]);

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
