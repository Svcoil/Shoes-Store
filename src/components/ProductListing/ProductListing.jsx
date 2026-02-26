import ProductCard from '../ProductCard/ProductCard';

function ProductListing({ products }) {
  // Aqui eu só percorro os produtos recebidos e renderizo os cards.
  return (
    <div className="product-listing-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id ?? `${product.name}-${product.price}`}
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
}

export default ProductListing;
