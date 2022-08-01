import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import { Main } from "./Pages/Main";

function App({ component: Component, pageProps }) {
  return (
    <>
      <Layout>
        {/* <Component {...pageProps} /> */}
        <div className="container">
          <Routes>
            {Main.map((page) => (
              <Route path={page?.path} element={page?.page} />
            ))}
          </Routes>
        </div>
      </Layout>
    </>
  );
}

export default App;
