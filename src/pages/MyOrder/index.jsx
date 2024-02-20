import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import Layout from '../../components/Layout';
import OrderCard from '../../components/OrderCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <Layout>
        MyOrder
        <div className='flex flex-col w-80'>
          {context.order?.slice(-1)[0].products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageURL={product.image}
              price={product.price}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default MyOrder;
