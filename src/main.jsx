import ReactDOM from "react-dom/client";
import "./index.css";
import Pokemon from "./pages/Pokemon";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonInicial from "./pages/PokeInicial";
import PokemonGatcha from "./pages/Gatcha";
import PokeCardCompleta from "./components/CardCompleta";
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
        element: <PokemonGatcha />,
      },
      {
        path: "/pokemonInicial",
        element: <PokemonInicial />,
      },
      {
        path: "/pokemonCardCompleta/:name",
        element: <PokeCardCompleta />,
      },
    ],
  },
  {
    path: "/login",
    element: <p>hola♥</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
