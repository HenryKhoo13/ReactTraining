import { wrap } from 'module';
import styles from './Hero.module.css';

export interface HeroProps {
  title?: string;
  subtitle?: string;
  subtext?: string;
}

export default function Hero({ title, subtitle, subtext }: HeroProps) {
  return (
    <div>
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <div>
        <button className={styles.button}>Button 1</button>
        <button className={styles.button}>Button 2</button>
        </div>
      </div>
    </div>
          <div className={styles.heroSubSection}>
          <div className={styles.heroContent}>

            <p className={styles.heroSubtext}>{subtext}</p>
          </div>
          </div>
          </div>
  );
}