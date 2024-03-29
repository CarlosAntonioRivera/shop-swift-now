import { XCircleIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { Link } from 'react-router-dom';
import { totalPrice, currentDate } from '../../utils';
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

  const handleCheckout = () => {
    const orderToAdd = {
      date: currentDate(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.closeCheckoutSideMenu();
    context.setSearchByTitle('');
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } checkout-side-menu scrollable-cards flex-col fixed right-0 border-l-2 bg-white`}
    >
      <div className='flex justify-between items-center px-5 py-4'>
        <h2 className='font-medium text-xl'>My Order</h2>

        <XCircleIcon
          className='h-6 w-6 cursor-pointer'
          onClick={() => context.closeCheckoutSideMenu()}
        />
      </div>

      <div className='px-2 overflow-y-scroll flex-1'>
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

      <div className='px-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>
            ${totalPrice(context.cartProducts)}
          </span>
        </p>

        <Link to='/my-orders/last'>
          <button
            className='bg-black py-3 text-white w-full rounded-lg mb-4 font-medium'
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
