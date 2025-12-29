// data/navItems.js
export const routes = [

    // HOME
    {  
        id: "home",
        href: "/",
        label: "Home",
        external: {
            is: false,
            target: "_self",
        },
        children: {
            standalone: false,  // decide se sono ancore della stessa rotta (false), o rotte indipendenti (true)
            title: "Boards",
            items: [
                // Alina Vista
                {
                    id: "alina-vista",
                    href: "#alina-vista",
                    label: "Alina Vista",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    children: {
                        standalone: false,  // decide se sono ancore della stessa rotta (false), o rotte indipendenti (true)
                        items: [
                            // Hardware PDF
                            {
                                id: "hardware-pdf",
                                href: "/documentation.pdf",
                                label: "Hardware PDF",
                                external: {
                                    is: false,
                                    target: "_blank",
                                },
                                show: true,
                            },
                            // Hardware Repo
                            {
                                id: "hardware-repo",
                                href: "https://github.com/lorenzo-petrecca/Alina_Vista_hardware",
                                label: "Hardware repo",
                                external: {
                                    is: true,
                                    target: "_blank",
                                },
                                show: true,
                            },
                            // Firmware Boot Repo
                            {
                                id: "firm-boot-repo",
                                href: "https://github.com/lorenzo-petrecca/Alina_Vista_Boot",
                                label: "Boot firmware repo",
                                external: {
                                    is: true,
                                    target: "_blank",
                                },
                                show: true,
                            },
                            // Firmware App Repo
                            {
                                id: "firm-app-repo",
                                href: "/",
                                label: "App firmware repo",
                                external: {
                                    is: true,
                                    target: "_blank",
                                },
                                show: true,
                            },
                        ],
                    },
                    show: true,
                },
            ],
        },
        show: true,
    },

    // DOWNLOADS
    {
        id: "downloads",
        href: "/downloads",
        label: "Downloads",
        external: {
            is: false,
            target: "_self",
        },
        children: {
            standalone: true,  // decide se sono ancore della stessa rotta (false), o rotte indipendenti (true)
            items: [
                // Boot
                {
                    id: "boot",
                    href: "/downloads",
                    label: "Boot",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    children: {
                        standalone: true,
                        items: [
                            {   // Boot 4MB
                                id: "boot-4mb",
                                href: "/downloads/boot-4mb",
                                label: "4MB",
                                external: {
                                    is: false,
                                    target: "_self",
                                },
                                show: false
                            },
                            {   // Boot 8MB
                                id: "boot-8mb",
                                href: "/downloads/boot-8mb",
                                label: "8MB",
                                external: {
                                    is: false,
                                    target: "_self",
                                },
                                show: false
                            },
                            {   // Boot 16MB
                                id: "boot-16mb",
                                href: "/downloads/boot-16mb",
                                label: "16MB",
                                external: {
                                    is: false,
                                    target: "_self",
                                },
                                show: false
                            },
                        ]
                    },
                    show: false,
                },
                // Firmware
                {
                    id: "firmware",
                    href: "/downloads",
                    label: "Firmware",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    children: {
                        standalone: true,
                        items: [
                            {   // Firmware 4MB
                                id: "firmware-4mb",
                                href: "/downloads/firmware-4mb",
                                label: "4MB",
                                external: {
                                    is: false,
                                    target: "_self",
                                },
                                show: false
                            },
                            {   // Firmware 8MB
                                id: "firmware-8mb",
                                href: "/downloads/firmware-8mb",
                                label: "8MB",
                                external: {
                                    is: false,
                                    target: "_self",
                                },
                                show: false
                            },
                            {   // Firmware 16MB
                                id: "firmware-16mb",
                                href: "/downloads/firmware-16mb",
                                label: "16MB",
                                external: {
                                    is: false,
                                    target: "_self",
                                },
                                show: false
                            },
                        ]
                    },
                    show: false,
                },
            ],
        },
        show: true,
    },

    // TUTORIAL
    {
        id: "tutorial",
        href: "/tutorial",
        label: "Tutorial",
        external: {
            is: false,
            target: "_self",
        },
        children: {
            standalone: false,  // decide se sono ancore della stessa rotta (false), o rotte indipendenti (true)
            items: [
                // Overview
                {
                    id: "overview",
                    href: "/tutorial/#overview",
                    label: "Overview",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    show: true,
                },
                // Requirements
                {
                    id: "requirements",
                    href: "/tutorial/#requirements",
                    label: "Requirements",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    show: true,
                },
                // Method A: Minimal installation
                {
                    id: "method-A",
                    href: "/tutorial/#method-A",
                    label: "Method A: Minimal installation",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    show: true,
                },
                // Method B: Manual installation
                {
                    id: "method-B",
                    href: "/tutorial/#method-B",
                    label: "Method B: Manual installation",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    show: true,
                },
                // Method C: Future updates
                {
                    id: "method-C",
                    href: "/tutorial/#method-C",
                    label: "Method C: Future updates",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    show: true,
                },
                // Entering BOOT mode
                {
                    id: "entering-boot-mode",
                    href: "/tutorial/#entering-boot-mode",
                    label: "Entering BOOT mode",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    show: true,
                },
                // Programming mode
                {
                    id: "programming-mode",
                    href: "/tutorial/#programming-mode",
                    label: "Programming mode",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    show: true,
                },
                // Installing and using esptool
                {
                    id: "esptool",
                    href: "/tutorial/#esptool",
                    label: "Installing and using esptool",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    show: true,
                },
                // BOOT ZIP package
                {
                    id: "zip-package",
                    href: "/tutorial/#zip-package",
                    label: "BOOT ZIP package",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    show: true,
                },
                // Partitions
                {
                    id: "partitions",
                    href: "/tutorial/#partitions",
                    label: "Partitions",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    show: true,
                },
                // Common problems
                {
                    id: "common-problems",
                    href: "/tutorial/#common-problems",
                    label: "Common problems",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    show: true,
                },
            ],
        },
        show: true,
    },

    // LEGAL
    {
        id: "legal",
        href: "/legal",
        label: "Legal",
        external: {
            is: false,
            target: "_self",
        },
        children: {
            standalone: false,  // decide se sono ancore della stessa rotta (false), o rotte indipendenti (true)
            items: [
                // Disclaimer
                {
                    id: "disclaimer",
                    href: "/legal",
                    label: "Disclaimer",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    show: true,
                },
                // License
                {
                    id: "license",
                    href: "/legal",
                    label: "License",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    show: true,
                },
                // Contacts
                {
                    id: "contacts",
                    href: "/legal",
                    label: "Contacts and repositories",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    show: true,
                },
                // Acceptance
                {
                    id: "acceptance",
                    href: "/legal",
                    label: "Acceptance",
                    external: {
                        is: false,
                        target: "_self",
                    },
                    show: true,
                },
            ],
        },
        show: true,
    },
];
