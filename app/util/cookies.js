import { cookies } from 'next/headers';

export function getCookie(name) {
  return cookies().get(name)?.value;
}

// export async function deleteCookie(newCookieArray) {
//   await cookies().set('productCookies', newCookieArray);
// }
