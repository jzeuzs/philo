"use client";

import { Book } from "@/components/Book";
import { NavBar } from "@/components/NavBar";
import { Orbs } from "@/components/Orbs";

export default function Home() {
	return (
		<main className="min-h-screen bg-background overflow-hidden">
			<NavBar />
			<Orbs />
			<Book />
		</main>
	);
}
