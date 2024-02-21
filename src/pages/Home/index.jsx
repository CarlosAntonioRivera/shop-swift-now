import Layout from '../../components/Layout';
import Card from '../../components/Card';
import ProductDetail from '../../components/ProductDetail';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card
          key={item.id}
          data={item}
        />
      ));
    } else {
      return (
        <>
          <p className='col-start-1 col-end-5 text-center p-20 font-normal text-2xl text-black/60'>
            No products found with that title
          </p>
        </>
      );
    }
  };

  return (
    <>
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1 className='font-medium text-2xl'>Exclusive Products</h1>
        </div>

        <input
          type='text'
          placeholder='Search a product'
          className='rounded-lg border border-black w-96 p-4 mb-6 focus:placeholder:text-transparent'
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />

        <div className='grid gap-5 grid-cols-4 place-content-center w-full max-w-screen-lg'>
          {renderView()}
        </div>
        <ProductDetail />
      </Layout>
    </>
  );
}

export default Home;
