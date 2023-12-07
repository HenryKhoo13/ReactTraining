import styles from './Card.module.css';

interface CardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  buttonText?: string;
  linkUrl?: string;
}

const Card: React.FC<CardProps> = ({ title = '', description = '', imageUrl = '', buttonText = '', linkUrl = '#' }) => (
  <div className={styles.card}>
    {imageUrl && <img src={imageUrl} alt={title} className={styles.img} />}
    {title && <h2 className={styles.h2}>{title}</h2>}
    {description && <p className={styles.p}>{description}</p>}
    {buttonText && <a href={linkUrl} style={{ textDecoration: 'none' }}>
      <button className={styles.button}>
        {buttonText}
      </button>
    </a>}
  </div>
);

export default Card;