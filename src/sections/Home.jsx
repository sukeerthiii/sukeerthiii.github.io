import flowerBlue from '../assets/flowers/flower-blue.png'
import flowerPink from '../assets/flowers/flower-pink.png'
import flowerYellow from '../assets/flowers/flower-yellow.png'

const underlined = {
  textDecoration: 'underline',
  textUnderlineOffset: '0.18em',
  textDecorationThickness: '1px',
}

export default function Home() {
  return (
    <>
      <h1 style={{
        fontSize: '1.55rem',
        fontWeight: 400,
        letterSpacing: '0.01em',
        color: 'var(--text)',
        lineHeight: 1,
        marginBottom: '36px',
      }}>
        Sukeerthi
      </h1>

      <p className="intro-line">
        <span>Hi, I'm Sukeerthi</span>
        <span className="intro-flower-row" aria-hidden="true">
          <img className="intro-flower intro-flower-yellow" src={flowerYellow} alt="" />
          <img className="intro-flower intro-flower-pink" src={flowerPink} alt="" />
          <img className="intro-flower intro-flower-blue" src={flowerBlue} alt="" />
        </span>
      </p>

      <p style={{ marginTop: 14 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
        justo sed neque aliquet posuere.
      </p>

      <p style={{ marginTop: 14 }}>
        Curabitur <span style={underlined}>vitae</span> sem at libero luctus
        finibus. Donec at nibh non ipsum fermentum varius.
      </p>

      <p style={{ marginTop: 14 }}>
        Praesent commodo, mi at dignissim porta, augue justo gravida est, sed
        tempor lorem ipsum et sapien.
      </p>
    </>
  )
}
