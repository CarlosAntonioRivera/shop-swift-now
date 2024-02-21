import {
  CalendarDaysIcon,
  ShoppingBagIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

const OrdersCard = (props) => {
  const { totalPrice, totalProducts, date } = props;

  return (
    <div className='flex justify-between items-center bg-[#d1d5db] border-black rounded-lg h-24 w-80 p-4 mb-4'>
      <div className='flex flex-col'>
        <p className='flex flex-row items-center m-2'>
          <CalendarDaysIcon className='h-6 w-6' />

          <span className='mx-2 font-light'>{date}</span>
        </p>

        <p className='flex flex-row items-center m-2'>
          <ShoppingBagIcon className='h-6 w-6' />

          <span className='mx-2 font-light'>{totalProducts} articles</span>
        </p>
      </div>

      <div className='flex items-center gap-2'>
        <span className='font-medium text-2xl'>${totalPrice}</span>

        <ChevronRightIcon className='h-6 w-6' />
      </div>
    </div>
  );
};

export default OrdersCard;
