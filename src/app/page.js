'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { routes } from "@/data/routes";
import Link from "next/link";

export default function Home() {
    const home = routes.filter((item) => item.id === "home")[0];

    return (
        <main className={`page-main`}>
            <p className={`scia-paragraph intro ${styles.intro}`}>
                This is the official documentation for the Alina project. The project was created with the aim of automating and/or easily
                controlling and managing small crops on balconies, in greenhouses, or in gardens. It is a DIY project.
                For legal details, the license, and the disclaimer relating to this project, visit the relevant page and the repository on GitHub.
                This project may include different models and versions of boards/hardware.
                This site collects official resources, documentation, and binary files.
            </p>
            <section id="alina-vista" className={`page-content-section`}>
                <h1 className={`scia-h1`}>Alina Vista</h1>
                <section className={`page-content-subsection`}>
                    <h2 className={`scia-h2`}>What is it</h2>
                    <p className={`scia-paragraph`}>
                        Alina Vista is a hardware and software solution designed for the simple and repeatable management of small systems
                        (greenhouses, balconies, home gardens). The goal is to have a system that can be controlled locally
                        (via display and buttons), configured, and updated over time.
                    </p>
                </section>

                <section className={`page-content-subsection`}>
                    <h2 className={`scia-h2`}>What it is used for</h2>
                    <ul className={`page-content-list page-content-ulist`}>
                        <li>Programmed and/or sensor-based irrigation.</li>
                        <li>Monitoring of parameters (e.g., soil moisture).</li>
                        <li>Local interface (display menu) and persistent settings.</li>
                        <li>Firmware updates via OTA and USB (with documented procedures).</li>
                    </ul>
                </section>

                <section className={`page-content-subsection`}>
                    <h2 className={`scia-h2`}>Resources</h2>
                    <ul className={`page-content-list page-content-ulist`}>
                        {home?.children?.items?.filter((item) => item.id === "alina-vista")[0]?.children?.items.map((r) => (
                            <li key={r.id}>
                                {r.label}:
                                <Link
                                    className={`scia-color-primary ${styles.resourceLink}`}
                                    href={r.href}
                                    target={r.external.target}
                                    rel="noreferrer"
                                >
                                    {r.href}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={`page-content-subsection`}>
                    <div className="blockquote scia-blockquote-warning">
                        <p className="blockquote-paragraph">Note: links to repositories and documentation may change as the project evolves.</p>
                    </div>
                </section>
            </section>
        </main>
    );
}
