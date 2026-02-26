import Logo from '../Logo/Logo';
import FooterInformations from '../FooterInformations/FooterInformations';

// Eu organizo os dados do rodapé por bloco para manter o componente limpo.
const institutionalInfos = [
  { text: 'Sobre Drip Store', link: '/about' },
  { text: 'Segurança', link: '/security' },
  { text: 'Wishlist', link: '/wishlist' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/jobs' },
  { text: 'Meus Pedidos', link: '/pedidos' }
];

const categoryInfos = [
  { text: 'Casual', link: '/categorias?category=casual' },
  { text: 'Esporte', link: '/categorias?category=esporte' },
  { text: 'Premium', link: '/categorias?category=premium' },
  { text: 'Infantil', link: '/categorias?category=infantil' },
  { text: 'Aventura', link: '/categorias?category=aventura' }
];

const contactInfos = [
  { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE', link: '#' },
  { text: '(85) 3051-3411', link: 'tel:+558530513411' }
];

const socialLinks = [
  { href: 'https://facebook.com', label: 'Facebook', icon: '/assets/facebook.svg' },
  { href: 'https://instagram.com', label: 'Instagram', icon: '/assets/instagram.svg' },
  { href: 'https://twitter.com', label: 'Twitter', icon: '/assets/twitter.svg' }
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-branding">
          <Logo white />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                <img src={social.icon} alt={social.label} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>

        <FooterInformations title="Informação" informations={institutionalInfos} />
        <FooterInformations title="Categorias" informations={categoryInfos} />
        <FooterInformations title="Contato" informations={contactInfos} />
      </div>

      <hr />
      <p className="footer-copyright">© 2024 Digital Store</p>
    </footer>
  );
}

export default Footer;
