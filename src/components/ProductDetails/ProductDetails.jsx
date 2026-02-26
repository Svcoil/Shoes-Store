// Eu deixei esse wrapper para agrupar informações extras do produto quando precisar.
function ProductDetails({ children }) {
  return <div className="product-details">{children}</div>;
}

export default ProductDetails;
