import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './src/pages/HomePage/HomePage';
import ProductListingPage from './src/pages/ProductListingPage/ProductListingPage';
import ProductViewPage from './src/pages/ProductViewPage/ProductViewPage';
import CategoriesPage from './src/pages/CategoriesPage/CategoriesPage';
import OrdersPage from './src/pages/OrdersPage/OrdersPage';

// Eu centralizei as rotas principais aqui para ficar fácil manter e enxuto.
const appRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/products', element: <ProductListingPage /> },
  { path: '/produtos', element: <ProductListingPage /> },
  { path: '/product/:id', element: <ProductViewPage /> },
  { path: '/categorias', element: <CategoriesPage /> },
  { path: '/pedidos', element: <OrdersPage /> }
];

function App() {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      {/* Eu mantive essa rota legada só para não quebrar links antigos. */}
      <Route path="/orders" element={<Navigate to="/pedidos" replace />} />
      {/* Eu redireciono qualquer rota inválida para a home. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
