// Aqui eu escolho automaticamente a versão clara/escura da logo.
function Logo({ white = false }) {
  return (
    <img
      src={white ? '/assets/logo-footer.svg' : '/assets/logo-header.svg'}
      alt="Digital Store"
      width={253}
      height={44}
      className="logo"
    />
  );
}

export default Logo;
