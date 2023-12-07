import styles from './Navbar.module.css';

interface NavbarItem {
    text: string;
    slug: string;
}

const navbarItems: NavbarItem[] = [
    {
        text: 'Home',
        slug: '/',
    },
    {
        text: 'Page 1',
        slug: '/',
    },
    {
        text: 'Page 2',
        slug: '/',
    },
]

export default async function Navbar() {

    return (
        <nav className={styles.stickyNavbar}>
            <div className={styles.navbarContainer}>
                <h1>React Training</h1>
                <ul>
                    {navbarItems.map((item: NavbarItem) => (
                        <li key={item.text}>
                            <a href={item.slug}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </nav>
    );
}
