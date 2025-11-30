"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NavBar } from "@/components/NavBar";

export default function MoralPhilosophyPage() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const sections = [
		{
			title: "What is Morality?",
			content:
				"Moral philosophy examines the nature of right and wrong, good and bad. It explores how we should live and what we owe to each other.",
			fullContent: (
				<div className="space-y-6">
					<p className="text-lg text-foreground/80 leading-relaxed">
						<span className="font-semibold">
							What makes an action right or wrong?
						</span>{" "}
						Is morality objective, or is it dependent on culture,
						individual preference, or circumstance?
					</p>
				</div>
			),
		},
	];

	return (
		<main className="min-h-screen bg-linear-to-br from-background via-background to-secondary/10">
			<NavBar />

			<section className="relative pt-32 px-4 py-20 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-4xl">
					{isLoaded && (
						<div className="animate-fade-in-down space-y-6">
							<div className="inline-block">
								<div className="h-1 w-12 bg-linear-to-r from-rose-500 to-pink-500"></div>
							</div>
							<h1 className="text-6xl sm:text-7xl font-serif font-bold">
								<span className="bg-linear-to-r from-rose-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
									Moral Philosophy
								</span>
							</h1>
							<p className="text-xl text-foreground/80 leading-relaxed max-w-2xl">
								<span className="font-semibold">
									What is right?
								</span>{" "}
								How should we live?
							</p>
						</div>
					)}
				</div>
			</section>

			<section className="relative px-4 py-20 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-4xl space-y-20">
					{sections.map((section, idx) => (
						<div
							key={section.title}
							className="stagger-item space-y-8"
							style={{ animationDelay: `${idx * 0.2}s` }}
						>
							<div className="border-l-4 border-rose-500 pl-6">
								<h2 className="text-4xl font-serif font-bold mb-4">
									{section.title}
								</h2>
							</div>

							{section.fullContent && (
								<div className="prose-like">
									{section.fullContent}
								</div>
							)}
						</div>
					))}
				</div>
			</section>

			<section className="relative px-4 py-20 sm:px-6 lg:px-8 border-t border-primary/10">
				<div className="mx-auto max-w-4xl">
					<div className="grid grid-cols-3 gap-4">
						<Link href="/freedom" className="group">
							<div className="p-6 rounded-lg border border-primary/20 hover:border-accent/40 transition-all hover:bg-accent/10">
								<p className="text-sm text-foreground/60 mb-2">
									← Previous
								</p>
								<p className="font-serif font-bold">Freedom</p>
							</div>
						</Link>
						<Link href="/" className="group">
							<div className="p-6 rounded-lg border border-primary/20 hover:border-accent/40 transition-all hover:bg-accent/10">
								<p className="text-sm text-foreground/60 mb-2">
									Home
								</p>
								<p className="font-serif font-bold">↑</p>
							</div>
						</Link>
						<Link href="/epistemology" className="group">
							<div className="p-6 rounded-lg border border-primary/20 hover:border-accent/40 transition-all hover:bg-accent/10">
								<p className="text-sm text-foreground/60 mb-2">
									Back to Start
								</p>
								<p className="font-serif font-bold">
									Knowledge →
								</p>
							</div>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
