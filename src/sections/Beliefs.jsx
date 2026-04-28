const ITEMS = [
  'Lorem ipsum dolor sit amet.',
  'Suspendisse potenti in a quiet little list.',
  'Mauris blandit justo at augue posuere, sit amet tempus erat pretium.',
  'Etiam vitae lectus sed sapien feugiat ullamcorper.',
]

export default function Beliefs() {
  return (
    <section id="about">
      <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 16, color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: '0.2em', textDecorationThickness: '1px' }}>
        About
      </h2>
      <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {ITEMS.map((item, i) => (
          <li key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.5em', color: 'var(--text)' }}>
            <span style={{ color: 'var(--muted)', fontWeight: 700 }}>{'✳\uFE0E'}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
