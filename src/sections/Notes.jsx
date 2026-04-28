import { marked } from 'marked'
import flowerOrange from '../assets/flowers/flower-orange.png'
import flowerPink from '../assets/flowers/flower-pink.png'
import flowerTeal from '../assets/flowers/flower-teal.png'

const noteModules = import.meta.glob('../notes/*.md', { eager: true })

const renderer = new marked.Renderer()

renderer.link = (href, title, text) => {
  let out = `<a rel="external" href="${encodeURI(href)}" class="link"`
  if (title) out += ` title="${escapeAttribute(title)}"`
  out += `>${text}</a>`
  return out
}

const notes = Object.entries(noteModules)
  .map(([path, module]) => {
    const data = module.default || module
    return {
      id: path.match(/\/([^/]+)\.md$/)?.[1] || path,
      ...data,
    }
  })
  .sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0
    const dateB = b.date ? new Date(b.date).getTime() : 0
    return dateB - dateA
  })

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function Markdown({ source }) {
  const html = marked.parse(source || '', {
    smartLists: true,
    smartypants: true,
    renderer,
  })

  return <div className="md-output" dangerouslySetInnerHTML={{ __html: html }} />
}

function NoteImage({ src, title }) {
  return (
    <a className="note-image-link" rel="external" href={src}>
      <img
        className="note-image"
        src={src}
        alt={title ? `${title} preview image` : 'Note preview image'}
        decoding="async"
      />
    </a>
  )
}

function NoteSeparator() {
  const flowers = [flowerTeal, flowerPink, flowerOrange]

  return (
    <div className="note-separator" aria-hidden="true">
      <span className="note-separator-line" />
      {flowers.map((flower, index) => (
        <img
          className="note-separator-flower"
          src={flower}
          alt=""
          key={flower}
          style={{ transform: `rotate(${[-8, 5, -3][index]}deg)` }}
        />
      ))}
      <span className="note-separator-line" />
    </div>
  )
}

export default function Notes() {
  return (
    <section id="notes" className="notes-section">
      <h2 className="section-heading">Notes</h2>
      {notes.length === 0 && (
        <div className="note-separator-preview">
          <NoteSeparator />
        </div>
      )}
      <div className="notes-list">
        {notes.map((note, index) => (
          <article className="note-post" id={`note-${note.id}`} key={note.id}>
            {note.title && (
              <header className="note-header">
                <h3>{note.title}</h3>
              </header>
            )}

            {note.image && <NoteImage src={note.image} title={note.title} />}

            {note.subimages && (
              <div className="note-subimages">
                {note.subimages.map(image => (
                  <NoteImage src={image} title={note.title} key={image} />
                ))}
              </div>
            )}

            <Markdown source={note.content} />
            {index < notes.length - 1 && <NoteSeparator />}
          </article>
        ))}
      </div>
    </section>
  )
}
