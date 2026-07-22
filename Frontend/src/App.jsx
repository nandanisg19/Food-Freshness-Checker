import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CheckFreshness from "./pages/CheckFreshness";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/check-freshness"
          element={<CheckFreshness />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;