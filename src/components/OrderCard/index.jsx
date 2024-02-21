import { XMarkIcon } from '@heroicons/react/24/outline';

const OrderCard = (props) => {
  const { id, title, imageURL, price, handleDelete } = props;

  let renderXIcon;

  if (handleDelete) {
    renderXIcon = (
      <XMarkIcon
        className='h-6 w-6 cursor-pointer'
        onClick={() => handleDelete(id)}
      />
    );
  }

  return (
    <div className='flex justify-between items-center mb-3 rounded-lg bg-[#e5e7eb] h-24 px-2'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-contain'
            src={imageURL}
            alt={title}
          />
        </figure>

        <p className='text-sm font-light mx-2 line-clamp-3 w-28'>{title}</p>
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>

        {renderXIcon}
      </div>
    </div>
  );
};

export default OrderCard;
