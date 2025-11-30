"use client";

import Link from "next/link";
import { type FC, useState } from "react";

export const NavBar: FC<Record<string, never>> = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-md">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<Link
						href="/"
						className="font-serif font-bold text-2xl bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
					>
						Philosophy
					</Link>

					<div className="hidden md:flex items-center gap-8">
						<Link
							href="/epistemology"
							className="text-foreground/70 hover:text-primary transition-colors font-serif"
						>
							Epistemology
						</Link>
						<Link
							href="/self"
							className="text-foreground/70 hover:text-primary transition-colors font-serif"
						>
							Self
						</Link>
						<Link
							href="/freedom"
							className="text-foreground/70 hover:text-primary transition-colors font-serif"
						>
							Freedom
						</Link>
						<Link
							href="/moral-philosophy"
							className="text-foreground/70 hover:text-primary transition-colors font-serif"
						>
							Moral Philosophy
						</Link>
					</div>

					<button
						type="button"
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden text-foreground hover:text-primary transition-colors"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<title>‎ </title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				{isOpen && (
					<div className="md:hidden pb-4 space-y-2 border-t border-primary/10 pt-4">
						<Link
							href="/epistemology"
							className="block text-foreground/70 hover:text-primary transition-colors font-serif py-2"
						>
							Epistemology
						</Link>
						<Link
							href="/self"
							className="block text-foreground/70 hover:text-primary transition-colors font-serif py-2"
						>
							Self
						</Link>
						<Link
							href="/freedom"
							className="block text-foreground/70 hover:text-primary transition-colors font-serif py-2"
						>
							Freedom
						</Link>
						<Link
							href="/moral-philosophy"
							className="block text-foreground/70 hover:text-primary transition-colors font-serif py-2"
						>
							Moral Philosophy
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};
