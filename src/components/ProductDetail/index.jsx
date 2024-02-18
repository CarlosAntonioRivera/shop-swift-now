import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import './ProductDetail.css';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? 'flex' : 'hidden'
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center px-5 py-4'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div
          onClick={() => context.closeProductDetail()}
          className='cursor-pointer'
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
              d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
            />
          </svg>
        </div>
      </div>
    </aside>
  );
};

export default ProductDetail;
