import { getVegetableById } from '../database/products';
import { cookies } from 'next/headers';
// import { Image } from 'next/image';
import Image from 'next/image';

export default function cart() {
  const cartCookies = cookies().get('productCookies');
  const valueCartCookies = JSON.parse(cartCookies?.value);

  return (
    <div>
      {/* <div>{valueCartCookies}</div> */}
      {valueCartCookies.map((valueCartCookie) => {
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
            {valueCartCookie.quantity}
            <Image
              src={`/images/${vegetableName}.jpg`}
              width="144"
              height="100"
              alt={''}
            />
          </div>
        );
      })}
    </div>
  );
}
