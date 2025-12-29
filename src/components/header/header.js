'use client'

import MainNav from '../mainNav/mainNav';
import styles from '@/components/header/header.module.css';
import { usePathname } from "next/navigation";

export default function Header () {
    const pathname = usePathname();
    return (
        <header className={`${styles.header}`}>
            <MainNav pathname={pathname} />
        </header>
    );
}
