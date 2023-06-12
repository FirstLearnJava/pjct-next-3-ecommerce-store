import Image from 'next/image';
import { notFound } from 'next/navigation';
// import ChangeQuantity from './productsDashboard';
import { getFruitById, getVegetableById } from '../../database/products';
import ProductQuantityForm from './ProductQuantityForm';

export const dynamic = 'force - dynamic';

// type Props = {
//   params: { productId: number },
// };

export default function ProductsPage({ params }) {
  const singleVegetable = getVegetableById(Number(params.productId));
  const singleFruit = getFruitById(Number(params.productId));

  if (!singleVegetable && !singleFruit) {
    notFound();
  } else if (singleVegetable) {
    return (
      <div>
        <h1>{singleVegetable.name}</h1>
        <Image
          src={`/images/${singleVegetable.name}.jpg`}
          width="144"
          height="100"
          alt="vegetable image"
          data-test-id="product-image"
        />
        <p>{singleVegetable.price}</p>
        <div>
          {/* <ChangeQuantity /> */}
          <ProductQuantityForm productId={singleVegetable.id} />
        </div>
      </div>
    );
  } else if (singleFruit) {
    return (
      <div>
        <h1>{singleFruit.name}</h1>
        <Image
          src={`/images/${singleFruit.name}.jpg`}
          width="144"
          height="100"
          alt="fruit image"
          data-test-id="product-image"
        />
        <p>{singleFruit.price}</p>
        <div>
          {/* <ChangeQuantity /> */}
          <ProductQuantityForm />
        </div>
      </div>
    );
  }
}
