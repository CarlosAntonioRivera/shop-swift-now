import { useContext } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../context';

const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  const openCheckoutSideMenu = () => {
    context.openCheckout();
    context.closeProductDetail();
  };

  return (
    <div
      className='relative flex gap-0.5 items-center cursor-pointer'
      onClick={() => openCheckoutSideMenu()}
    >
      <ShoppingCartIcon className='h-6 w-6 fill-none stroke-black' />

      <div className='absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-black w-4 h-4 text-xs text-white'>
        {context.cartProducts.length}
      </div>
    </div>
  );
};

export default ShoppingCart;
