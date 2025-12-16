import type { FC } from "react";

export const Footer: FC = () => (
	<footer className="border-t border-primary/10 bg-background/80 backdrop-blur-sm">
		<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
			<div className="flex flex-col items-center justify-center gap-2 text-center text-sm text-foreground/60">
				<p>website by Jezzu Morrisen C. Quimosing</p>
				<div className="flex items-center gap-2 text-xs">
					<span>Meaning of Life Group</span>
					<span className="text-foreground/40">|</span>
					<span>
						Dennis Sta. Catalina, Enriele De Guzman, Jerome Dimaano,
						Jezzu Quimosing, Joaquin Parojinog, Kalel David, Shana
						Tiampong
					</span>
				</div>
			</div>
		</div>
	</footer>
);
