import { Route, Routes } from "react-router-dom";
import Layout from "components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "pages/Home";
import Users from "pages/Users";
import Homework33 from "homeworks/homework33";
import JokeGenerator from "components/JokeGenerator";
import CatFacts from "components/CatFacts";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element="Page is not found" />
        </Routes>
      </Layout> */}
      {/* <Homework31 /> */}
      {/* <Homework33 /> */}
      {/* <JokeGenerator /> */}
      <CatFacts />
    </>
  );
}

export default App;
