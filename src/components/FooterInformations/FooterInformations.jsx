import { Link } from 'react-router-dom';

function FooterInformations({ title, informations }) {
  // Eu trato links internos com Link para manter navegação SPA.
  const isInternalLink = (link) => link.startsWith('/');

  return (
    <div className="footer-info-block">
      <h4>{title}</h4>
      <ul>
        {informations.map((info) => (
          <li key={`${title}-${info.text}`}>
            {isInternalLink(info.link) ? (
              <Link to={info.link}>{info.text}</Link>
            ) : (
              <a href={info.link}>{info.text}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterInformations;
