import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';

// Eu deixei os links de navegação em um array para evitar repetir markup.
const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Produtos' },
  { to: '/categorias', label: 'Categorias' },
  { to: '/pedidos', label: 'Meus Pedidos' }
];

function Header() {
  // Eu controlo o texto da busca para montar a URL com filtro.
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // Aqui eu envio para /products, com ou sem o parâmetro filter.
  const handleSearch = () => {
    const term = search.trim();
    if (!term) {
      navigate('/products');
      return;
    }
    navigate(`/products?filter=${encodeURIComponent(term)}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="site-header">
      <div className="header-top">
        <Logo />

        <div className="header-search-wrapper">
          <input
            type="text"
            className="header-search-input"
            placeholder="Buscar produto..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="button" className="header-search-button" onClick={handleSearch}>
            🔍
          </button>
        </div>

        <div className="header-auth-area">
          <a className="signup-link" href="/signup">
            Cadastre-se
          </a>
          <a className="signin-button" href="/login">
            Entrar
          </a>
          <img src="/assets/mini-cart.svg" width={24} height={24} alt="Carrinho" />
        </div>
      </div>

      <nav className="main-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
