// One "page" of the deck: a numbered header rule, content, and a running foot.
export default function Slide({ n, title, dark, full, id, children, className = '' }) {
  return (
    <section id={id} className={`slide${dark ? ' slide--dark' : ''}${full ? ' slide--full' : ''} ${className}`}>
      {title && (
        <div className="slide__head">
          <span>{String(n).padStart(2, '0')}</span>
          <span>{title}</span>
        </div>
      )}
      <div className="slide__body">{children}</div>
    </section>
  )
}
