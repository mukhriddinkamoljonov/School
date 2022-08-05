import City from "./cites/City";
import Home from "./home/Home";
import Umrah from "./umrah/Umrah";

export const Main = [
  {
    path: "/",
    page: <Home />,
  },
  {
    path: "/cites",
    page: <City />,
  },
 {
  path: "/umrah",
  page: <Umrah />
 }
];
