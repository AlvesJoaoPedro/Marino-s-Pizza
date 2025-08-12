import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/App.css"
import Home from './Home';
import Cardapio from './Cardapio';

function App()
{
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cardapio" element={<Cardapio/>}></Route>
    </Routes>
    </BrowserRouter>
)
}
export default App;