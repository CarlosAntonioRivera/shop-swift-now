import { createContext, useEffect, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart . Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail . Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu . Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Product Detail . Show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart . Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart . Order
  const [order, setOrder] = useState([]);

  // Get Products
  const [items, setItems] = useState(null);

  // Get Products Filtered
  const [filteredItems, setFilteredItems] = useState('');

  // Get Products in Input Search by title
  const [searchByTitle, setSearchByTitle] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then((response) =>
      response.json().then((data) => setItems(data))
    );
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle)
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
  }, [items, searchByTitle]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        filteredItems,
        setSearchByTitle,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
