const OPTIONS = [
  {
    name: 'Fell English',
    className: 'font-sample-fell',
    note: 'old-world, literary, slightly eccentric',
  },
  {
    name: 'Cormorant Garamond',
    className: 'font-sample-cormorant',
    note: 'elegant, high-contrast, more editorial',
  },
  {
    name: 'Libre Baskerville',
    className: 'font-sample-baskerville',
    note: 'bookish, formal, very readable',
  },
  {
    name: 'Newsreader',
    className: 'font-sample-newsreader',
    note: 'British newspaper-adjacent, crisp, less antique',
  },
]

export default function FontOptions() {
  return (
    <section id="fonts" className="font-options-section">
      <h2 className="section-heading">Font options</h2>
      <div className="font-options-list">
        {OPTIONS.map(option => (
          <article className={`font-option ${option.className}`} key={option.name}>
            <h3>{option.name}</h3>
            <p>
              Sukeerthi writes notes on small rituals, useful books, city walks,
              and the quiet work of paying attention.
            </p>
            <p className="font-option-note">{option.note}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
