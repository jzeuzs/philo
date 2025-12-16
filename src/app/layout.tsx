import type { Metadata } from "next";
import { Lora, Playfair_Display } from "next/font/google";
import type React from "react";
import "./globals.css";

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-serif",
});

const lora = Lora({
	subsets: ["latin"],
	variable: "--font-body",
});

export const metadata: Metadata = {
	title: "Philosophical Inquiries",
	description: "Philo 1 Final Output | Meaning of Life Group",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${playfair.variable} ${lora.variable} font-body antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
