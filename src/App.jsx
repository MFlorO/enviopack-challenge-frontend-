import { Routes, Route } from "react-router-dom";
import { Status, Home, Shopping, Ruta404, Catalogue } from "~/pages";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/shopping" element={<Shopping />} />
      <Route path="/status" element={<Status />} />
      <Route path="*" element={<Ruta404 />} />
    </Routes>
  );
}

export default App;
