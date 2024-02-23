import { useContext } from 'react';
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
import {
  ShoppingCartContext,
  ShoppingCartProvider,
  initializeLocalStorage,
} from '../../context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SignIn from '../SignIn';
import NotFound from '../NotFound';
import NavBar from '../../components/Navbar';
import CheckoutSideMenu from '../../components/CheckoutSideMenu';
import './App.css';

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext);

  // Sign Out
  const signOut = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;

  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);

  // Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/jewelery', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    {
      path: '/my-account',
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <MyAccount />
        ) : (
          <Navigate
            replace
            to={'sign-in'}
          />
        ),
    },
    {
      path: '/my-order',
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <MyOrder />
        ) : (
          <Navigate
            replace
            to={'sign-in'}
          />
        ),
    },
    {
      path: '/my-orders',
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <MyOrders />
        ) : (
          <Navigate
            replace
            to={'sign-in'}
          />
        ),
    },
    {
      path: '/my-orders/last',
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <MyOrder />
        ) : (
          <Navigate
            replace
            to={'sign-in'}
          />
        ),
    },
    {
      path: '/my-orders/:id',
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <MyOrder />
        ) : (
          <Navigate
            replace
            to={'sign-in'}
          />
        ),
    },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }, // Cualquier otra ruta: /*
  ]);

  return routes;
};

const App = () => {
  initializeLocalStorage();

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
