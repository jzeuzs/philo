"use client";

import { type FC, useEffect, useRef } from "react";

export const Orbs: FC<Record<string, never>> = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		interface Orb {
			x: number;
			y: number;
			radius: number;
			vx: number;
			vy: number;
			opacity: number;
		}

		const orbs: Orb[] = [];

		for (let i = 0; i < 5; i++) {
			orbs.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				radius: Math.random() * 100 + 50,
				vx: (Math.random() - 0.5) * 0.5,
				vy: (Math.random() - 0.5) * 0.5,
				opacity: Math.random() * 0.1 + 0.02,
			});
		}

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			orbs.forEach((orb) => {
				orb.x += orb.vx;
				orb.y += orb.vy;

				if (orb.x - orb.radius < 0 || orb.x + orb.radius > canvas.width)
					orb.vx *= -1;
				if (
					orb.y - orb.radius < 0 ||
					orb.y + orb.radius > canvas.height
				)
					orb.vy *= -1;

				const gradient = ctx.createRadialGradient(
					orb.x,
					orb.y,
					0,
					orb.x,
					orb.y,
					orb.radius,
				);
				gradient.addColorStop(
					0,
					`rgba(212, 175, 55, ${orb.opacity * 0.8})`,
				);
				gradient.addColorStop(
					0.5,
					`rgba(212, 175, 55, ${orb.opacity * 0.3})`,
				);
				gradient.addColorStop(1, `rgba(212, 175, 55, 0)`);

				ctx.fillStyle = gradient;
				ctx.beginPath();
				ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
				ctx.fill();
			});

			requestAnimationFrame(animate);
		};

		animate();

		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50"
		/>
	);
};
