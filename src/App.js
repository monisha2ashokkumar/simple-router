import './App.css';
import {Route} from 'react-router-dom'
import Welcome from './pages/Welcome'
import Products from './pages/Products'
import Header from './components/Header';
import ProductDetails from './pages/ProductDetails'
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
    <Route path='/' exact>
        <Redirect to='/welcome'></Redirect>
      </Route>
      <Route path='/welcome'>
        <Welcome/>
      </Route>
      <Route path='/products' exact>
        <Products/>
      </Route>
      <Route path='/products/:productId'>
        <ProductDetails/>
      </Route></Switch>
    </div>
  );
}

export default App;
