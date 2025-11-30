"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NavBar } from "@/components/NavBar";

export default function EpistemologyPage() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const sections = [
		{
			title: "What is Knowledge?",
			content: "idk",
			fullContent: (
				<div className="space-y-6">
					<p className="text-lg text-foreground/80 leading-relaxed">
						<span className="font-semibold">
							What distinguishes knowledge from mere belief?
						</span>
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
								<div className="h-1 w-12 bg-linear-to-r from-primary to-accent"></div>
							</div>
							<h1 className="text-6xl sm:text-7xl font-serif font-bold">
								<span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
									Epistemology
								</span>
							</h1>
							<p className="text-xl text-foreground/80 leading-relaxed max-w-2xl">
								The study of knowledge itself.{" "}
								<span className="font-semibold">
									What can we truly know?
								</span>{" "}
								How do we know it?
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
							<div className="border-l-4 border-primary pl-6">
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
						<Link href="/" className="group">
							<div className="p-6 rounded-lg border border-primary/20 hover:border-accent/40 transition-all hover:bg-accent/10">
								<p className="text-sm text-foreground/60 mb-2">
									← Back
								</p>
								<p className="font-serif font-bold">Home</p>
							</div>
						</Link>
						<Link href="/self" className="group">
							<div className="p-6 rounded-lg border border-primary/20 hover:border-accent/40 transition-all hover:bg-accent/10">
								<p className="text-sm text-foreground/60 mb-2">
									Next
								</p>
								<p className="font-serif font-bold">
									The Self →
								</p>
							</div>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
