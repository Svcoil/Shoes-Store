import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import { products } from '../../data/products';

// Eu defini as opções de filtro fora do componente para evitar recriar arrays a cada render.
const filterOptions = {
  category: [
    { text: 'Casual', value: 'casual' },
    { text: 'Esporte', value: 'esporte' },
    { text: 'Premium', value: 'premium' },
    { text: 'Infantil', value: 'infantil' }
  ],
  condition: [
    { text: 'Novo', value: 'novo' },
    { text: 'Usado', value: 'usado' }
  ],
  gender: [
    { text: 'Masculino', value: 'masculino' },
    { text: 'Feminino', value: 'feminino' },
    { text: 'Unissex', value: 'unissex' }
  ]
};

// Esse helper filtra uma lista por um campo e valores selecionados.
const applySelectionFilter = (list, selectedValues, fieldName) => {
  if (selectedValues.length === 0) {
    return list;
  }

  return list.filter((item) => selectedValues.includes(item[fieldName]));
};

function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const [order, setOrder] = useState('menor');
  const [categories, setCategories] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [gender, setGender] = useState(['unissex']);

  const filter = (searchParams.get('filter') || '').toLowerCase();
  const categoryParam = (searchParams.get('category') || '').toLowerCase();

  useEffect(() => {
    // Quando a categoria vier da URL, eu sincronizo com os filtros da sidebar.
    if (categoryParam) {
      setCategories([categoryParam]);
      return;
    }

    setCategories([]);
  }, [categoryParam]);

  // Aqui eu reaproveito a mesma função para checkbox e radio.
  const toggleArrayValue = (value, setArray, isRadio = false) => {
    if (isRadio) {
      setArray([value]);
      return;
    }

    setArray((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };

  const filteredProducts = useMemo(() => {
    // Eu começo da lista completa e aplico os filtros em sequência.
    let list = [...products];

    if (filter) {
      list = list.filter((item) => item.name.toLowerCase().includes(filter));
    }

    list = applySelectionFilter(list, categories, 'category');
    list = applySelectionFilter(list, conditions, 'condition');
    list = applySelectionFilter(list, gender, 'gender');

    list.sort((a, b) => {
      const priceA = a.priceDiscount ?? a.price;
      const priceB = b.priceDiscount ?? b.price;
      return order === 'menor' ? priceA - priceB : priceB - priceA;
    });

    return list;
  }, [filter, categories, conditions, gender, order]);

  return (
    <Layout>
      <div className="container listing-page-grid">
        <aside className="listing-sidebar">
          <label htmlFor="order" className="field-label">Ordenar por</label>
          <select id="order" className="order-select" value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="menor">Menor preço</option>
            <option value="maior">Maior preço</option>
          </select>

          <div className="filters-box">
            <h3>Filtrar por</h3>
            <hr />
            <FilterGroup
              title="Categoria"
              name="category"
              inputType="checkbox"
              options={filterOptions.category}
              selectedValues={categories}
              onChange={(value) => toggleArrayValue(value, setCategories)}
            />

            <FilterGroup
              title="Condição"
              name="condition"
              inputType="checkbox"
              options={filterOptions.condition}
              selectedValues={conditions}
              onChange={(value) => toggleArrayValue(value, setConditions)}
            />

            <FilterGroup
              title="Gênero"
              name="gender"
              inputType="radio"
              options={filterOptions.gender}
              selectedValues={gender}
              onChange={(value) => toggleArrayValue(value, setGender, true)}
            />
          </div>
        </aside>

        <div>
          <Section title={`${filteredProducts.length} produtos encontrados`} titleAlign="left">
            <ProductListing products={filteredProducts} />
          </Section>
        </div>
      </div>
    </Layout>
  );
}

export default ProductListingPage;
