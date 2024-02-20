const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className='flex justify-between items-center mb-3 bg-red-500 h-24 px-2'>
      <p>
        <span>20.02.2024</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCard;
