
export const get = () => {
  const storedOrderHistory = localStorage.getItem('Aquiline/OrderHistory');

  if(storedOrderHistory){
    return JSON.parse(storedOrderHistory);
  }
};

export const post = (newOrder) => {
  const storedOrderHistory = get();

  if(storedOrderHistory){
    const newStoredOrders = [...storedOrderHistory, newOrder];
    localStorage.setItem('Aquiline/OrderHistory', JSON.stringify(newStoredOrders));
  } else {
    const newStoredOrders = [ newOrder ];
    localStorage.setItem('Aquiline/OrderHistory', JSON.stringify(newStoredOrders));
  }

  return newOrder;
};
