// Eu deixei essa função para manter o formato de preço padronizado no card.
const formatPrice = (value) => `R$ ${Number(value).toFixed(2)}`;

function ProductCard({ image, name, price, priceDiscount }) {
  return (
    <article className="product-card">
      <img src={image} alt={name} className="product-card-image" />
      <h3 className="product-card-name">{name}</h3>
      <div className="product-card-prices">
        <span className={priceDiscount ? 'price old-price' : 'price'}>
          {formatPrice(price)}
        </span>
        {priceDiscount ? (
          <span className="price discount-price">{formatPrice(priceDiscount)}</span>
        ) : null}
      </div>
    </article>
  );
}

export default ProductCard;
