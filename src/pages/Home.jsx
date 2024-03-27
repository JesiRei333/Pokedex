import { Outlet, Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="bg-slate-950 ">
      <nav className="  fixed  w-full table-fixed flex justify-center items-center gap-12 p-0 bg-white/65">
        <Link to="/pokemon">
          <div className="flex justify-center items-center ">
            <img
              className="size-9"
              src="    https://cdn-icons-png.flaticon.com/512/287/287221.png "
              alt="pokebola"
            />
            <p>Pokedex</p>
          </div>
        </Link>

        <Link to="/pokemonGatcha">
          <div className="flex ">
            <div>
              {" "}
              <img
                className="size-9 justify-center items-center"
                src="   https://cdn-icons-png.flaticon.com/512/188/188982.png "
                alt="vidente"
              />
            </div>
            <div className="flex justify-center items-center ">
              <p>PokeGatcha </p>
            </div>
          </div>
        </Link>

        <Link className="" to="/pokemonInicial">
          <div className="flex min-w-90 max-w-90">
            <div>
              {" "}
              <img
                className="size-9"
                src="https://cdn-icons-png.flaticon.com/512/362/362000.png"
                alt="principal"
              />
            </div>
            <div className="flex justify-center items-center ">
              <p>Poke-inicial</p>
            </div>
          </div>
        </Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
}
