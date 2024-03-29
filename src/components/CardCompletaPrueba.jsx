import { useEffect, useState } from "react";
export default function PokeCardCompletaPrueba(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((response) => response.json())
      .then((json) => {
        setPokemon(json);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [props.name]);

  if (!pokemon.sprites) {
    return (
      <article className="w-full bg-slate-800 animate-pulse min-h-20"></article>
    );
  }
  return (
    <article>
      {!pokemon.sprites && <p> cargando </p>}

      <div
        className=" hover:translate-x-3 hover:translate-y-3 hover:shadow-xl  hover:shadow-rose-900/80  rounded-[15px]
         font-extralight text-black text-xl flex flex-col items-center "
      >
        <img
          className="size-9"
          src="   https://cdn-icons-png.flaticon.com/512/188/188995.png "
          alt="iconEevee"
        />
        <div className="flex flex-col items-center text-3xl font-extrabold  text-white hover:shadow-cyan-400/40 hover:shadow-2xl ">
          <p>
            {pokemon.id} {"° "} {props.name.toUpperCase()}
          </p>
        </div>

        <div className="hover:translate-x-5 hover:translate-y-5 ">
          <img
            className=""
            src={pokemon.sprites?.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        </div>

        <div
          className="sm:grid sm:grid-cols-2 md:grid-cols-3 bg-contain text-white bg-opacity-1 rounded-2xl
            align-middle justify-center text-center text-base
          bg-[url('https://wallpapers-clan.com/wp-content/uploads/2022/05/pokemon-gengar-minimalist-wallpaper.jpg')]
          hover:translate-x-1 hover:translate-y-1  pb-4 hover:shadow-2xl  hover:shadow-cyan-400/40"
        >
          <div className="flex flex-col  md:p-10 border-r-4  ">
            <p className="sm:gap-0 text-xl font-extrabold md:gap-1">Tipo:</p>
            <p>{pokemon.types[0]?.type?.name}</p>
            <p>{pokemon.types[1]?.type?.name}</p>
            <p>{pokemon.types[2]?.type?.name}</p>
          </div>

          <div className="flex flex-col  p-10 border-r-4">
            <p className="text-xl font-extrabold gap-1">Habilidades:</p>
            <p>{pokemon.abilities[0]?.ability?.name}</p>
            <p>{pokemon.abilities[1]?.ability?.name}</p>
            <p>{pokemon.abilities[2]?.ability?.name}</p>
          </div>

          <div className="flex  flex-col md:p-10  border-r-4 ">
            <p className="text-xl font-extrabold gap-1">Experiencia base:</p>

            <p>{pokemon.base_experience}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
