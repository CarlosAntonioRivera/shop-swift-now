import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const category =
    data.data.category[0].toUpperCase() + data.data.category.slice(1);

  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {category}
        </span>
        <img
          className='w-full h-full object-contain rounded-lg'
          src={data.data.image}
          alt={data.data.title}
        />
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'
          onClick={() => context.setCount(context.count + 1)}
        >
          +
        </div>
      </figure>

      <p className='flex justify-between'>
        <span className='text-sm font-light line-clamp-2 w-40'>
          {data.data.title}
        </span>
        <span className='text-lg font-medium'>${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
