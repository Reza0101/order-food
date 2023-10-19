

const formatPrice = (price: string) => {
  const cost = price;
  return parseFloat(cost)
    .toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};



export { formatPrice };
