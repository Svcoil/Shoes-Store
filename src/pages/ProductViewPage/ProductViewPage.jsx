import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Gallery from '../../components/Gallery/Gallery';
import BuyBox from '../../components/BuyBox/BuyBox';
import ProductOptions from '../../components/ProductOptions/ProductOptions';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import { products, productGallery } from '../../data/products';

const sizeOptions = ['39', '40', '41', '42', '43'];
const colorOptions = ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'];

function ProductViewPage() {
  const { id } = useParams();

  // Eu pego o produto pelo id da rota e, se não achar, uso o primeiro da lista.
  const currentProduct = useMemo(() => {
    const found = products.find((item) => String(item.id) === String(id));
    return found ?? products[0];
  }, [id]);

  return (
    <Layout>
      <div className="container product-view-main">
        <Gallery images={productGallery} showThumbs width="700px" height="570px" radius="4px" />

        <BuyBox
          name={currentProduct.name}
          reference={`REF: ${String(currentProduct.id).padStart(6, '0')}`}
          stars={4.7}
          rating={90}
          price={currentProduct.price}
          priceDiscount={currentProduct.priceDiscount}
          description="Produto versátil e confortável para uso diário, com materiais de alta qualidade e ótimo acabamento."
        >
          <div>
            <h4 className="option-title">Tamanho</h4>
            <ProductOptions options={sizeOptions} shape="square" type="text" radius="4px" />
          </div>
          <div>
            <h4 className="option-title">Cor</h4>
            <ProductOptions options={colorOptions} shape="circle" type="color" />
          </div>
        </BuyBox>
      </div>

      <div className="container">
        <Section title="Produtos recomendados" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
          <ProductListing products={products.slice(0, 4)} />
        </Section>
      </div>
    </Layout>
  );
}

export default ProductViewPage;
