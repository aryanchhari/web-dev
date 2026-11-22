import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  // This stores whatever is typed in the search box.
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <Routes>
        <Route
          path="/"
          element={<Home search={search} setSearch={setSearch} />}
        />

        {/* Other pages stay empty until you decide to build them. */}
        <Route path="*" element={null} />
      </Routes>
    </>
  );
}

export default App;
