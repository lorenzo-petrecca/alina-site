"use client"

import Link from "next/link"
import { routes } from "@/data/routes";
import styles from '@/components/mainNav/mainNav.module.css';

const exactPath = (pathname, href) => {
    if (pathname === href) return true;
    return false;
};

const subPath = (pathname, href) => {
    if (href === "/") return false;
    if (pathname.startsWith(href)) return true;
    return false;
}

export default function MainNav ({ pathname }) {
    
    return (
        <nav className={`${styles.mainNav}`}>
            { routes.filter((item) => item.show).map((item) => (
                <Link
                    key={item.id}
                    href={item.href}
                    target={item.external.target}
                    className={`scia-link ${styles.navItems} ${exactPath(pathname, item.href) || subPath(pathname, item.href) ? "scia-link-primary scia-color-primary" : ""}`}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}
