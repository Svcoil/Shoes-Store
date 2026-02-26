// Eu criei esses helpers só para evitar repetir o caminho completo das imagens toda hora.
const thumb = (number) => `/product-thumb-${number}.jpeg`;
const homeSlide = (number) => `/home-slide-${number}.jpeg`;
const galleryImage = (number) => `/produc-image-${number}.jpeg`;

// Aqui eu deixo a base de produtos da loja.
// Cada item tem: id, nome, imagem, preço, categoria, gênero e condição.
// priceDiscount é opcional e só aparece quando o produto está com desconto.
export const products = [
  {
    id: 1,
    name: 'Tênis Casual Urban',
    image: thumb(1),
    price: 200,
    priceDiscount: 149.9,
    category: 'casual',
    gender: 'masculino',
    condition: 'novo'
  },
  {
    id: 2,
    name: 'Tênis Running Speed',
    image: thumb(2),
    price: 320,
    priceDiscount: 279.9,
    category: 'esporte',
    gender: 'feminino',
    condition: 'novo'
  },
  { id: 3, name: 'Tênis Street Classic', image: thumb(3), price: 180, category: 'casual', gender: 'unissex', condition: 'novo' },
  {
    id: 4,
    name: 'Tênis Trekking Pro',
    image: thumb(4),
    price: 400,
    priceDiscount: 349.9,
    category: 'aventura',
    gender: 'masculino',
    condition: 'novo'
  },
  { id: 5, name: 'Tênis Premium Gold', image: thumb(5), price: 520, category: 'premium', gender: 'feminino', condition: 'usado' },
  { id: 6, name: 'Tênis Kids Fun', image: thumb(1), price: 120, category: 'infantil', gender: 'unissex', condition: 'novo' },
  {
    id: 7,
    name: 'Tênis Fit Light',
    image: thumb(2),
    price: 230,
    priceDiscount: 199.9,
    category: 'esporte',
    gender: 'feminino',
    condition: 'novo'
  },
  { id: 8, name: 'Tênis Daily Comfort', image: thumb(3), price: 199.9, category: 'casual', gender: 'masculino', condition: 'usado' },
  { id: 9, name: 'Tênis Flex Move', image: thumb(4), price: 289.9, category: 'esporte', gender: 'unissex', condition: 'novo' },
  {
    id: 10,
    name: 'Tênis Prime One',
    image: thumb(5),
    price: 349.9,
    priceDiscount: 299.9,
    category: 'premium',
    gender: 'masculino',
    condition: 'novo'
  }
];

// Esses são os banners/slides que aparecem na home.
export const homeSlides = Array.from({ length: 8 }, (_, index) => ({
  src: homeSlide(index + 1)
}));

// Essas imagens eu uso na galeria do detalhe do produto.
export const productGallery = Array.from({ length: 5 }, (_, index) => ({
  src: galleryImage(index + 1)
}));
