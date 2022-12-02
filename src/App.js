import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import {AppProvider} from "./context";
import SingleCocktail from './pages/SingleCocktail';
function App() {
  return (
    <AppProvider>
    <Router >
      <Navbar />
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
    </AppProvider>
  );
}

export default App;
