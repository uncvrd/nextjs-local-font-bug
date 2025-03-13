import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import { Providers } from "@/components/providers";

export const helveticaNeue = localFont({
    src: [{ path: "../styles/helvetica-neue/regular.ttf" }],
    variable: "--font-helvetica-neue",
});

const pxGrotesk = localFont({
    src: [
        { path: "../styles/px-grotesk/light.ttf", weight: "100" },
        { path: "../styles/px-grotesk/test.ttf", weight: "400" },
    ],
    variable: "--font-px-grotesk",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${helveticaNeue.variable} ${pxGrotesk.variable} font-sans antialiased `}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
