import { Route, Routes } from "react-router";
import { Home, Layout, NotFound, PriceList } from "./page";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cennik" element={<PriceList />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
