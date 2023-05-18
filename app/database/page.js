export const products = [
  {
    id: 1,
    type: 'fruit',
    name: 'orange',
    taste: 'sweet',
  },
  {
    id: 2,
    type: 'vegetables',
    name: 'carrot',
    taste: 'crunchy',
  },
  { id: 3, type: 'meat', name: 'chicken', taste: 'soft' },
  {
    id: 4,
    type: 'livestock',
    name: 'Marilyn',
    taste: 'not meant to eat',
  },
];

export function getProductByName(name) {
  return products.find((product) => product.name === name);
}
