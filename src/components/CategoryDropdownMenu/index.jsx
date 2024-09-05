import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';

const CategoryDropdwonMenu = () => {
  const context = useContext(ShoppingCartContext);

  const activeStyle = 'underline underline-offset-4';

  const [isDropdwonMenuOpen, setIsDropdwonMenuOpen] = useState(false);

  const openDropdwonMenu = () => {
    setIsDropdwonMenuOpen(!isDropdwonMenuOpen);
  };

  const renderDropdwonMenu = () => {
    if (isDropdwonMenuOpen) {
      return (
        <div className='absolute z-10 mt-2 w-36 p-5 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <ul className='text-left font-bold'>
            <li className='mb-5'>
              <NavLink
                to='/'
                onClick={() => {
                  context.setSearchByCategory();
                  openDropdwonMenu();
                }}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                All
              </NavLink>
            </li>

            <li className='mb-5'>
              <NavLink
                to='/clothes'
                onClick={() => {
                  context.setSearchByCategory("men's clothing");
                  openDropdwonMenu();
                }}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Clothes
              </NavLink>
            </li>

            <li className='mb-5'>
              <NavLink
                to='/jewelery'
                onClick={() => {
                  context.setSearchByCategory('jewelery');
                  openDropdwonMenu();
                }}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Jewelery
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/electronics'
                onClick={() => {
                  context.setSearchByCategory('electronics');
                  openDropdwonMenu();
                }}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Electronics
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
        <span className='font-normal'>Categories</span>

        {renderIcon()}
      </button>

      {renderDropdwonMenu()}
    </div>
  );
};

export default CategoryDropdwonMenu;
