import styles from '@/components/releaseTable/releaseTable.module.css';
import ReleaseTable from "@/components/releaseTable/releaseTable";
import b16 from '@/data/manifests/boot/boot-16mb.json';

export default function Boot16mb () {
    return (
        <main className={`${styles.tablePage} page-without-nav`}>
            <h1 className='scia-h3 scia-margin-b-40 scia-margin-l-auto scia-margin-r-auto'>Download Boot (flash - 16MB)</h1>
            <ReleaseTable fw={b16.boots} type={b16['firm-type']}/>
        </main>
    );
}
