
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import StartPage from "./Pages/InicioPage";
import ParticlesComponent from "./Particles/particles";
import FormsIndex from './Pages/Forms/index'
import ScrollToTop from './Styles/scrollTop'
function App() {
 
    

  return (
    <BrowserRouter>
     <ParticlesComponent id='particles'/>
     <ScrollToTop/>
     <Routes>
      <Route path='/' element={<StartPage/>}/>
      <Route path='/forms' element={<FormsIndex/>}/>
     </Routes>
    
    </BrowserRouter>
  );
}

export default App;