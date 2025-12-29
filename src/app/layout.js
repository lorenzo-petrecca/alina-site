import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import PageNav from "@/components/pageNav/pageNav";

const mono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Alina",
    description: "Alina Project. Autonomous electronic control unit designed for smart irrigation management in small systems, balconies, greenhouses, and crops. Download the firmware to create your project.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-scia-theme="light">
            <body className={`${mono.variable}`}>
                <Header />
                <div className={`page`}>
                    <aside className="page-aside">
                        <PageNav />
                    </aside>
                    {children}
                    <aside className="page-nav page-right-nav"></aside>
                </div>
            </body>
        </html>
    );
}
