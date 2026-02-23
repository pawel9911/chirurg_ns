import { Route, Routes } from "react-router";
import {
  Contact,
  Home,
  Layout,
  NotFound,
  PriceList,
  Specialist,
  Specialists,
  Surgeries,
  Surgery,
} from "./page";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/specjalista" element={<Specialists />} />
        <Route path="/specjalista/:id" element={<Specialist />} />
        <Route path="/zabiegi/:id" element={<Surgeries />} />
        <Route path="/zabiegi/:id/:subId" element={<Surgery />} />
        <Route path="/cennik" element={<PriceList />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
