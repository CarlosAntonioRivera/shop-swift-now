import Layout from '../../components/Layout';
import Card from '../../components/Card';
import ProductDetail from '../../components/ProductDetail';
import { ShoppingCartContext } from '../../context';
import { useContext } from 'react';

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return context.filteredItems?.map((item) => (
          <Card
            key={item.id}
            data={item}
          />
        ));
      } else {
        return <div>No products found with that title</div>;
      }
    } else {
      return context.items?.map((item) => (
        <Card
          key={item.id}
          data={item}
        />
      ));
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
          className='rounded-lg border border-black w-80 p-4 mb-6'
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />

        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {renderView()}
        </div>
        <ProductDetail />
      </Layout>
    </>
  );
}

export default Home;
