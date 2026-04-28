const accent = {
  fontWeight: 700,
  textDecoration: 'underline',
  textUnderlineOffset: '0.18em',
  textDecorationThickness: '1px',
}

export default function ThenAndNow() {
  return (
    <section id="now" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 2, color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: '0.2em', textDecorationThickness: '1px' }}>
        Now
      </h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
        <span style={accent}> lectus</span> sit amet nibh dictum laoreet.
      </p>

      <p>
        Phasellus vitae lorem eu arcu malesuada pellentesque. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames.
      </p>

      <p>
        Vivamus porta, massa at tempor gravida, sem nibh posuere arcu, non
        porta libero ipsum non risus.
      </p>
    </section>
  )
}
