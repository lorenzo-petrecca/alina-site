import styles from '@/components/releaseTable/releaseTable.module.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

function Badge ({ channel }) {

    return (
        <div className={`${styles.badge} ${styles[channel] || ''} scia-typo-uppercase scia-typo-xsmall scia-typo-bold`}>
            {channel}
        </div>
    );
}

export default function ReleaseTable ({ fw, type }) {
    if (!fw?.length) return <p>No release available.</p>

    return (
        <div className={styles.tableWrap}>
        <table className={`${styles.table}`}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Version</th>
                    <th className={styles.mobilenone}>Date</th>
                    <th className={styles.mobilenone}>Channel</th>
                    <th>{type === "boot" ? ".zip" : ".bin"}</th>
                    <th className={styles.mobilenone}>Size (KB)</th>
                    <th>Release</th>
                </tr>
            </thead>
            <tbody>
                { fw.map((k) => {
                    const nOfVersions = k.versions?.length;
                    let vCounter = 0;
                    return k.versions.map((v) => {
                        vCounter ++;
                        return (
                            <tr key={`${k.id}-${v.version}-${v.build}`}>
                                { vCounter === 1 && <td rowSpan={nOfVersions} className='scia-typo-semibold'>{k.display_name}</td>}
                                <td>{v.version}</td>
                                <td className={styles.mobilenone}>{v.date}</td>
                                <td className={styles.mobilenone}>
                                    <Badge channel={v.channel} />
                                </td>
                                <td>
                                    <div className={`scia-inline-flex scia-justify-center scia-align-center scia-full-w`}>
                                        <a
                                            className={`scia-btn scia-btn-outline-primary scia-btn-icon`}
                                            href={v.url}
                                            download
                                        >
                                            <FaDownload size={12} />
                                        </a>
                                    </div>
                                </td>
                                <td className={styles.mobilenone}>{v.size_kb}</td>
                                <td>
                                    <div className={`scia-inline-flex scia-justify-center scia-align-center scia-full-w`}>
                                        <a
                                            className={`scia-btn scia-btn-outline-primary scia-btn-icon`}
                                            href={v.release_url}
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <FaExternalLinkAlt size={12} />
                                        </a>
                                    </div>
                                </td>
                            
                            
                            </tr>
                        );
                    });
                })}
            </tbody>
        </table>
        </div>
    );
}
