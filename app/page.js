import Image from 'next/image';
import wheat from '../public/images/wheat.jpg';
import styles from './homepage.module.scss';

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <Image src={wheat} className={styles.homepageImages} alt="wheat field" />
      <p>
        What sets us apart is our commitment to direct marketing. By cutting out
        the middleman, we ensure that you receive the freshest produce possible.
        From the moment our fruits and vegetables are harvested, they are
        carefully hand-picked, sorted, and delivered directly to your doorstep,
        guaranteeing maximum freshness and flavor.
      </p>
      <p>
        We embrace organic and sustainable farming methods, nurturing our crops
        without the use of harmful pesticides or chemicals. Our dedicated team
        of experienced farmers works tirelessly to maintain the health and
        vitality of our soil, promoting natural biodiversity and creating a
        harmonious ecosystem where our produce thrives.
      </p>
      <p>
        Whether you're looking for vibrant, juicy tomatoes for a summer salad,
        crisp, leafy greens for your morning smoothie, or a rainbow of fruits
        for your next gathering, we have a wide range of seasonal delights to
        satisfy your taste buds and nourish your body.
      </p>
      <p>
        Beyond our commitment to exceptional produce, we also value building a
        strong connection with our community. We believe in fostering
        relationships with our customers and providing them with an
        unforgettable farm experience. We welcome you to visit our farm, explore
        our fields, and witness the care and dedication that goes into every
        single crop we grow.
      </p>
      <p>
        Join us on this farm-to-table journey, where you can enjoy the
        unparalleled taste and nutritional benefits of locally grown,
        sustainably produced food. Together, let's support a healthier
        lifestyle, a greener environment, and a thriving community.
      </p>
    </div>
  );
}
