// Esse componente é o resumo principal de compra na página do produto.
function BuyBox({ name, reference, stars, rating, price, priceDiscount, description, children }) {
  return (
    <section className="buy-box">
      <h1 className="buy-box-name">{name}</h1>
      <p className="buy-box-reference">{reference}</p>

      <div className="buy-box-rating-row">
        <span className="buy-box-stars">
          {stars} <img src="/assets/star-icon.svg" alt="estrela" width={14} height={14} />
        </span>
        <span className="buy-box-rating">({rating} avaliações)</span>
      </div>

      <div className="buy-box-price-row">
        {priceDiscount ? (
          <>
            <span className="buy-box-price-old">R$ {Number(price).toFixed(2)}</span>
            <span className="buy-box-price-discount">R$ {Number(priceDiscount).toFixed(2)}</span>
          </>
        ) : (
          <span className="buy-box-price-discount">R$ {Number(price).toFixed(2)}</span>
        )}
      </div>

      <p className="buy-box-description">{description}</p>
      <div className="buy-box-children">{children}</div>

      <button type="button" className="buy-box-button">
        COMPRAR
      </button>
    </section>
  );
}

export default BuyBox;
