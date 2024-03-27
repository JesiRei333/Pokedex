import { Outlet, Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <nav className="  fixed text-base font-semibold w-full flex justify-center items-center gap-12 p-0 bg-white/65">
        <Link to="/pokemon">
          <div className="flex justify-center items-center ">
            <img
              className="size-9"
              src="    https://cdn-icons-png.flaticon.com/512/287/287221.png "
              alt="pokebola"
            />
            <p className=" hover:font-bold">Pokédex</p>
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
              <p className=" hover:font-bold">PokeGatcha </p>
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
              <p className=" hover:font-bold">Poke-inicial</p>
            </div>
          </div>
        </Link>
      </nav>
      <section>
        <Outlet />
      </section>
      <section className="flex  items-center align-middle justify-center p-20">
        <Link to="/pokemon">
          <img
            className="size-96 "
            src="    https://cdn-icons-png.flaticon.com/512/287/287221.png "
            alt="pokebola"
          />

          <p className=" flex text-white text-center text-4xl font-semibold hover:font-bold ">
            <img
              className="size-9"
              src="   https://cdn-icons-png.flaticon.com/512/188/188995.png "
              alt="iconEevee"
            />{" "}
            Pokédex Click Me!
            <img
              className="size-9"
              src="   https://cdn-icons-png.flaticon.com/512/188/188995.png "
              alt="iconEevee"
            />
          </p>
        </Link>
      </section>
    </main>
  );
}
