import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Weather from "pages/Weather";
import WeatherHome from "pages/Weather/components/WeatherHome";
import Weathers from "pages/Weather/components/Weathers";
import Homework36 from "homeworks/homework36";

function App() {
  return (
    <>
      <GlobalStyles />
      <Weather>
        <Routes>
          <Route path="/" element={<Homework36 />} />
          <Route path="/weathers" element={<Weathers />} />
          <Route path="*" element="Page is not found" />
        </Routes>
      </Weather>
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
      {/* <CatFacts /> */}
    </>
  );
}

export default App;
