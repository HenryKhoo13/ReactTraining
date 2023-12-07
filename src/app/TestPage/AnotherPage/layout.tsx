import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React Training',
  description: 'This is React Training Test Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
        <div>
        <div className={styles.mainArticle}>

            {children}
        </div>
        </div>
        
    </div>
  )
}