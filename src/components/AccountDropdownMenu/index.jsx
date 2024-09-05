import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
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
        <div className='absolute right-0 z-10 mt-2 w-36 p-5 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <ul className='text-right font-bold'>
            <li className='mb-5'>
              <NavLink
                to='/my-orders'
                onClick={() => openDropdwonMenu()}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                My orders
              </NavLink>
            </li>
            <li className='mb-5'>
              <NavLink
                to='/my-account'
                onClick={() => openDropdwonMenu()}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                My account
              </NavLink>
            </li>

            <hr />

            <li className='pt-5'>
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

  const renderIcon = () => {
    if (isDropdwonMenuOpen) {
      return <ChevronUpIcon className='h-3 w-3 ml-1' />;
    }

    return <ChevronDownIcon className='h-3 w-3 ml-1' />;
  };

  return (
    <div className='relative'>
      <button
        onClick={openDropdwonMenu}
        className='flex items-center w-full px-2 py-2 rounded-md hover:bg-white focus:outline-none'
      >
        <span className='font-normal'>{parsedAccount?.email}</span>

        {renderIcon()}
      </button>

      {renderDropdwonMenu()}
    </div>
  );
};

export default AccountDropdwonMenu;
