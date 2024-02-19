import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import OrderCard from '../../components/OrderCard';
import './CheckoutSideMenu.css';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );

    context.setCartProducts(filteredProducts);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } checkout-side-menu scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center px-5 py-4'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div
          onClick={() => context.closeCheckoutSideMenu()}
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

      <div className='px-2 overflow-y-scroll'>
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageURL={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
