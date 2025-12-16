"use client";

import { Book } from "@/components/Book";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Orbs } from "@/components/Orbs";

export default function Home() {
	return (
		<main className="min-h-screen bg-background overflow-hidden">
			<NavBar />
			<Orbs />
			<Book />
			<Footer />
		</main>
	);
}
