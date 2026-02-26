import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Layout({ children }) {
  // Eu uso esse layout base para manter header e footer fixos em todas as páginas.
  return (
    <div className="app-layout">
      <Header />
      <main className="app-main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
