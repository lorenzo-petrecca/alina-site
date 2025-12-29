'use client'

import { routes } from "@/data/routes"
import { usePathname } from "next/navigation"
import Link from "next/link";

export default function PageNav () {
    const pathname = usePathname();

    const curMainNavItem =
        routes.filter((item) => item.href === pathname && item.children.standalone === false)[0];

    return (
        <nav className={`page-nav page-left-nav`}>
            <div className={`scia-color-muted scia-typo-xsmall scia-typo-bold nav-title`}>{curMainNavItem?.children?.title || "On this page"}</div>
            { curMainNavItem?.children?.items?.map((item) => (
                <Link
                    key={item.id}
                    href={`${item.href}`}
                    className={`scia-link nav-item`}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}
