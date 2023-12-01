import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Products from './pages/Products.jsx'
import ProductList from './pages/ProductList.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
   <>
   <Header/>
   <Routes>
        <Route path="/"  element={<Products/>}  /> 
        <Route path="/list"  element={<ProductList/>}  /> 
      </Routes>
   </>
    
  );
}

export default App;
