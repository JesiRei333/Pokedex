import ReactDOM from "react-dom/client";
import "./index.css";
import Pokemon from "./pages/Pokemon";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonInicial from "./pages/PokeInicial";
import PokeDescripcion from "./pages/PokeGatcha";
import PokeGatcha from "./pages/PokeGatcha";
import PokeCardStat from "./pages/PokeDescripcion";
// <React.StrictMode>
//<App />
// </React.StrictMode>,

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/pokemon",
        element: <Pokemon />,
      },
      {
        path: "/pokemonGatcha",
        element: <PokeGatcha />,
      },
      {
        path: "/pokemonInicial",
        element: <PokemonInicial />,
      },
      {
        path: "/pokemonCardStat/:name",
        element: <PokeCardStat />,
      },
    ],
  },
  {
    path: "/login",
    element: <p>hola♥</p>,
  },
  {
    path: "/descrip",
    element: <PokeDescripcion />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
