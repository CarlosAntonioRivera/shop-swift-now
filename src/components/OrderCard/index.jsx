const OrderCard = (props) => {
  const { id, title, imageURL, price, handleDelete } = props;

  return (
    <div className='flex justify-between items-center mb-3 bg-red-500 h-24 px-2'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-contain'
            src={imageURL}
            alt={title}
          />
        </figure>

        <p className='text-sm font-light mx-1'>{title}</p>
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>

        <div
          className='cursor-pointer'
          onClick={() => handleDelete(id)}
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
              d='M6 18 18 6M6 6l12 12'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
