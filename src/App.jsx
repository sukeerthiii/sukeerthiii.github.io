import './index.css'
import flowerBlue from './assets/flowers/flower-blue.png'
import flowerPink from './assets/flowers/flower-pink.png'
import flowerYellow from './assets/flowers/flower-yellow.png'
import flowerRed from './assets/flowers/flower-red.png'
import flowerTeal from './assets/flowers/flower-teal.png'
import flowerOrange from './assets/flowers/flower-orange.png'

const BELIEFS = [
  'Every cycle counts and very little matters.',
  'Everything is made up and there are no prerequisites.',
  'Tools are meant to be mastered, not worshipped.',
  'Learning comes from doing, not reading, watching, listening or thinking.',
  'Simple rules result in complex, intelligent behavior. Complex rules result in simple, stupid behavior.',
  'You can do more than you think. The laws of physics are the only limit.',
  'In the end, people are everything.',
]

function FlowerDivider({ flowers }) {
  return (
    <div className="flower-divider" aria-hidden="true">
      {flowers.map((flower, index) => (
        <img key={`${flower}-${index}`} src={flower} alt="" />
      ))}
    </div>
  )
}

export default function App() {
  return (
    <main className="one-page">
      <div className="one-page-inner">
        <section className="intro-block" aria-labelledby="intro-title">
          <div className="drop-cap-copy">
            <h1 id="intro-title" className="illuminated-title">
              Hi, I'm Sukeerthi
            </h1>
            <p className="drop-cap-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
          </div>
        </section>

        <FlowerDivider flowers={[flowerBlue, flowerPink, flowerYellow]} />

        <section className="beliefs-block" aria-labelledby="beliefs-title">
          <h2 id="beliefs-title">Some things I believe in</h2>
          <ul>
            {BELIEFS.map((belief) => (
              <li key={belief}>{belief}</li>
            ))}
          </ul>
          <p className="contact-line">
            You can email me at a [dot] sukeerthi [at] gmail.
          </p>
        </section>

        <FlowerDivider flowers={[flowerRed, flowerTeal, flowerOrange]} />
      </div>
    </main>
  )
}
