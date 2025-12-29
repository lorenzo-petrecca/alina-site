'use client'

export default function Legal () {
    return (
        <main className="page-main">

            {/* INTRO */}
            <section className={`intro-section page-content-section`}>
                <p className={`scia-paragraph intro`}>
                    This page contains legal information and disclaimers relating to the <strong>Alina project</strong>, including:
                </p>
                <ul className={`page-content-list page-content-ulist`}>
                    <li>the website</li>
                    <li>the software (boot, firmware, tools)</li>
                    <li>the hardware and associated electronic designs</li>
                </ul>
            </section>


            {/* DISCLAIMER */}
            <section id="disclaimer" className={`page-content-section`}>
                <h1 className={`scia-h2`}>Disclaimer</h1>
                <section id="disclaimer-1" className={`page-content-subsection`}>
                    <h2 className={`scia-leadText scia-margin-t-24 scia-margin-b-8 scia-typo-bold scia-typo-uppercase`}>Nature of the project</h2>
                    <p className="scia-paragraph">
                        <strong>Alina</strong> is an <strong>independent, experimental, and non-commercial</strong> project developed for the following purposes:
                    </p>
                    <ul className={`page-content-list page-content-ulist`}>
                        <li>education</li>
                        <li>hobby</li>
                        <li>research and technical experimentation</li>
                    </ul>
                </section>
                <section id="disclaimer-2" className={`page-content-subsection`}>
                    <h2 className={`scia-leadText scia-margin-t-24 scia-margin-b-8 scia-typo-bold scia-typo-uppercase`}>Use of the software</h2>
                    <p className="scia-paragraph">
                        The software provided (including bootloaders, firmware, update tools, and scripts):
                    </p>
                    <ul className={`page-content-list page-content-ulist`}>
                        <li>is distributed <strong>“as is”</strong></li>
                        <li><strong>without any warranty</strong>, express or implied</li>
                        <li>may contain bugs, limitations, or unexpected behavior</li>
                    </ul>
                    <p className="scia-paragraph scia-margin-t-24">
                        Use of the software is <strong>at the user's sole risk</strong>. In particular:
                    </p>
                    <ul className={`page-content-list page-content-ulist`}>
                        <li>flashing the firmware may cause data loss</li>
                        <li>improper use may render the device unusable (“brick”)</li>
                        <li>compatibility with hardware that has not been officially tested is not guaranteed</li>
                    </ul>
                </section>
                <section id="disclaimer-3" className={`page-content-subsection`}>
                    <h2 className={`scia-leadText scia-margin-t-24 scia-margin-b-8 scia-typo-bold scia-typo-uppercase`}>Firmware updates and flashing</h2>
                    <p className="scia-paragraph">
                        Installation and update procedures (USB, OTA, recovery):
                    </p>
                    <ul className={`page-content-list page-content-ulist`}>
                        <li>involve writing directly to the device's flash memory</li>
                        <li>may erase persistent configurations and data</li>
                        <li>require caution during execution</li>
                    </ul>
                    <p className="scia-paragraph scia-margin-t-24">
                        The user is responsible for:
                    </p>
                    <ul className={`page-content-list page-content-ulist`}>
                        <li>following the instructions correctly</li>
                        <li>verifying hardware compatibility</li>
                        <li>ensuring that power or connections are not interrupted during the process</li>
                    </ul>
                </section>
                <section id="disclaimer-4" className={`page-content-subsection`}>
                    <h2 className={`scia-leadText scia-margin-t-24 scia-margin-b-8 scia-typo-bold scia-typo-uppercase`}>Use of hardware</h2>
                    <p className="scia-paragraph">
                        Hardware projects (schematics, PCBs, construction instructions):
                    </p>
                    <ul className={`page-content-list page-content-ulist`}>
                        <li>are provided for informational purposes</li>
                        <li><strong>do not constitute a certified product</strong></li>
                        <li>
                            <strong>are not intended for critical applications</strong>, including (but not limited to):
                            <ul className={`page-content-list page-content-ulist`}>
                                <li>personal safety</li>
                                <li>medical equipment</li>
                                <li>industrial control systems</li>
                                <li>applications where malfunction could cause damage to people or property</li>
                            </ul>
                        </li>
                    </ul>

                    <div className="blockquote scia-blockquote-warning">
                        <p className="blockquote-paragraph">
                            Anyone who builds or uses the hardware does so at their <strong>own risk</strong>.
                        </p>
                    </div>
                </section>
            </section>


            {/* LICENSE */}
            <section id="license" className={`page-content-section`}>
                <h1 className={`scia-h2`}>License</h1>
                <section id="license-intro" className={`page-content-subsection`}>
                    <p className="scia-paragraph">
                        The project source code is distributed under the licenses indicated in the respective repositories.
                    </p>
                    <p className="scia-paragraph">The licenses apply separately to:</p>
                    <ul className={`page-content-list page-content-ulist`}>
                        <li>software (boot, firmware, libraries)</li>
                        <li>documentation</li>
                        <li>any hardware projects</li>
                    </ul>
                    <div className="blockquote scia-blockquote-info">
                        <p className="blockquote-paragraph">
                            For updated details, always refer to the <code className="scia-code">{`LICENSE`}</code> files in the official repositories.
                        </p>
                    </div>
                </section>
                <section id="license-1" className={`page-content-subsection`}>
                    <h2 className={`scia-leadText scia-margin-t-24 scia-margin-b-8 scia-typo-bold scia-typo-uppercase`}>Third-party software</h2>
                    <p className="scia-paragraph">
                        The project uses third-party software and libraries (e.g., frameworks, embedded libraries, build tools).
                    </p>
                    <p className="scia-paragraph">These components:</p>
                    <ul className={`page-content-list page-content-ulist`}>
                        <li>remain the property of their respective authors</li>
                        <li>are distributed under their own licenses</li>
                        <li>are not modified in their original rights</li>
                    </ul>
                    <div className="blockquote scia-blockquote-info">
                        <p className="blockquote-paragraph">
                            The licenses of dependencies can be found in the repositories or in the technical documentation.
                        </p>
                    </div>
                </section>
                <section id="license-2" className={`page-content-subsection`}>
                    <h2 className={`scia-leadText scia-margin-t-24 scia-margin-b-8 scia-typo-bold scia-typo-uppercase`}>Website</h2>
                    <p className="scia-paragraph">
                        The website associated with the project:
                    </p>
                    <ul className={`page-content-list page-content-ulist`}>
                        <li>is for informational and documentary purposes</li>
                        <li>does not require registration</li>
                        <li>does not collect users&apos; personal data</li>
                        <li>does not use profiling cookies</li>
                        <li>does not use tracking or analytics tools</li>
                    </ul>
                    <div className="blockquote scia-blockquote-info">
                        <p className="blockquote-paragraph">
                            Any technical logs (e.g., HTTP requests) are managed exclusively by the hosting infrastructure and are not used by the project to identify users.
                        </p>
                    </div>
                </section>
                <section id="license-3" className={`page-content-subsection`}>
                    <h2 className={`scia-leadText scia-margin-t-24 scia-margin-b-8 scia-typo-bold scia-typo-uppercase`}>Hosting and infrastructure</h2>
                    <p className="scia-paragraph">
                        The site is hosted on third-party infrastructure.
                    </p>
                    <p className="scia-paragraph">
                        The project <strong>has no direct control</strong> over network systems, technical logs, or internal hosting mechanisms, which are managed according to the service provider's policies.
                    </p>
                </section>
                <section id="license-4" className={`page-content-subsection`}>
                    <h2 className={`scia-leadText scia-margin-t-24 scia-margin-b-8 scia-typo-bold scia-typo-uppercase`}>Liability</h2>
                    <p className="scia-paragraph">
                        To the extent permitted by law:
                    </p>
                    <ul className={`page-content-list page-content-ulist`}>
                        <li>the authors of the project are not liable for any direct or indirect damages</li>
                        <li>continuity of service or support is not guaranteed</li>
                        <li>the project may change, be suspended, or discontinued without notice</li>
                    </ul>
                    <div className="blockquote scia-blockquote-warning">
                        <p className="blockquote-paragraph">
                            Use of the project implies acceptance of these terms.
                        </p>
                    </div>
                </section>
            </section>



            {/* CONTACTS */}
            <section id="contacts" className={`page-content-section`}>
                <h1 className={`scia-h2`}>Contacts and repositories</h1>
                <section id="contacts-intro" className={`page-content-subsection`}>
                    <p className="scia-paragraph">The project is developed openly.</p>
                    <p className="scia-paragraph">Repositories and official documentation:</p>
                    <ul className={`page-content-list page-content-ulist`}>
                        <li>available via the links on the website</li>
                    </ul>
                    <div className="blockquote scia-blockquote-info">
                        <p className="blockquote-paragraph">
                            For technical reports or contributions, please refer to the channels indicated in the repositories.
                        </p>
                    </div>
                </section>
            </section>



            {/* ACCEPTANCE */}
            <section id="acceptance" className={`page-content-section`}>
                <h1 className={`scia-h2`}>Acceptance</h1>
                <section id="acceptance-intro" className={`page-content-subsection`}>
                    <p className="scia-paragraph">
                        By using the website, software, or hardware associated with the <strong>Alina</strong> project, the user declares that they have read, understood, and accepted the information provided on this page.
                    </p>
                </section>
            </section>
        </main>
    );
}
