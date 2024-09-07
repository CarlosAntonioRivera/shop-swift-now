import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import ShoppingCart from '../ShoppingCart';
import CategoryDropdwonMenu from '../CategoryDropdownMenu';
import AccountDropdwonMenu from '../AccountDropdownMenu';

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
          <AccountDropdwonMenu />

          <ShoppingCart />
        </>
      );
    } else {
      return (
        <ul className='flex justify-between w-24'>
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
            <ShoppingCartIcon className='h-7 w-7' />
          </li>
        </ul>
      );
    }
  };

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full h-16 py-5 px-8 bg-[#d1d5db]'>
      <ul className='flex items-center gap-5'>
        <li className='font-bold text-3xl'>
          <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>EzzShop</NavLink>
        </li>

        <CategoryDropdwonMenu />
      </ul>

      <div className='flex justify-center w-full'>
        <div className='relative flex items-center w-3/5'>
          <input
            type='text'
            className='w-full font-normal pl-10 pr-4 py-2 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            placeholder='Search a product'
            onChange={(event) => context.setSearchByTitle(event.target.value)}
          />

          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <MagnifyingGlassIcon className='w-5 h-5 text-gray-500' />
          </div>
        </div>
      </div>

      <ul className='flex items-center gap-5'>{renderView()}</ul>
    </nav>
  );
};

export default Navbar;
