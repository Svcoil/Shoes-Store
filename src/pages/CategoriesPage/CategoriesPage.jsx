import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Section from '../../components/Section/Section';

// Aqui eu listo as categorias disponíveis para facilitar o acesso aos filtros.
const categories = [
  { label: 'Casual', value: 'casual' },
  { label: 'Esporte', value: 'esporte' },
  { label: 'Premium', value: 'premium' },
  { label: 'Infantil', value: 'infantil' },
  { label: 'Aventura', value: 'aventura' }
];

function CategoriesPage() {
  return (
    <Layout>
      <div className="container">
        <Section title="Categorias" titleAlign="left">
          <p className="simple-page-description">Selecione uma categoria para ver os produtos.</p>
          <div className="simple-links-grid">
            {categories.map((category) => (
              <Link key={category.value} className="simple-link-card" to={`/products?category=${category.value}`}>
                {category.label}
              </Link>
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  );
}

export default CategoriesPage;
