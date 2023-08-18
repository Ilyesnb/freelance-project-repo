import "./styles/App.css"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CompanyPage from "./pages/CompanyPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/entreprise" element={<CompanyPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;