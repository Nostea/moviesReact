import "./App.css";
import DetailPage from "./assets/page/DetailPage";
import Home from "./assets/page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
