import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function PokemonCard(props) {
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
    <article
      className="sm:hover:translate-x-2 hover:translate-y-2  bg-black/80  pb-4 md:hover:translate-x-8 md:hover:translate-y-8 hover:shadow-xl  hover:shadow-rose-900/80 
    bg-[url('https://wallpapers-clan.com/wp-content/uploads/2022/05/pokemon-gengar-minimalist-wallpaper.jpg')] bg-opacity-80 bg-contain hover:bg-none rounded-[15px]"
    >
      {!pokemon.sprites && <p> cargando </p>}
      <Link
        to={`/pokemonCardStat/${props.name}`}
        className="w-full text-lg bg-black/20 text-slate-300"
      >
        <div className=" sm:text-xl font-semibold text-white  md:font-extralight text-neutral-50/50 hover:font-bold flex flex-col bg-black/50 items-center p-0.5">
          <img
            className=""
            src={pokemon.sprites?.other["official-artwork"].front_default}
            alt=""
          />
          <img
            className="size-9 "
            src="https://cdn-icons-png.flaticon.com/512/14071/14071327.png"
            alt="mandoMorado"
          />
          <p className="hover:shadow-cyan-400 hover:shadow-2xl ">
            {" "}
            {props.name.toUpperCase()}
          </p>
        </div>
      </Link>
    </article>
  );
}
