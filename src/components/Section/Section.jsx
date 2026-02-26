import { Link } from 'react-router-dom';

function Section({ title, titleAlign = 'left', link, children }) {
  const isInternalLink = link?.href?.startsWith('/');

  return (
    <section className="section-block">
      <div className={`section-header section-header-${titleAlign}`}>
        <h2 className="section-title">{title}</h2>
        {link ? (
          isInternalLink ? (
            <Link className="section-link" to={link.href}>
              {link.text}
            </Link>
          ) : (
            <a className="section-link" href={link.href}>
              {link.text}
            </a>
          )
        ) : null}
      </div>
      <div>{children}</div>
    </section>
  );
}

export default Section;
