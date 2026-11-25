import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';

function App() {
return (
<>
<Navbar />
<Route path="/products" element={<Products />} />
</>
)
}
export default App;