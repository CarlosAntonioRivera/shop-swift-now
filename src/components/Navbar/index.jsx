import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import ShoppingCart from '../ShoppingCart';
import CategoryDropdwonMenu from '../CategoryDropdownMenu';

const Navbar = () => {
  const context = useContext(ShoppingCartContext);

  const activeStyle = 'underline underline-offset-4';

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

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);

    localStorage.setItem('sign-out', stringifiedSignOut);

    context.setSignOut(true);
    context.closeProductDetail();
    context.closeCheckoutSideMenu();
  };

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li className='text-black/60'>{parsedAccount?.email}</li>
          <li>
            <NavLink
              to='/my-orders'
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/my-account'
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/sign-in'
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => handleSignOut()}
            >
              Sign out
            </NavLink>
          </li>
          <li className='flex items-center'>
            <ShoppingCart />
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <NavLink
              to='/sign-in'
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => handleSignOut()}
            >
              Sign in
            </NavLink>
          </li>
          <li className='flex items-center'>
            <ShoppingCartIcon className='h-6 w-6' />
          </li>
        </>
      );
    }
  };

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 font-light bg-[#d1d5db]'>
      <ul className='flex items-center gap-5'>
        <li className='font-semibold text-xl'>
          <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>
            ShopSwiftNow
          </NavLink>
        </li>

        <CategoryDropdwonMenu />
      </ul>

      <ul className='flex items-center gap-5'>{renderView()}</ul>
    </nav>
  );
};

export default Navbar;
