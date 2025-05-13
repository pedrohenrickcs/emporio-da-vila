import type { Metadata } from "next";
import { Comfortaa, Poppins } from 'next/font/google';

import "./globals.css";

const comfortaa = Comfortaa({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-comfortaa',
    display: 'swap',
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-poppins',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Empório da vila",
    description: "Produtos selecionados com carinho pra você",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={`${comfortaa.variable} ${poppins.variable}`}>
            <body>{children}</body>
        </html>
    );
}
