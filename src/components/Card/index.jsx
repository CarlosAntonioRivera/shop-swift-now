import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';

const Card = (data) => {
  // Card . Change first letter to uppercase
  const category = data.data.category.toUpperCase();

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
  };

  const renderButton = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <button
          className='flex items-center justify-center w-full h-10 border border-black bg-white rounded-lg'
          onClick={() => context.openCheckoutSideMenu()}
        >
          <CheckCircleIcon className='h-6 w-6' />
        </button>
      );
    } else {
      return (
        <button
          className='flex items-center w-full h-10 px-4 border border-black bg-white rounded-lg'
          onClick={(event) => addProductToCart(event, data.data)}
        >
          <PlusCircleIcon className='h-6 w-6' />
          <span className='font-bold text-sm w-full'>Add to Cart</span>
        </button>
      );
    }
  };

  return (
    <article
      className='border cursor-pointer w-60 h-80 rounded-lg'
      onClick={() => showProduct(data.data)}
    >
      <figure className='relative w-full h-3/5'>
        <img
          className='w-full h-full p-2 object-contain rounded-lg'
          src={data.data.image}
          alt={data.data.title}
        />
      </figure>

      <div className='flex flex-col justify-between h-2/5 pt-1 px-3 pb-3 items-center rounded-b-lg'>
        <span className='text-xs font-bold mb-1'>{category}</span>

        <section className='flex justify-between items-center w-full'>
          <p className='text-sm line-clamp-2 w-full p-1'>{data.data.title}</p>
          <span className='text-lg font-bold ml-1'>${data.data.price}</span>
        </section>

        {renderButton(data.data.id)}
      </div>
    </article>
  );
};

export default Card;
