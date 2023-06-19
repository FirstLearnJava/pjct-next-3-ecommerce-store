'use client';
import { useRouter } from 'next/navigation';
import { deleteCookie } from '../products/[productId]/actions';

export function DeleteCookieForm(props) {
  const removeObjectWithId = (id) => {
    return props.updatedCookieArray.filter((obj) => obj.id !== id);
  };
  const router = useRouter();

  return (
    <form>
      <button
        formAction={async () => {
          router.refresh();
          await deleteCookie(removeObjectWithId(props.cookieObjectId)).catch(
            () => {},
          );
        }}
      >
        Delete product
      </button>
    </form>
  );
}
