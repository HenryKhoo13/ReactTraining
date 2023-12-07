
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

const sections = [
    {
      title: 'Section 1',
      subSections: [
        { text: 'Sub-section 1.1', href: '/AWS' },
        { text: 'Sub-section 1.2', href: '/AWS' },
        /* Add more sub-sections as needed */
      ]
    },
    {
      title: 'Section 2',
      subSections: [
        { text: 'Sub-section 2.1', href: '/AWS' },
        { text: 'Sub-section 2.2', href: '/AWS' },
        /* Add more sub-sections as needed */
      ]
    },
    {
        title: 'Section 3',
        subSections: [
          { text: 'Sub-section 3.1', href: '/AWS' },
          { text: 'Sub-section 3.2', href: '/AWS' },
          /* Add more sub-sections as needed */
        ]
      },
  ];
  
  export default async function Footer()  {
    return (
        <footer className={styles.footerContainer}>
        <div className={styles.sectionsContainer}>
            {sections.map((section, i) => (
                <div key={i} className={styles.section}>
                    <h2>{section.title}</h2>
                    {section.subSections.map((subSection, j) => (
                        <div key={j} className={styles.subSection}>
                                <a className={styles.link}>{subSection.text}</a>
                        </div>
                    ))}
                </div>
            ))}
        </div>

        <div className={styles.imageContainer}>
            <Image src="/next.svg" alt="Placeholder logo" height={100} width={100}/>
            <p className={styles.copyright}>©2023 Eli Lilly and Company.</p>
        </div>
    </footer>
      );
  };
