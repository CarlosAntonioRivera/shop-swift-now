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
    <div className='flex justify-between items-center mb-3 border rounded-lg h-24 w-full px-2'>
      <div className='flex items-center gap-2 w-full min-w-0'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full object-contain'
            src={imageURL}
            alt={title}
          />
        </figure>

        <p className='text-sm font-medium mx-2 truncate flex-1'>{title}</p>
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-lg font-bold'>${price}</p>

        {renderXIcon}
      </div>
    </div>
  );
};

export default OrderCard;
