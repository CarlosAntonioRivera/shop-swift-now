import './App.css';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';

function App() {
  return (
    <>
      <div className='bg-red-300'>
        <Home />
        <MyAccount />
        <MyOrder />
        <MyOrders />
        <NotFound />
        <SignIn />
      </div>
    </>
  );
}

export default App;
