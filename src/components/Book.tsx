"use client";

import { AnimatePresence, motion, type PanInfo } from "motion/react";
import Link from "next/link";
import { type FC, useState } from "react";

interface BookPage {
	id: number;
	title: string;
	subtitle: string;
	question: string;
	description: string;
	href: string;
	color: string;
	accentLight: string;
	accentDark: string;
	emoji: string;
	themes: {
		primary: string;
		secondary: string;
		glow: string;
	};
}

const pages: BookPage[] = [
	{
		id: 0,
		title: "Philosophy",
		subtitle: "The Love of Wisdom",
		question: "What lies beyond?",
		description:
			"Begin your journey into the depths of human thought and understanding.",
		href: "#",
		color: "from-slate-900 to-slate-800",
		accentLight: "from-amber-400 to-orange-400",
		accentDark: "from-amber-600 to-orange-600",
		emoji: "📖",
		themes: {
			primary: "rgb(217, 119, 6)",
			secondary: "rgb(180, 83, 9)",
			glow: "rgba(217, 119, 6, 0.3)",
		},
	},
	{
		id: 1,
		title: "Epistemology",
		subtitle: "Knowledge & Knowing",
		question: "What can we truly know?",
		description:
			"Explore the foundations of knowledge, belief systems, and the limits of human understanding.",
		href: "/epistemology",
		color: "from-amber-600 to-orange-700",
		accentLight: "from-yellow-300 to-amber-300",
		accentDark: "from-amber-800 to-orange-900",
		emoji: "🧠",
		themes: {
			primary: "rgb(251, 191, 36)",
			secondary: "rgb(234, 179, 8)",
			glow: "rgba(251, 191, 36, 0.4)",
		},
	},
	{
		id: 2,
		title: "Self",
		subtitle: "Identity & Consciousness",
		question: "Who truly are we?",
		description:
			"Investigate consciousness, identity, existence, and the nature of the self.",
		href: "/self",
		color: "from-purple-700 to-blue-800",
		accentLight: "from-purple-300 to-blue-300",
		accentDark: "from-purple-900 to-blue-900",
		emoji: "👤",
		themes: {
			primary: "rgb(147, 51, 234)",
			secondary: "rgb(109, 40, 217)",
			glow: "rgba(147, 51, 234, 0.3)",
		},
	},
	{
		id: 3,
		title: "Freedom",
		subtitle: "Liberty & Choice",
		question: "Are we truly free?",
		description:
			"Contemplate free will, determinism, agency, and human autonomy.",
		href: "/freedom",
		color: "from-emerald-600 to-cyan-700",
		accentLight: "from-emerald-300 to-cyan-300",
		accentDark: "from-emerald-800 to-cyan-900",
		emoji: "🕊️",
		themes: {
			primary: "rgb(16, 185, 129)",
			secondary: "rgb(6, 182, 212)",
			glow: "rgba(16, 185, 129, 0.3)",
		},
	},
	{
		id: 4,
		title: "Ethics",
		subtitle: "Morality & Values",
		question: "How should we live?",
		description:
			"Ponder virtue, ethics, moral principles, and the right path of conduct.",
		href: "/moral-philosophy",
		color: "from-rose-600 to-pink-700",
		accentLight: "from-rose-300 to-pink-300",
		accentDark: "from-rose-800 to-pink-900",
		emoji: "⚖️",
		themes: {
			primary: "rgb(244, 63, 94)",
			secondary: "rgb(236, 72, 153)",
			glow: "rgba(244, 63, 94, 0.3)",
		},
	},
];

const Particle: FC<{
	delay: number;
	duration: number;
	x: number;
	y: number;
}> = ({ delay, duration, x, y }) => {
	return (
		<motion.div
			className="absolute w-0.5 h-0.5 rounded-full"
			style={{
				background: "rgba(255, 255, 255, 0.6)",
				left: `${x}%`,
				top: `${y}%`,
				boxShadow: "0 0 8px rgba(255, 255, 255, 0.4)",
			}}
			animate={{
				y: [0, -250, -500],
				x: [0, 80, 150],
				opacity: [0.8, 0.4, 0],
				scale: [1, 0.5, 0],
			}}
			initial={{ opacity: 0, scale: 0 }}
			transition={{
				duration,
				delay,
				repeat: Number.POSITIVE_INFINITY,
				ease: "easeOut",
			}}
		/>
	);
};

export const Book: FC<Record<string, never>> = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [direction, setDirection] = useState(0);
	const [isHovering, setIsHovering] = useState(false);

	// biome-ignore lint/suspicious/noExplicitAny: first arg not needed
	const handleDragEnd = (_: any, info: PanInfo) => {
		const swipeThreshold = 50;
		const swipe = info.offset.x;

		if (Math.abs(swipe) > swipeThreshold) {
			if (swipe > 0) {
				paginate(-1);
			} else {
				paginate(1);
			}
		}
	};

	const paginate = (newDirection: number) => {
		setDirection(newDirection);
		setCurrentPage((prev) => {
			let next = prev + newDirection;
			if (next < 0) next = pages.length - 1;
			if (next >= pages.length) next = 0;
			return next;
		});
	};

	const page = pages[currentPage];

	const pageVariants = {
		enter: (dir: number) => ({
			y: dir > 0 ? 100 : -100,
			rotateY: dir > 0 ? 90 : -90,
			opacity: 0,
			scale: 0.85,
		}),
		center: {
			zIndex: 1,
			y: 0,
			rotateY: 0,
			opacity: 1,
			scale: 1,
		},
		exit: (dir: number) => ({
			zIndex: 0,
			y: dir < 0 ? 100 : -100,
			rotateY: dir < 0 ? 90 : -90,
			opacity: 0,
			scale: 0.85,
		}),
	};

	const pageTransition = {
		type: "spring",
		stiffness: 300,
		damping: 30,
		mass: 0.5,
	};

	// biome-ignore-start lint/suspicious/noArrayIndexKey: random
	return (
		<div className="relative w-full min-h-screen flex items-center justify-center px-4 overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="absolute top-0 -left-1/3 w-96 md:w-full h-96 rounded-full blur-3xl"
					style={{
						background: `radial-gradient(circle, ${page.themes.glow} 0%, transparent 65%)`,
						filter: "blur(40px)",
					}}
					animate={{
						x: [0, 150, 0],
						y: [0, 80, 0],
					}}
					transition={{
						duration: 25,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-0 -right-1/3 w-96 md:w-full h-96 rounded-full blur-3xl"
					style={{
						background:
							"radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 65%)",
						filter: "blur(40px)",
					}}
					animate={{
						x: [0, -120, 0],
						y: [0, -100, 0],
					}}
					transition={{
						duration: 30,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl"
					style={{
						background:
							"radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
						filter: "blur(50px)",
					}}
					animate={{
						scale: [1, 1.3, 1],
						opacity: [0.3, 0.6, 0.3],
					}}
					transition={{
						duration: 20,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="absolute inset-0 pointer-events-none">
				{[...Array(12)].map((_, i) => (
					<Particle
						key={i}
						delay={i * 0.25}
						duration={5 + i * 0.6}
						x={Math.random() * 100}
						y={Math.random() * 100}
					/>
				))}
			</div>

			{/* Main Book Container */}
			<motion.div
				className="relative w-full max-w-5xl h-auto md:h-[550px] perspective z-10 mt-16 md:mt-0"
				drag="x"
				dragElastic={0.15}
				onDragEnd={handleDragEnd}
				dragConstraints={{ left: 0, right: 0 }}
			>
				<motion.div
					className="w-full h-full rounded-3xl md:rounded-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
					style={{
						perspective: "1200px",
					}}
					onHoverStart={() => setIsHovering(true)}
					onHoverEnd={() => setIsHovering(false)}
				>
					<motion.div
						className="hidden md:flex w-1/2 rounded-l-4xl bg-linear-to-br from-slate-800 to-slate-900 shadow-lg overflow-hidden items-center justify-center border-r border-amber-400/20 relative"
						animate={{
							rotateY: isHovering ? -40 : -30,
						}}
						transition={{ duration: 0.7, ease: "easeOut" }}
						style={{
							transformStyle: "preserve-3d",
							transformOrigin: "right center",
						}}
					>
						<motion.div
							className="text-center px-8 space-y-8 relative z-10"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3 }}
						>
							<motion.div
								className="text-8xl"
								animate={{
									scale: [1, 1.2, 0.95, 1],
									rotateZ: [-8, 5, -3, 0],
									y: [0, -25, 10, 0],
								}}
								transition={{
									duration: 5,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
								}}
							>
								📖
							</motion.div>

							<div className="space-y-3">
								<motion.h1
									className="text-4xl md:text-5xl font-serif font-bold tracking-tight bg-linear-to-r from-amber-200 via-amber-300 to-orange-400 bg-clip-text text-transparent"
									animate={{
										opacity: [0.8, 1, 0.8],
									}}
									transition={{
										duration: 4,
										repeat: Number.POSITIVE_INFINITY,
									}}
								>
									Philosophical
								</motion.h1>
								<motion.h2
									className="text-2xl md:text-3xl text-amber-300/90 font-serif font-light tracking-wide"
									animate={{ opacity: [0.6, 0.95, 0.6] }}
									transition={{
										duration: 4,
										repeat: Number.POSITIVE_INFINITY,
										delay: 0.2,
									}}
								>
									Inquiries
								</motion.h2>
							</div>

							<motion.p
								className="text-xs md:text-sm text-white/40 font-light tracking-widest uppercase"
								animate={{ y: [0, 8, 0] }}
								transition={{
									duration: 3,
									repeat: Number.POSITIVE_INFINITY,
								}}
							>
								Turn the Pages
							</motion.p>

							<motion.div className="flex gap-3 justify-center pt-6">
								{[0, 1, 2].map((i) => (
									<motion.div
										key={i}
										className="h-1 bg-linear-to-r from-amber-500/30 via-amber-400/60 to-amber-500/30 rounded-full"
										animate={{
											width: [16, 32, 16],
											opacity: [0.4, 0.8, 0.4],
										}}
										transition={{
											duration: 2.5,
											repeat: Number.POSITIVE_INFINITY,
											delay: i * 0.15,
											ease: "easeInOut",
										}}
									/>
								))}
							</motion.div>
						</motion.div>

						<motion.div
							className="absolute inset-0 opacity-0"
							style={{
								background: `radial-gradient(circle at 40% 60%, ${page.themes.glow} 0%, transparent 75%)`,
							}}
							animate={{ opacity: [0.05, 0.15, 0.05] }}
							transition={{
								duration: 5,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}}
						/>
					</motion.div>

					<AnimatePresence mode="wait">
						<motion.div
							key={currentPage}
							custom={direction}
							variants={pageVariants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={pageTransition as object}
							className={`w-full md:w-1/2 rounded-2xl md:rounded-r-4xl md:rounded-l-none bg-linear-to-br ${page.color} shadow-lg overflow-y-auto md:overflow-hidden flex flex-col items-center justify-center border border-white/10 relative`}
							style={{
								transformStyle: "preserve-3d",
							}}
						>
							<motion.div
								className="absolute inset-0"
								animate={{
									opacity: [0.25, 0.5, 0.25],
								}}
								transition={{
									duration: 6,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
								}}
								style={{
									background: `radial-gradient(circle at 25% 75%, rgba(255,255,255,0.12) 0%, transparent 45%)`,
								}}
							/>

							<motion.div
								className="absolute inset-0"
								animate={{
									opacity: [0.12, 0.25, 0.12],
								}}
								transition={{
									duration: 8,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
									delay: 1.5,
								}}
								style={{
									background: `radial-gradient(circle at 75% 25%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
								}}
							/>

							<div className="relative z-10 space-y-6 md:space-y-8 px-6 md:px-16 lg:px-20 py-16 md:py-20 text-white text-center w-full flex flex-col items-center justify-center min-h-full md:h-full">
								<motion.div
									className="text-6xl md:text-7xl"
									animate={{
										scale: [1, 1.15, 0.9, 1],
										rotateZ: [0, 20, -15, 0],
										y: [0, -25, 15, 0],
									}}
									transition={{
										duration: 4.5,
										repeat: Number.POSITIVE_INFINITY,
										ease: "easeInOut",
									}}
								>
									{page.emoji}
								</motion.div>

								<motion.div
									className="space-y-3 md:space-y-4"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.1 }}
								>
									<motion.p
										className="text-xs md:text-sm font-semibold uppercase tracking-widest opacity-65"
										initial={{ opacity: 0, y: 12 }}
										animate={{ opacity: 0.65, y: 0 }}
										transition={{
											delay: 0.15,
											duration: 0.7,
										}}
									>
										{page.subtitle}
									</motion.p>

									<div className="relative">
										<motion.h2
											className="text-4xl md:text-6xl font-serif font-bold leading-tight text-balance"
											initial={{
												opacity: 0,
												scale: 0.85,
											}}
											animate={{ opacity: 1, scale: 1 }}
											transition={{
												delay: 0.2,
												duration: 0.8,
											}}
										>
											{page.title}
										</motion.h2>
										<motion.div
											className="h-1.5 bg-linear-to-r from-transparent via-white/30 to-transparent mt-3 md:mt-4 rounded-full"
											initial={{ scaleX: 0, opacity: 0 }}
											animate={{ scaleX: 1, opacity: 1 }}
											transition={{
												delay: 0.4,
												duration: 0.9,
											}}
											style={{
												transformOrigin: "center",
											}}
										/>
									</div>
								</motion.div>

								<motion.p
									className="text-lg md:text-2xl font-serif italic opacity-85 max-w-md px-3 leading-relaxed text-balance"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 0.85, y: 0 }}
									transition={{ delay: 0.3, duration: 0.7 }}
								>
									"{page.question}"
								</motion.p>

								<motion.p
									className="text-sm md:text-base opacity-75 max-w-xs leading-relaxed px-3 text-pretty"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 0.75, y: 0 }}
									transition={{ delay: 0.4, duration: 0.7 }}
								>
									{page.description}
								</motion.p>

								{currentPage !== 0 && (
									<motion.div
										initial={{ opacity: 0, scale: 0.6 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{
											delay: 0.55,
											duration: 0.6,
										}}
									>
										<Link href={page.href}>
											<motion.button
												whileHover={{
													scale: 1.1,
													boxShadow: `0 0 30px ${page.themes.glow}, inset 0 0 20px ${page.themes.glow}`,
												}}
												whileTap={{ scale: 0.92 }}
												className="px-7 md:px-10 py-3 md:py-3.5 bg-white/12 hover:bg-white/25 backdrop-blur-md border border-white/40 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 touch-none shadow-lg hover:shadow-xl"
											>
												Explore →
											</motion.button>
										</Link>
									</motion.div>
								)}
							</div>

							<motion.div
								className="absolute inset-0 pointer-events-none"
								style={{
									background: `radial-gradient(circle at 50% 50%, ${page.themes.glow} 0%, transparent 85%)`,
								}}
								animate={{
									opacity: [0.08, 0.2, 0.08],
								}}
								transition={{
									duration: 5,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
								}}
							/>
						</motion.div>
					</AnimatePresence>
				</motion.div>

				<motion.button
					onClick={() => paginate(-1)}
					whileHover={{ scale: 1.2, x: -8 }}
					whileTap={{ scale: 0.8 }}
					className="absolute left-1 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-24 z-20 p-2.5 md:p-4 rounded-full bg-amber-500/25 hover:bg-amber-500/50 text-amber-300 transition-all duration-300 border border-amber-400/50 backdrop-blur-sm shadow-lg hover:shadow-amber-500/30"
					aria-label="Previous page"
				>
					<svg
						className="w-5 h-5 md:w-7 md:h-7"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<title>Previous page</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2.5}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</motion.button>

				<motion.button
					onClick={() => paginate(1)}
					whileHover={{ scale: 1.2, x: 8 }}
					whileTap={{ scale: 0.8 }}
					className="absolute right-1 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-24 z-20 p-2.5 md:p-4 rounded-full bg-amber-500/25 hover:bg-amber-500/50 text-amber-300 transition-all duration-300 border border-amber-400/50 backdrop-blur-sm shadow-lg hover:shadow-amber-500/30"
					aria-label="Next page"
				>
					<svg
						className="w-5 h-5 md:w-7 md:h-7"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<title>Next page</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2.5}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</motion.button>
			</motion.div>

			<motion.div
				className="absolute bottom-5 md:bottom-16 left-1/2 -translate-x-1/2 flex gap-2.5 md:gap-4 z-10 flex-wrap justify-center"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8 }}
			>
				{pages.map((_, idx) => (
					<motion.button
						key={idx}
						onClick={() => {
							setDirection(idx > currentPage ? 1 : -1);
							setCurrentPage(idx);
						}}
						className={`rounded-full transition-all duration-300 ${
							idx === currentPage
								? "bg-amber-400 w-8 md:w-10 h-2.5 md:h-3 shadow-lg shadow-amber-400/60"
								: "bg-white/20 hover:bg-white/50 w-2.5 md:w-3 h-2.5 md:h-3 border border-white/30"
						}`}
						whileHover={{ scale: 1.35 }}
						whileTap={{ scale: 0.75 }}
						animate={
							idx === currentPage
								? {
										boxShadow: [
											"0 0 15px rgba(251, 191, 36, 0.4)",
											"0 0 25px rgba(251, 191, 36, 0.7)",
											"0 0 15px rgba(251, 191, 36, 0.4)",
										],
									}
								: {}
						}
						transition={{
							duration: 2,
							repeat:
								idx === currentPage
									? Number.POSITIVE_INFINITY
									: 0,
						}}
					/>
				))}
			</motion.div>

			<motion.div
				className="md:hidden absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none text-amber-300/40"
				animate={{ x: [0, -10, 0] }}
				transition={{
					duration: 1.5,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
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
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</motion.div>
		</div>
	);

	// biome-ignore-end lint/suspicious/noArrayIndexKey: random
};
