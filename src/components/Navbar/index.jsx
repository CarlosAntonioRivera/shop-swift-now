import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const context = useContext(ShoppingCartContext);

  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 font-light bg-[#d1d5db]'>
      <ul className='flex items-center gap-5'>
        <li className='font-semibold text-xl'>
          <NavLink to='/'>ShopNow</NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory("men's clothing")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/jewelery'
            onClick={() => context.setSearchByCategory('jewelery')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelery
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-5'>
        <li className='text-black/60'>carlosrivera@gmail.com</li>
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
          >
            Sign In
          </NavLink>
        </li>
        <li
          className='flex cursor-pointer'
          onClick={() => context.openCheckoutSideMenu()}
        >
          <ShoppingCartIcon className='h-6 w-6' />

          <div className='mx-1'>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
