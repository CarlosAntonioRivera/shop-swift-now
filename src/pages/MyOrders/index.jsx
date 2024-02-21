import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import OrdersCard from '../../components/OrdersCard';

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1 className='font-medium text-2xl'>My Orders</h1>
        </div>

        {context.order.map((order, index) => (
          <Link
            key={index}
            to={`/my-orders/${index}`}
          >
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
              date={order.date}
            />
          </Link>
        ))}
      </Layout>
    </>
  );
}

export default MyOrders;
