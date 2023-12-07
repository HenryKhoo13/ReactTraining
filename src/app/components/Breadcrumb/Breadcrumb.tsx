
"use client"
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from "./Breadcrumb.module.css";

type BreadcrumbProps = {
    home: ReactNode,
    separator: ReactNode,
}

export default function Breadcrumb({ home, separator }: BreadcrumbProps) {

    const pathNames = usePathname().split('/').filter(Boolean);
    // Decode URI components for pure path names
    for (let i = 0; i < pathNames.length; i++) {
        pathNames[i] = decodeURIComponent(pathNames[i]);
    }

    return (
        <div className={styles.breadcrumbContainer}>
            <ul className={styles.breadcrumbList}>
                <li><Link href="/">{home}</Link> {separator} </li>
                {pathNames.map((name, index) => {
                    const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathNames.length - 1;
                    return isLast ? (
                        <li key={name} className={styles.currentPage}>{name}</li>
                    ) : (
                        <li key={name}>
                            <Link href={routeTo}>{name}</Link>
                            {separator}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}