import { useEffect, useState } from "react";
import PokeCardCompletaPrueba from "../components/CardCompletaPrueba";

export default function PokeGatcha() {
  const [pokemon, setPokemon] = useState({});
  const [countPokemon, setCountPokemon] = useState();

  const numRandom = (min, max) => {
    var random = Math.floor(Math.random() * (max - min) + min);
    return random;
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((json) => {
        const count = json.count;
        setCountPokemon(count);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${numRandom(1, countPokemon)}`)
      .then((response) => response.json())
      .then((json) => {
        setPokemon(json);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [countPokemon]);

  if (!pokemon.sprites) {
    return (
      <article className="w-full bg-slate-800 animate-pulse min-h-20"></article>
    );
  }

  return (
    <main
      className="bg-[url('https://wallpapers-clan.com/wp-content/uploads/2022/05/pokemon-gengar-minimalist-wallpaper.jpg')]  bg-opacity-80 bg-right-bottom  bg-repeat
     bg-slate-950 text-slate-300 min-h-screen flex flex-col items-center pt-8 "
    >
      <div>
        <p className="font-semibold text-xl flex flex-col items-center pt-10 ">
          tu Pokemón de la suerte es:{" "}
          <img
            className="max-h-[80px]"
            src="https://cdn-icons-png.flaticon.com/512/188/188921.png"
            alt="gatchaImagen"
          />
        </p>
      </div>
      <PokeCardCompletaPrueba name={pokemon.name} />
    </main>
  );
}
