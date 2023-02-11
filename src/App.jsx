import { Routes, Route } from "react-router-dom";
import { Status, Shopping, Ruta404, Catalogue } from "~/pages";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Catalogue />} />
      <Route path="/shopping" element={<Shopping />} />
      <Route path="/status" element={<Status />} />
      <Route path="*" element={<Ruta404 />} />
    </Routes>
  );
}

export default App;
