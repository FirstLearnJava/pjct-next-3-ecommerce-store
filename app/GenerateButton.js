'use client';
// use client neccesary because all the components by default are server-side
import styles from './GenerateButton.module.scss';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function GenerateButton() {
  const [color, setColor] = useState(randomColor());
  return (
    <button
      className={styles.GenerateButton}
      style={{ backgroundColor: color }}
      onClick={() => setColor(randomColor())}
    >
      Click me
    </button>
  );
}
