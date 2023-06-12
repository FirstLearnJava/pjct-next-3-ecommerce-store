'use client';

import { useState } from 'react';
import { createOrUpdateQuantity } from './actions';

export default function ProductQuantityForm(props) {
  const [quantity, setQuantity] = useState(1);
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
          await createOrUpdateQuantity(props.productId, quantity);
        }}
      >
        Create or Update Comment
      </button>
    </form>
  );
}
