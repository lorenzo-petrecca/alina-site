import styles from '@/components/releaseTable/releaseTable.module.css';
import ReleaseTable from "@/components/releaseTable/releaseTable";
import b8 from '@/data/manifests/boot/boot-8mb.json';

export default function Boot16mb () {
    return (
        <main className={`${styles.tablePage} page-without-nav`}>
            <h1 className='scia-h3 scia-margin-b-40 scia-margin-l-auto scia-margin-r-auto'>Download Boot (flash - 8MB)</h1>
            <ReleaseTable fw={b8.boots} type={b8['firm-type']}/>
        </main>
    );
}
