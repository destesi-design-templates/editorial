// The sample shop this template shows where no shop is behind the page (its
// live demo, or your project before the workspace sets up a shop). It never
// reaches a live shop: there the page draws the shop's own catalog, banner and
// settings. Replace it with your own sample shop, or leave it: a live shop
// never loads these photos.
import hero from './demo/hero.webp'
import story from './demo/story.webp'
import p1 from './demo/p1.webp'
import p2 from './demo/p2.webp'
import p3 from './demo/p3.webp'
import p4 from './demo/p4.webp'
import p5 from './demo/p5.webp'
import p6 from './demo/p6.webp'

export const demo = {
  name: 'ALBA & LINO',
  tagline: 'Vestir y habitar con calma',
  about: 'Lino, lana y cerámica para vestir y habitar con calma. Una tienda de demostración de la plantilla Editorial.',
  announcement: 'Nueva colección de temporada',
  hero,
  story,
  detail: 'Tejida en fibras naturales y terminada a mano. Una pieza tranquila, pensada para acompañarte muchas temporadas.',
  benefits: ['Fibras naturales', 'Piezas pensadas para durar', 'Atención personal'],
  categories: [
    { id: 'ropa', name: 'Ropa' },
    { id: 'hogar', name: 'Hogar' },
    { id: 'accesorios', name: 'Accesorios' },
  ],
  products: [
    { id: '1', name: 'Camisa de lino arena', price_cents: 18900000, category_id: 'ropa', badge: 'Nuevo', image: p1 },
    { id: '2', name: 'Cárdigan de punto crudo', price_cents: 24900000, category_id: 'ropa', image: p2 },
    { id: '3', name: 'Jarrón de gres terracota', price_cents: 12900000, category_id: 'hogar', image: p3 },
    { id: '4', name: 'Manta de lino oliva', price_cents: 21900000, category_id: 'hogar', badge: 'Nuevo', image: p4 },
    { id: '5', name: 'Bolso tote de cuero coñac', price_cents: 32900000, category_id: 'accesorios', image: p5 },
    { id: '6', name: 'Set de tazas de gres', price_cents: 9800000, category_id: 'hogar', image: p6 },
  ],
}
