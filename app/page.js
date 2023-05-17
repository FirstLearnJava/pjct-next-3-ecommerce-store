// import Image from 'next/image';
import GenerateButton from './GenerateButton';
import carrots from '../public/carrots.jpg';
import Image from 'next/image';
import styles from './StyleImages.module.scss';

export default function HomePage() {
  return (
    <>
      <main>This is my Homepage.</main>
      <GenerateButton />
      <Image
        src={carrots}
        alt="a bunch of carrots"
        className={styles.StyleImages}
      />
    </>
  );
}
