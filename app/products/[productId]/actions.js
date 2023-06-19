'use server';

import { cookies } from 'next/headers';
import { getCookie } from './../../util/cookies';
import { parseJson } from '../../util/json';

export async function createOrUpdateQuantity(productId, quantity) {
  // await cookies().set(
  //   'tomato',
  //   JSON.stringify([{ id: productId }, { quantity: quantity }]),
  // );

  const productQuantitiesCookie = getCookie('productCookies');

  const productQuantities = !productQuantitiesCookie
    ? []
    : parseJson(productQuantitiesCookie);

  const productToUpdate = productQuantities.find((productQuantity) => {
    return productQuantity.id === productId;
  });

  if (productToUpdate) {
    productToUpdate.quantity = quantity;
  } else {
    productQuantities.push({ id: productId, quantity });
  }
  await cookies().set('productCookies', JSON.stringify(productQuantities));
}

export async function deleteCookie(cookieArray) {
  // 'use server';
  await cookies().set('productCookies', JSON.stringify(cookieArray));
}
