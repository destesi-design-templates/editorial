import { Section } from './sections.jsx'

// This template's pages, in code. Each <Section> is an ordinary component
// call: change its props, replace it with your own JSX, add anything you
// like, delete what you do not want. Nothing reads a document to undo you.
// The look — fonts, colours, spacing, the header — is src/theme.css.

// The Google Fonts these pages and theme.css name. Add a key when you use a new one.
export const fonts = ["cormorant", "manrope"]

export function Home() {
  return <main>
    <Section section={{
        id: "hero",
        type: "hero",
        props: {
          title: "Lo esencial, bien elegido",
          subtitle: "Piezas para vestir y habitar, elegidas una a una.",
          button_label: "Descubrir la colección",
          design: {
            variant: "overlay"
          }
        }
      }} />
    <Section section={{
        id: "intro",
        type: "rich_text",
        props: {
          eyebrow: "Nuestra forma de hacer",
          title: "Menos cosas, mejor elegidas",
          body: "Materiales nobles, colores tranquilos y piezas que conversan entre sí. Una colección pensada para durar más que una temporada.",
          button_label: "Ver la colección",
          image_side: "right"
        }
      }} />
    <Section section={{
        id: "collection",
        type: "product_grid",
        props: {
          title: "La colección",
          chips: true,
          limit: 6,
          design: {
            columns: 3
          }
        }
      }} />
    <Section section={{
        id: "statement",
        type: "rich_text",
        props: {
          eyebrow: "Hecho para quedarse",
          title: "Lo simple, bien hecho, no pasa de moda.",
          design: {
            section: {
              background: "#EDE6DA",
              text_align: "center"
            }
          }
        }
      }} />
    <Section section={{
        id: "new",
        type: "product_carousel",
        props: {
          title: "Recién llegados",
          limit: 8,
          design: {
            columns: 4
          }
        }
      }} />
    <Section section={{
        id: "benefits",
        type: "benefits",
        props: {}
      }} />
  </main>
}

export function Product() {
  return <main>
    <Section section={{
        id: "detail",
        type: "product_detail",
        props: {
          design: {
            variant: "split"
          }
        }
      }} />
    <Section section={{
        id: "suggested",
        type: "product_suggested",
        props: {
          title: "Completa el conjunto",
          limit: 4,
          design: {
            columns: 4
          }
        }
      }} />
  </main>
}
