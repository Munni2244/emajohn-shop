import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Management from './component/Management/Management';
import NotFound from './component/NotFound/NotFound';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import Shop from './component/Shop/Shop';
import Order from './Order/Order';

function App() {
  return (
    <div >
    
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

         <Route path="/placeorder">
           <PlaceOrder></PlaceOrder>
         </Route>

       <Route path="*">
         <NotFound></NotFound>
         </Route> 

      </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
