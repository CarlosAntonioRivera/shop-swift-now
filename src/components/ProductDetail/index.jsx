import { XCircleIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import './ProductDetail.css';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? 'flex' : 'hidden'
      } product-detail flex-col fixed right-0 border-l-2 bg-white`}
    >
      <div className='flex justify-between items-center px-5 py-4'>
        <h2 className='font-medium text-xl'>Detail</h2>

        <XCircleIcon
          className='h-6 w-6 cursor-pointer'
          onClick={() => context.closeProductDetail()}
        />
      </div>

      <figure className='px-6'>
        <img
          className='w-full h-64 object-contain rounded-lg'
          src={context.productToShow.image}
          alt={context.productToShow.title}
        />
      </figure>

      <p className='flex flex-col p-6 mb-2'>
        <span className='font-medium text-2xl mb-2'>
          ${context.productToShow.price}
        </span>
        <span className='font-medium text-md line-clamp-2 mb-1'>
          {context.productToShow.title}
        </span>
        <span className='font-lg text-sm line-clamp-5 overflow-y-auto'>
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
