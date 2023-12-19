import { Route, Routes } from "react-router-dom";
import Layout from "components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "pages/Home";
import Users from "pages/Users";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element="Page is not found" />
        </Routes>
      </Layout>
      {/* <Homework31 /> */}
    </>
  );
}

export default App;
