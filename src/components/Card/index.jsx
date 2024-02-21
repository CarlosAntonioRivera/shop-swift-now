import { PlusCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';

const Card = (data) => {
  // Card . Change first letter to uppercase
  const category =
    data.data.category[0].toUpperCase() + data.data.category.slice(1);

  // Context .
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <CheckCircleIcon className='h-6 w-6 text-white absolute bottom-0 right-0 m-1 bg-black rounded-full' />
      );
    } else {
      return (
        <PlusCircleIcon
          className='h-6 w-6 absolute bottom-0 right-0 m-1'
          onClick={(event) => addProductToCart(event, data.data)}
        />
      );
    }
  };

  return (
    <div
      className='border cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(data.data)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {category}
        </span>
        <img
          className='w-full h-full object-contain rounded-lg'
          src={data.data.image}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>

      <p className='flex justify-between p-1 h-10 items-center bg-[#e5e7eb] rounded-b-lg'>
        <span className='text-sm font-light line-clamp-2 w-40 p-1'>
          {data.data.title}
        </span>
        <span className='text-lg font-medium'>${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
