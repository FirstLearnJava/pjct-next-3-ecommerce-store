// 'use client';

// import { useState } from 'react';

// export default function ChangeQuantity() {
//   const [quantityProduct, setQuantityProduct] = useState(1);
//   return (
//     <>
//       <input
//         type="number"
//         // placeholder="quantity"
//         value={quantityProduct}
//         data-test-id="product-quantity"
//       />
//       <button
//         onClick={(event) => {
//           event.preventDefault();
//           setQuantityProduct((prev) => prev + 1);
//         }}
//       >
//         Increase quantity
//       </button>
//       <button
//         onClick={(event) => {
//           event.preventDefault();
//           setQuantityProduct((prev) => prev - 1);
//         }}
//       >
//         Decrease quantity
//       </button>
//       <button>Add to cart</button>
//     </>
//   );
// }
