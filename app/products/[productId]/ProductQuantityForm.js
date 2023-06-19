'use client';

import { useState } from 'react';
import { createOrUpdateQuantity } from './actions';
import { useRouter } from 'next/navigation';

export default function ProductQuantityForm(props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  return (
    <form>
      <textarea
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
      />
      <button
        formAction={async () => {
          router.refresh();
          await createOrUpdateQuantity(props.productId, quantity);
        }}
      >
        Create or Update Quantity
      </button>
    </form>
  );
}
