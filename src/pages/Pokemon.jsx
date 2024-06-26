import { useEffect, useState } from "react";
import PokemonCard from "../components/PokeCard";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [countPokemon, setCountPokemon] = useState();

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
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${countPokemon}`)
      .then((response) => response.json())
      .then((json) => {
        setPokemons(json.results);
      })
      .catch((error) => {
        console.error("Error fetching" + error);
      });
  }, [countPokemon]);

  return (
    <main
      className="bg-[url('https://wallpapers-clan.com/wp-content/uploads/2022/05/pokemon-gengar-minimalist-wallpaper.jpg')]  bg-opacity-80 bg-right-bottom  bg-repeat
   bg-slate-950 text-slate-300 min-h-screen flex flex-col items-center p-10 gap-10"
    >
      <header className="flex flex-col items-center pt-10">
        <img
          className="w-full max-w-sm"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
          alt="pokemonLogo"
        />

        <p className="flex justify-center items-center align-middle font-semibold">
          <img
            className="size-9"
            src="   https://cdn-icons-png.flaticon.com/512/188/188995.png "
            alt="iconEevee"
          />
          Click ♥ Tap tu favorito
          <img
            className="size-9"
            src="   https://cdn-icons-png.flaticon.com/512/188/188995.png "
            alt="iconEevee"
          />
        </p>
      </header>

      <section className=" grid md:grid-cols-3 gap-5 rounded-xl w-full max-w-screen-md ">
        {pokemons.map((pokemon, index) => {
          return <PokemonCard key={`pokemon-${index}`} name={pokemon.name} />;
        })}
      </section>
    </main>
  );
}
