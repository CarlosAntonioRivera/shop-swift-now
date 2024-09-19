import { XCircleIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import './ProductDetail.css';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  const description = context.productToShow.description;

  const productDescription = () => {
    if (description) {
      const newDescription = description
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return newDescription;
    }
  };

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? 'flex' : 'hidden'
      } product-detail flex-col fixed left-0 border-r bg-white`}
    >
      <section className='flex justify-between items-center h-[10%] px-5 py-4'>
        <h2 className='font-bold text-xl'>Detail</h2>

        <XCircleIcon
          className='h-6 w-6 cursor-pointer'
          onClick={() => context.closeProductDetail()}
        />
      </section>

      <section className='h-[90%]'>
        <figure className='h-1/2 px-6'>
          <img
            className='w-full h-full object-contain rounded-lg'
            src={context.productToShow.image}
            alt={context.productToShow.title}
          />
        </figure>

        <p className='flex flex-col h-1/2 px-5 py-3'>
          <span className='font-bold text-2xl mb-2'>
            ${context.productToShow.price}
          </span>
          <span className='font-semibold text-md mb-2'>
            {context.productToShow.title}
          </span>
          <span className='font-medium text-sm overflow-y-auto'>
            {productDescription()}
          </span>
        </p>
      </section>
    </aside>
  );
};

export default ProductDetail;
