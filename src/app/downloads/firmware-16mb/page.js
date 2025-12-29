import styles from '@/components/releaseTable/releaseTable.module.css';
import ReleaseTable from "@/components/releaseTable/releaseTable";
import f16 from '@/data/manifests/firmware/firmware-16mb.json';

export default function Firmware16mb () {
    return (
        <main className={`${styles.tablePage} page-without-nav`}>
            <h1 className='scia-h3 scia-margin-b-40 scia-margin-l-auto scia-margin-r-auto'>Download Firmware (flash - 16MB)</h1>
            <ReleaseTable fw={f16.apps} type={f16['firm-type']}/>
        </main>
    );
}
