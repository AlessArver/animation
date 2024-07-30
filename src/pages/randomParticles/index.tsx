import { useState } from "react";
import styles from "./index.module.sass";
import clsx from "clsx";

const ITEMS = [
  {
    id: 1,
    img: "https://i.pinimg.com/originals/e2/f0/8c/e2f08c5253b92d1c96fb9c7fe9fc2aa9.gif",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/originals/8e/30/bd/8e30bd6f1bd50aaf25e4f16a181d4135.gif",
  },
];

export const RandomParticlesPage = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const onPrev = () => {
    if (currentItem > 0) {
      setCurrentItem((count) => count - 1);
    } else {
      setCurrentItem(ITEMS.length - 1);
    }
  };

  const onNext = () => {
    if (currentItem < ITEMS.length - 1) {
      setCurrentItem((count) => count + 1);
    } else {
      setCurrentItem(0);
    }
  };

  return (
    <div className={styles.container}>
      <div onClick={onPrev} className={clsx(styles.arrow, styles.arrowLeft)} />
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${ITEMS[currentItem].img})`,
        }}
      />
      <div onClick={onNext} className={clsx(styles.arrow, styles.arrowRight)} />

      <div className={styles.particlesWrapper}>
        <div className={styles.particlesContainer}>
          <div className={styles.particles} />
        </div>
      </div>
    </div>
  );
};
