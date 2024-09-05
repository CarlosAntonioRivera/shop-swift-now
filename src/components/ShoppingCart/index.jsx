import { useContext } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../context';

const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  const openCheckoutSideMenu = () => {
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };

  const renderCountProducts = () => {
    if (context.cartProducts.length > 0) {
      return context.cartProducts.length;
    }
  };

  return (
    <div
      className='relative flex gap-0.5 items-center cursor-pointer'
      onClick={() => openCheckoutSideMenu()}
    >
      <ShoppingCartIcon className='h-7 w-7 fill-none stroke-black' />

      <div className='absolute bottom-4 left-4 flex justify-center items-center rounded-full bg-black w-4 h-4 text-xs text-white'>
        {renderCountProducts()}
      </div>
    </div>
  );
};

export default ShoppingCart;
