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
    context.closeCheckoutSideMenu();
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
        <div className='absolute top-0 right-0 m-2 bg-black rounded-full'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
            />
          </svg>
        </div>
      );
    } else {
      return (
        <div
          className='absolute top-0 right-0 m-2 rounded-full'
          onClick={(event) => addProductToCart(event, data.data)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
            />
          </svg>
        </div>
      );
    }
  };

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
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

      <p className='flex justify-between items-center'>
        <span className='text-sm font-light line-clamp-2 w-40'>
          {data.data.title}
        </span>
        <span className='text-lg font-medium'>${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
