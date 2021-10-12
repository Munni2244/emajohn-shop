import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import Management from './component/Management/Management';
import NotFound from './component/NotFound/NotFound';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Register from './component/Register/Register';
import Shipping from './component/Shipping/Shipping';
import Shop from './component/Shop/Shop';
import AuthProvider from './Hooks/AuthProvider';
import Order from './Order/Order';

function App() {
  return (
    <div >
    
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>

       <Route exact path="/">
        <Shop></Shop>
       </Route>

       <Route exact path="/shop">
        <Shop></Shop>
       </Route>

       <Route path="/management">
        <Management></Management>
         </Route> 

       <Route path="/order">
         <Order></Order>
         </Route> 

         <PrivateRoute path="/placeorder">
           <PlaceOrder></PlaceOrder>
         </PrivateRoute>

         <PrivateRoute path="/shipping">
           <Shipping></Shipping>
         </PrivateRoute>

         <Route path="/login">
           <Login></Login>
         </Route>

         <Route path="/register">
        <Register></Register>
         </Route>

       <Route path="*">
         <NotFound></NotFound>
         </Route> 

      </Switch>
      </BrowserRouter>
      </AuthProvider>
    
    </div>
  );
}

export default App;
