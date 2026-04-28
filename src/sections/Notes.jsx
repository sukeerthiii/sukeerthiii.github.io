import { marked } from 'marked'
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
  return (
    <div className="note-separator" aria-hidden="true">
      <span className="note-separator-line" />
      <CrayonFlower tilt="-8" />
      <CrayonFlower tilt="5" />
      <CrayonFlower tilt="-3" />
      <span className="note-separator-line" />
    </div>
  )
}

function CrayonFlower({ tilt }) {
  return (
    <svg className="crayon-flower" viewBox="0 0 24 24" style={{ transform: `rotate(${tilt}deg)` }}>
      <path d="M12 10.8c-1.8-2.5-1.4-5.4.2-5.4 1.4 0 1.8 2.8-.2 5.4Z" />
      <path d="M12.6 11.2c2.3-2.1 5.2-2.1 5.1-.4-.1 1.4-2.9 1.8-5.1.4Z" />
      <path d="M11.8 12.1c1.9 2.5 1.1 5.2-.5 5-1.4-.2-1.6-2.9.5-5Z" />
      <path d="M11.2 11.2c-2.4 1.9-5.1 1.5-4.9-.1.1-1.4 2.8-1.8 4.9.1Z" />
      <path d="M12 11.5c-1.1-1.8-.3-3.6 1.1-3 1.3.6.7 2.2-1.1 3Z" className="crayon-flower-ghost" />
      <circle cx="12" cy="11.4" r="1.4" />
      <path d="M12 13.3c.5 2.2.2 4.4-1.1 6.3" />
      <path d="M11.1 17.2c-1.6-.4-2.7-1.1-3.3-2.2" />
      <path d="M11.7 16.2c1.8-.1 3.1-.8 3.9-2" />
    </svg>
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
