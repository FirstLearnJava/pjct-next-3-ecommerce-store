// import { name } from './../../.next/server/app/page';
import Image from 'next/image';
import Link from 'next/link';
const products = [
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

export default function VegetablesPage() {
  return (
    <main>
      This is my products page.
      <br />
      This are some of our products:
      {products.map((product) => {
        return (
          <div key={`product-id: ${product.id}`}>
            We sell {product.type}, for example{' '}
            <Link href={`/products-page/${product.name}`}>{product.name}</Link>.
            <br />
            <Image
              src={`/images/${product.name}.jpg`}
              width={200}
              height={200}
            />
          </div>
        );
      })}
    </main>
  );
}
