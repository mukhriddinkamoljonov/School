import City from "./cites/City";
import Home from "./home/Home";


export const Main = [
  {
    path: "/",
    page: <Home />,
  },
  {
    path: "/cites",
    page: <City />,
  },

];
