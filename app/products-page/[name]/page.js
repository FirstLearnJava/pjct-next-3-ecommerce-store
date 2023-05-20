import { getProductByName } from '../../database/page';
import { notFound } from 'next/navigation';

export const dynamic = 'force - dynamic';
// If you have dynamic segments it is necessary to pass this const dynamic to the segment, otherwise it may happen that the cache is not updated properly.
export default function DynamicPage({ params }) {
  const singleProduct = getProductByName(params.name);

  if (!singleProduct) {
    notFound();
  }

  return (
    <div>
      Thats my dynamic single products page.
      <br />
      <h1>
        This is a {singleProduct.name} it is {singleProduct.taste}.
      </h1>
      <br />
    </div>
  );
}
