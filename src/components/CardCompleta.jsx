import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PokeCardCompleta() {
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
      <article>
        {!pokemon.sprites && <p> cargando </p>}

        <div
          className="pb-4 hover:translate-x-8 hover:translate-y-8 hover:shadow-xl  hover:shadow-rose-900/80  rounded-[15px]
         font-extralight text-black text-xl flex flex-col items-center p-2.5"
        >
          <img
            className="size-9"
            src="   https://cdn-icons-png.flaticon.com/512/188/188995.png "
            alt="iconEevee"
          />
          <div className="flex flex-col items-center text-3xl font-extrabold gap-1 text-white">
            <p>{pokemon.name.toUpperCase()}</p>
          </div>

          <div>
            <img
              className=""
              src={pokemon.sprites?.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
          </div>

          <div
            className="sm: grid grid-cols-2 md:grid-cols-3 gap-6 bg-contain text-white bg-opacity-1 rounded-2xl
            align-middle justify-center text-center text-base
          bg-[url('https://wallpapers-clan.com/wp-content/uploads/2022/05/pokemon-gengar-minimalist-wallpaper.jpg')]"
          >
            <div className="flex flex-col p-10 gap-0.5 border-r-4 ">
              <p className="text-xl font-extrabold gap-1">Tipo:</p>
              <p>{pokemon.types[0]?.type?.name}</p>
              <p>{pokemon.types[1]?.type?.name}</p>
              <p>{pokemon.types[2]?.type?.name}</p>
            </div>

            <div className="flex flex-col  p-10 gap-0.5 md:border-r-4">
              <p className="text-xl font-extrabold gap-1">Habilidades:</p>
              <p>{pokemon.abilities[0]?.ability?.name}</p>
              <p>{pokemon.abilities[1]?.ability?.name}</p>
              <p>{pokemon.abilities[2]?.ability?.name}</p>
            </div>

            <div className="flex  flex-col md:p-10 gap-0.5 border-r-4 ">
              <p className="text-xl font-extrabold gap-1">Experiencia base:</p>

              <p>{pokemon.base_experience}</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
