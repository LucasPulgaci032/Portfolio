
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ProjectPage from "./Pages/ProjetosPage";
import SobrePage from "./Pages/HomePage";
import StartPage from "./Pages/InicioPage";


function App() {
 
    

  return (
    <Router>
      <Header />
      <main style={{ marginTop: "80px", padding: "20px" }}>
        <Routes>

          <Route path="/" element={<StartPage/>} />

          <Route path="/sobre" element={<SobrePage />} />
         
          <Route path="/projetos" element={<ProjectPage />} />
          
         
        </Routes>
      </main>
    </Router>
  );
}

export default App;
