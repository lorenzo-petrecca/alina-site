'use client'

import styles from '@/app/downloads/downloads.module.css';
import { routes } from '@/data/routes';
import { FaSdCard } from "react-icons/fa6";

export default function Downloads () {
    const downloads = routes.filter((item) => item.id === "downloads")[0];

    return (
        <main className={`page-main page-without-nav ${styles.main}`}>
            {/* <h1 className={`scia-h1`}>{downloads.label}</h1> */}
            <div className={styles.mainContent}>
                { downloads?.children?.items.map((section) => (
                    <section key={section.id} className={`page-content-section ${styles.sectionBox}`}>
                        <h2 className={`scia-h2`}>{section.label}</h2>
                        <p className={`scia-leadText scia-padding-b-20`}>Download the <span className='scia-typo-lowercase'><b>{section.label}</b></span> suitable for your MCU based on the <b>flash size</b>.</p>
                        <div className={`${styles.sizesContainer}`}>
                            { section?.children?.items?.map((item) => (
                                <a key={item.id} className={`scia-btn scia-btn-large ${styles.sizeItem}`} href={item.href}>
                                    <span className={`scia-typo-large scia-typo-medium scia-typo-uppercase scia-color-muted scia-typo-nowrap`}>MCU</span>
                                    <span className={`scia-typo-xxlarge scia-typo-black scia-typo-capitalize scia-typo-nowrap scia-flex scia-items-center`}>
                                        <FaSdCard size={12} className='scia-margin-r-4'/>
                                        {item.label}
                                    </span>
                                    <span className={`scia-typo-large scia-typo-black scia-color-muted ${styles.arrowIcon}`}>➜</span>
                                </a>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
