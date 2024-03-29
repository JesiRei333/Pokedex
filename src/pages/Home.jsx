import { Outlet, Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <nav className=" fixed flex sm:text-sm justify-center items-center  font-semibold w-full md:gap-12  bg-white/20 md:text-xl md:justify-around md:p-1.5 md:pl-60 md:pr-60">
        <Link className="  md:pl-3" to="/">
          <div className="flex justify-center items-center   ">
            <img
              className=" size-7 md:size-9 pl-1"
              src="https://cdn-icons-png.flaticon.com/512/1408/1408856.png "
              alt="pokebola"
            />
            <p className=" hover:font-bold pl-2">Home</p>
          </div>
        </Link>

        <Link to="/pokemon">
          <div className="flex justify-center items-center ">
            <img
              className="size-7 md:size-9 pl-1"
              src="    https://cdn-icons-png.flaticon.com/512/287/287221.png "
              alt="pokebola"
            />
            <p className=" hover:font-bold pl-1">Pokédex</p>
          </div>
        </Link>

        <Link to="/pokemonGatcha">
          <div className="flex justify-center items-center ">
            <div>
              {" "}
              <img
                className="size-7 md:size-9 pl-1 "
                src="   https://cdn-icons-png.flaticon.com/512/188/188982.png "
                alt="vidente"
              />
            </div>
            <div className="flex justify-center items-center ">
              <p className=" hover:font-bold pl-1">PokeGacha </p>
            </div>
          </div>
        </Link>

        <Link className="" to="/pokemonInicial">
          <div className="flex justify-center items-center">
            <div>
              {" "}
              <img
                className="size-7 md:size-9 pl-1"
                src="https://cdn-icons-png.flaticon.com/512/362/362000.png"
                alt="principal"
              />
            </div>
            <div className="flex justify-center items-center ">
              <p className=" hover:font-bold pl-1">Poke-inicial</p>
            </div>
          </div>
        </Link>
      </nav>
      <section>
        <Outlet />
      </section>
      <section className="flex  items-center align-middle justify-center p-20 ">
        <Link to="/pokemon">
          <img
            className=" max-h-50  max-w-50 md:max-h-50  max-w-50"
            src="    https://cdn-icons-png.flaticon.com/512/287/287221.png "
            alt="pokebola"
          />

          <p className=" flex justify-center text-white text-center text-4xl font-semibold hover:font-bold pt-8  ">
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
