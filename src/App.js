import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import './App.css';
import Navbar from './NavBar';
import ProductList from './ProductList';
import Product from './Product';
import Cart from './Cart';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  // const cart = useSelector(state => state.cart);
  // const products = useSelector(state => state.products);
  // console.log(cart);

  const dispatch = useDispatch();

  const add = (id) => {
    dispatch({ type: ADD_TO_CART, id });
  }
  const remove = (id) => {
    dispatch({ type: REMOVE_FROM_CART, id });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route exact path='/'
            element={<ProductList
              add={add}
              remove={remove} />} />
          <Route exact path='/products/:id'
            element={<Product
              add={add}
              remove={remove} />} />
          <Route exact path='/cart'
            element={<Cart
              add={add}
              remove={remove} />} />
          <Route path='*'
            element={<Navigate to={'/'} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
