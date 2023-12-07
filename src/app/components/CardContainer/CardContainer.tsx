

import Card from '../Card/Card';
import styles from './CardContainer.module.css';
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  linkUrl: string;
}

const cards: CardProps[] = [
  {
    title: 'Card 1',
    description: 'This is a description for Card 1.',
    imageUrl: 'https://via.placeholder.com/150',
    buttonText: 'Go to Link',
    linkUrl: '#'
  },
  {
    title: 'Card 2',
    description: 'This is a description for Card 2.',
    imageUrl: 'https://via.placeholder.com/150',
    buttonText: 'Go to Link',
    linkUrl: '#'
  },
  {
    title: 'Card 3',
    description: 'This is a description for Card 3.',
    imageUrl: 'https://via.placeholder.com/150',
    buttonText: 'Go to Link',
    linkUrl: '#'
  },
  {
    title: 'Card 4',
    description: 'This is a description for Card 4.',
    imageUrl: 'https://via.placeholder.com/150',
    buttonText: 'Go to Link',
    linkUrl: '#'
  },
  {
    title: 'Card 5',
    description: 'This is a description for Card 5.',
    imageUrl: 'https://via.placeholder.com/150',
    buttonText: 'Go to Link',
    linkUrl: '#'
  }
];

const CardContainer: React.FC = () => (
  <div className={styles.container}>
    {cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

export default CardContainer;