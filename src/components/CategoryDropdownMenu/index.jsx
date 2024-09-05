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
        <div className='absolute z-10 mt-1 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <ul className='text-center p-2'>
            <li>
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
            <li>
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

            <li>
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
      return <ChevronUpIcon className='h-4 w-4 ml-1' />;
    }

    return <ChevronDownIcon className='h-4 w-4 ml-1' />;
  };

  return (
    <div className='relative'>
      <button
        onClick={openDropdwonMenu}
        className='flex items-center w-full px-2 py-2 rounded-md hover:bg-white focus:outline-none'
      >
        <span className='font-normal w-full'>Categories</span>

        {renderIcon()}
      </button>

      {renderDropdwonMenu()}
    </div>
  );
};

export default CategoryDropdwonMenu;
