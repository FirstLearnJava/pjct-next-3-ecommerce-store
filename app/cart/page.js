import { getVegetableById } from '../database/products';
import { cookies } from 'next/headers';
// import { Image } from 'next/image';
import Image from 'next/image';
import { DeleteCookieForm } from './DeleteCookieForm';

export default function CartPage() {
  const cartCookies = cookies().get('productCookies');
  const valueCartCookies = !cartCookies ? '' : cartCookies.value;
  const conditionalParsedValueCartCookies = !cartCookies
    ? ''
    : JSON.parse(valueCartCookies);
  const parsedValueCartCookies = JSON.parse(valueCartCookies);

  // const updatedCookieArray = (id) => {
  //   return parsedValueCartCookies.filter((obj) => obj.id !== id);
  // };

  return (
    <div>
      {conditionalParsedValueCartCookies ? (
        conditionalParsedValueCartCookies.map((valueCartCookie) => {
          const vegetableName = getVegetableById(
            Number(valueCartCookie.id),
          )?.name;

          // if (!vegetableName) {
          //   return null; // Skip rendering if vegetableName is undefined
          // }
          // const definedVegetableName = !vegetableName ? 'carrot' : vegetableName;
          // const vegetableNameDefinedOrUnDefined = () => {
          //   if (vegetableName) {
          //     return (

          //     );
          //   }
          // };

          return (
            <div key={`cartCookie-id:${valueCartCookie.id}`}>
              <br />
              <Image
                src={`/images/${vegetableName}.jpg`}
                width="144"
                height="100"
                alt={`image of ${vegetableName}`}
              />
              <br />
              quantity: {valueCartCookie.quantity} kilogramms
              <br />
              <DeleteCookieForm
                updatedCookieArray={parsedValueCartCookies}
                cookieObjectId={valueCartCookie.id}
              />
            </div>
          );
        })
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
}
