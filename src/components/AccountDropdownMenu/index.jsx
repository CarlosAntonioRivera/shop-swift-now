import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';

const AccountDropdwonMenu = () => {
  const context = useContext(ShoppingCartContext);

  const activeStyle = 'underline underline-offset-4';

  const [isDropdwonMenuOpen, setIsDropdwonMenuOpen] = useState(false);

  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);

    localStorage.setItem('sign-out', stringifiedSignOut);

    context.setSignOut(true);
    context.closeProductDetail();
    context.closeCheckoutSideMenu();
  };

  const openDropdwonMenu = () => {
    setIsDropdwonMenuOpen(!isDropdwonMenuOpen);
  };

  const renderDropdwonMenu = () => {
    if (isDropdwonMenuOpen) {
      return (
        <div className='absolute right-0 z-10 mt-1 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <ul className='text-right p-2'>
            <li className='text-black/60'>{parsedAccount?.email}</li>
            <li>
              <NavLink
                to='/my-orders'
                onClick={() => openDropdwonMenu()}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/my-account'
                onClick={() => openDropdwonMenu()}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                My Account
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/sign-in'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                onClick={() => handleSignOut()}
              >
                Sign out
              </NavLink>
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className='relative'>
      <button
        onClick={openDropdwonMenu}
        className='flex items-center w-full px-4 py-2 border bor rounded-full hover:bg-white focus:outline-none'
      >
        <UserCircleIcon className='h-6 w-6 mr-1' />

        <span className='font-normal w-full'>Account</span>
      </button>

      {renderDropdwonMenu()}
    </div>
  );
};

export default AccountDropdwonMenu;
