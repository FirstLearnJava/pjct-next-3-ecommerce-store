import './globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import cart from '../public/images/cart.svg';
import logo from '../public/images/logo.png';
import styles from './layout.module.scss';

export const metadata = {
  title: 'Make some test',
  description: 'test template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header data-test-id="products-link">
          <nav
            className={`${styles.layoutHeader} ${styles.navbarAnchorElements}`}
          >
            <Link href="/">
              <Image src={logo} className={styles.logo} alt="farm logo" />
            </Link>

            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/cart">
                  <Image src={cart} className={styles.cart} alt="cart symbol" />
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className={styles.spaceForFixedHeader} />
        {children}
      </body>
    </html>
  );
}
