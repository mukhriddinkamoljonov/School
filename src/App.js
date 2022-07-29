import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import { Main } from "./Pages/Main";

function App({ pageProps }) {
  return (
    <>
      <Layout>{pageProps}</Layout>
      <div className="container">
        <Routes>
          {Main.map((page) => (
            <Route path={page?.path} element={page?.page} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
