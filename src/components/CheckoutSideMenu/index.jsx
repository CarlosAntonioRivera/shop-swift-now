import { XCircleIcon } from '@heroicons/react/24/solid';
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

    if (context.cartProducts.length <= 1) {
      context.closeCheckoutSideMenu();
    }
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
      } checkout-side-menu scrollable-cards flex-col fixed right-0 border-l bg-white`}
    >
      <section className='flex justify-between items-center px-5 py-4 h-[10%]'>
        <h2 className='font-bold text-xl'>My Order</h2>

        <XCircleIcon
          className='h-6 w-6 cursor-pointer'
          onClick={() => context.closeCheckoutSideMenu()}
        />
      </section>

      <section className='px-2 overflow-y-scroll flex-1'>
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
      </section>

      <section className='px-6 pt-1'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-bold'>Total:</span>
          <span className='font-bold text-2xl'>
            ${totalPrice(context.cartProducts)}
          </span>
        </p>

        <Link to='/my-orders/last'>
          <button
            className='bg-black py-3 text-white w-full rounded-lg mb-4 font-semibold'
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </section>
    </aside>
  );
};

export default CheckoutSideMenu;
