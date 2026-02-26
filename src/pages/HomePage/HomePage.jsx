import Layout from '../Layout/Layout';
import Gallery from '../../components/Gallery/Gallery';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import { homeSlides, products } from '../../data/products';

// Eu deixei os caminhos das coleções em um array para não repetir tags manualmente.
const featuredCollections = ['/collection-1.png', '/collection-2.png', '/collection-3.png'];

function HomePage() {
  return (
    <Layout>
      {/* Aqui eu mostro o carrossel principal da home. */}
      <Gallery images={homeSlides} width="1440px" height="681px" />

      <div className="container">
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="featured-collections">
            {featuredCollections.map((image, index) => (
              <img key={image} src={image} alt={`Coleção ${index + 1}`} />
            ))}
          </div>
        </Section>

        <Section title="Produtos em alta" titleAlign="left">
          <ProductListing products={products.slice(0, 8)} />
        </Section>
      </div>
    </Layout>
  );
}

export default HomePage;
