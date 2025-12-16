"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import pic11 from "@/../public/11.jpg";
import pic12 from "@/../public/12.jpg";
import pic13 from "@/../public/13.jpg";
import pic14 from "@/../public/14.jpg";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export default function FreedomPage() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<motion.main
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="min-h-screen bg-linear-to-br from-background via-background to-secondary/10"
		>
			<NavBar />

			{/* Hero */}
			<section className="relative pt-32 px-4 py-20 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-5xl">
					{isLoaded && (
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.7 }}
							className="space-y-6"
						>
							<div className="inline-block">
								<div className="h-1 w-16 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-full"></div>
							</div>
							<h1 className="text-5xl sm:text-7xl font-serif font-bold leading-tight">
								<span className="bg-linear-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
									Freedom
								</span>
							</h1>
						</motion.div>
					)}
				</div>
			</section>

			<section className="relative px-4 py-12 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-5xl space-y-16">
					{/* Introduction */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-8"
					>
						<h2 className="text-4xl font-serif font-bold text-foreground">
							INTRODUCTION
						</h2>
						<div className="space-y-6 text-lg text-foreground/90 leading-[1.8]">
							<p className="text-3xl font-bold bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
								WTF IS A KILOMETER??!?!?!?!{" "}
								<span className="text-black">
									🔥🔥🔥💣💣🦅🦅🦅🦅
								</span>
								IN THE LAND OF THE FREEEEEEEEEEEEEEEEE
							</p>
							<p>
								In a world primarily governed by numerous
								transcendental factors of human society, where
								does freedom lie? This is one of the key parts
								of the analysis of freedom, what it means, and
								its implications in everyone's day-to-day life.
							</p>
							<p>
								The questions below provide some scenarios to
								ponder when thinking about this question, with
								some answers to serve as (hopefully) insights.
							</p>
							<blockquote className="bg-emerald-500/5 border-l-4 border-emerald-500 pl-8 pr-6 py-6 my-8 rounded-r-lg italic text-foreground/80 text-xl">
								"To know how to free oneself is nothing; the
								arduous thing is to know what to do with one's
								freedom."
								<footer className="text-base mt-3 not-italic font-semibold text-emerald-500">
									— André Gide
								</footer>
							</blockquote>
						</div>
					</motion.div>

					{/* Question A */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6 border-l-4 border-emerald-500 pl-8 py-4"
					>
						<h3 className="text-3xl font-serif font-bold text-foreground">
							a. Doing Evil Knowingly?
						</h3>
						<p className="font-semibold text-foreground text-xl leading-relaxed">
							Does anyone choose to do evil knowingly? Or are our
							choices made because we believe they are good for
							us? Explain your answer in relation to freedom and
							determinism.
						</p>

						<div className="space-y-5 text-lg text-foreground/90 leading-[1.8]">
							<p>
								Hello po Ma'am Zosa, have you watched Black
								Mirror? AHHAHAHA feel ko gustong gusto mo yung
								show na yan, so I will be using an episode from
								Black Mirror to explain my answer!
							</p>
							<p>
								Bandersnatch, the special interactive episode of
								Netflix's Black Mirror is a prime source of
								discourse for free will and determinism.
								Bandersnatch basically follows a plot of a young
								man struggling with mental health as he tries to
								keep up with his game design career, but the
								plot twist? You control the actions of the main
								character.
							</p>
							<p>
								Instead of the main character entertaining you
								with his decisions, you are able to make
								decisions for him. Be it the cereal he wants or
								whether or not he does drugs– the decisions that
								you make for him have an impact on how the story
								ends. Some decisions that you make can end up
								having consequences, or it could reward you. You
								could end up with a successful career, or
								someone ends up dying. For some of these
								decisions, it's very clear which one is good and
								which one is bad. So if you choose the bad one,
								edi you're doing evil knowingly, masama kang tao
								teh. Minsan nakakapressure may time limit eh
								(capricious freedom XD)
							</p>
							<div className="my-8">
								<Image
									src={pic11}
									alt=""
									className="object-cover rounded-2xl shadow-2xl"
								/>
							</div>
							<p>
								However, some decisions are not clear, you may
								not be able to see right away that this small
								decision will lead to something catastrophic.
								For example, simply choosing to board the train
								may cause the death of the main character. Paano
								ko ba yun malaman ?!?! So edi di ko sinadya!
								masama ba akong tao diyan?! In the end,
								intention talaga ang determining factor on
								wheteh
							</p>
							<div className="my-8">
								<Image
									src={pic12}
									alt=""
									className="object-cover rounded-2xl shadow-2xl"
								/>
							</div>
							<p>
								But midway through the episode, the main
								character starts to realize that he isn't in
								control and starts to become sentient. This
								shows na may emotional freedom siya, because
								naging anxious siya because of that! Pero
								anyway, even if he has the "illusion" of choice,
								he actually doesn't. WE are the ones controlling
								him. This is where determinism enters the chat.
								Everything is predetermined na. Pero not by us.
								We don't have control, and in this episode,
								determinism talaga ang winner dito. No matter
								what choice we make, we don't actually have free
								will, because the possibilities are limited to
								what is predetermined by the programmers of this
								episode– OA, free pa rin tayo! Sabi kasi ni Jean
								Paul Sartre "Freedom is what you do with what's
								been given to you." so tayo ang may mga choices,
								so meaning may freedom kita! Si main character
								wala lol
							</p>
							<div className="my-8">
								<Image
									src={pic13}
									alt=""
									className="object-cover rounded-2xl shadow-2xl"
								/>
							</div>
							<p>
								So! Determinism, free will, chu chu kineme wala
								tayong control bla bla bla, pero sa totoo lang,
								may pwede tayong gawin: wag na natin isipin ng
								masyado. HAHAHHA MAY FREE WILL NAMAN TAYO
								MAGPAHINGA NA TAYO PLS SO Hayan na ang end ng
								ating movie review, hope you enjoyed, like and
								subscribe para sa ating next episode! Byee ^0^
							</p>
						</div>
					</motion.div>

					{/* Question B */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6 border-l-4 border-emerald-500 pl-8 py-4"
					>
						<h3 className="text-3xl font-serif font-bold text-foreground">
							b. Religious Beliefs and Accountability
						</h3>
						<p className="font-semibold text-foreground text-xl leading-relaxed">
							Assume that you believed your whole life, because of
							a religion that you subscribe to, that same-sex
							relations are immoral and should not be acted upon.
							One of your friends suddenly comes out. You then
							tell that friend that they should not act on their
							desires. Your friend cries and breaks down. Are you
							truly accountable for your friend's reaction when
							you thought same-sex relations were immoral your
							whole life? If yes, how? If not, why? Relate your
							answer to freedom and determinism.
						</p>
						<div className="space-y-5 text-lg text-foreground/90 leading-[1.8] bg-emerald-500/5 p-8 rounded-xl">
							<p className="font-mono">
								POV: One of your friends suddenly comes out...
							</p>
							<p className="font-mono">Friend: *crying*</p>
							<p className="font-mono">
								Friend: ba't kasi ganun sagot mo HUHUHU
								*umiiyak*
							</p>
							<p className="font-mono">
								Y/N: hindi naman mali sagot ko, [insert friend
								name here]
							</p>
							<p className="font-mono">
								Friend: HINDI TAMA NA KUNIN MO YUNG HOLY WATER
								PARA "ILABAS ANG MGA DEMONYO SA PAGIGING BAKLA
								KO" ????????
							</p>
							<p className="font-mono">
								Y/N: Ih, kasi bawal nga sa church…
							</p>
							<p className="font-mono">
								Friend: Pero napakabastos naman ng sagot mo!
							</p>
							<p className="font-mono">
								Friend: Hindi ka pa hihingi ng tawad?
							</p>
							<p className="font-mono">
								Y/N: dapat accountable pa ba ako diyan… ? Akala
								ko kasi bawal talaga 'yan teh huhu. That's how I
								was raised eh, all my upbringing, values, and
								beliefs made it predetermined for me to do that!
							</p>
							<p className="font-mono">
								Friend: Accountable ka pa rin dapat! You had the
								freedom to decide how to say it, what to say it,
								and what to do? Sino ba magiging masaya na basa
								na buhok ko sa holy water??
							</p>
							<p className="font-mono">
								Y/N: Eh, pasensya na [insert friend name here],
								good naman kasi intentions ko, hindi ko gusto na
								nasa impiyerno kasi mahal kita…
							</p>
							<p className="font-mono">
								Friend: Aww, gets naman friend, mahal din kita.
							</p>
							<p className="font-mono">
								Friend: Gets din naman na ganyan upbringing mo
								teh, pero dapat may accountability ka pa rin sa
								paghandle mo sa mga beliefs na yan.
							</p>
							<p className="font-mono">
								Y/N: Ahay, i'll try to be manage myself better
								teh!
							</p>
							<p className="font-mono">
								Y/N: Thank you for being such a good friend.
							</p>
							<p className="font-mono">Friend: Yay!</p>
							<p className="font-mono">Y/N: Yay!</p>
						</div>
					</motion.div>

					{/* Question C */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6 border-l-4 border-emerald-500 pl-8 py-4"
					>
						<h3 className="text-3xl font-serif font-bold text-foreground">
							c. Addressing Free Will vs Determinism
						</h3>
						<p className="font-semibold text-foreground text-xl leading-relaxed">
							What is your way of addressing the debate between
							free will and determinism? Explain your answer.
						</p>
						<div className="space-y-5 text-lg text-foreground/90 leading-[1.8]">
							<p>
								Ugh, palagi nalang nagiging kalaban si Free Will
								at determinism, pero sa totoo lang? Mag-asawa
								sila. Nag-destination wedding sila.
								Nag-honeymoon pa nga. At may anak na sila! Let
								me introduce you to their eldest child:{" "}
								<span className="font-bold text-emerald-500 text-xl">
									Compatibilism
								</span>
								. (Nickname niya lang yan, yung full government
								name niya ay Soft Determinism, ginamit lang
								kapag galit si Free Will sakanya.)
							</p>
							<p>
								Si Compatibilism, kamukha niya yung tatay niya
								(Determinism) pero may puso siya gaya ng mama
								niya (Free Will). Sabi kasi nila masyadong
								stricy yung tatay niya, buti nalang di siya
								gumaya sakanya. Yung tatay niya kasi palagi
								niyang sinasabi "Okay nak, kunin ko yung iPad
								mo, pero dahil caused na lahat ng events, di mo
								ako masisi." o parang "Ih, okay lang naman na
								racist kaibigan mo, ganyan lang talaga sa lugar
								nila at sa upbringing niya." which is medyo….
								questionable parenting tactics. Tapos yung nanay
								naman niya, medyo… magulo rin pero her heart is
								in the right place! Minsan sasabihin niya kay
								compatibilism na "Nak gusto mo magpa-Enchanted
								Kingdom?" pero may klase siya sa araw niya.
								Napaka-random niya minsan.
							</p>
							<p>
								Kaya si compatibilism, he's a perfect anak.
								Parang he learned from his parents mistakes but
								also took on some of their good qualities. Kung
								may gusto siya, gawin niya, pero within reason.
								Pero if ever may ginawa siyang mali, he's
								willing to take responsibility and learn from it
								naman. May mga bagay naman na outside of his
								control, pero kayang kaya pa rin.
							</p>
							<p>
								Meron din kulit na Tito si compatibilism (si
								indeterminism), at may mga cousins pa yan
								(rational freedom, political freedom, social
								freedom, nakalimutan ko na ung iba andami nila
								abroad pa ung isa) pero hindi na natin sila
								ididiscuss ngayon, sa next nalang na family
								reunion…so wag na wag mo isipin na magkalaban si
								free will at determinism! Ang cute nila kaya!
							</p>
						</div>
					</motion.div>

					{/* Filipino Context */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6 bg-emerald-500/5 p-10 rounded-2xl border-2 border-emerald-500/20 shadow-lg"
					>
						<h3 className="text-3xl font-serif font-bold text-emerald-500">
							d. Filipino Views on Freedom
						</h3>
						<p className="font-semibold text-foreground text-xl leading-relaxed">
							Do you think Filipinos side more with
							libertarianism, determinism, or some other view on
							freedom mentioned in this topic? Explain your
							answer. Cite specific local sources or examples to
							back up your claim.
						</p>
						<div className="space-y-5 text-lg text-foreground/90 leading-[1.8]">
							<p className="font-bold text-xl">
								What do Filipinos and Gothamites have in common?
								They both depend on Batman.
							</p>
							<p>
								While for Gothamites this may be taken
								literally, for Filipinos it's our hilarious yet
								deep cultural confession: "Bahala na si
								Batman/Diyos/Boss/O kaya si Lord na bahala sa
								deadline mo." This iconic line is not a shrug of
								surrender, but an accidental philosophical
								masterpiece that aligns perfectly with
								Compatibilism (Soft Determinism). We acknowledge
								na may Determinism—walangya, may structural
								constraints (widespread poverty, inflation,
								'yung traffic sa EDSA, si corrupt politician)—na
								naglilimit sa ating buhay.
							</p>
							<p>
								But here's the plot twist: We still have Free
								Will—our agency to choose how to respond. As one
								study explains, "bahala na" is the Pinoy way of
								saying, "I accept the external forces, pero may
								diskarte pa rin ako" (Lopez, 2025). This is why
								a Filipino will accept God's providence, then
								still pray for a very specific lottery number
								(Agency within Determinism!). Or, in economics,
								we recognize global crisis, pero sige lang, side
								hustle is life! Basta't may choice na kumayod,
								go lang. At sa pulitika, kahit alam nating
								parang teleserye na laging nandiyan ang masamang
								kontrabida (corruption), we still choose to
								stand in line, vote, or even mag-"Rally na
								tayo!" This proves that "bahala na" is not
								passive resignation, but a culturally ingrained
								Soft Determinism—a practical harmony between
								accepting the chaos of the universe and still
								making woke choices. In the end, ang freedom
								natin ay nasa desisyon: Sige, bahala na si Lord,
								pero mag-uumpisa na akong mag-diet bukas.
								Promise!
							</p>
							<div className="my-8">
								<Image
									src={pic14}
									alt=""
									className="object-cover rounded-2xl shadow-2xl"
								/>
							</div>
							<div className="text-sm mt-8 space-y-2 text-foreground/70">
								<p className="font-semibold text-foreground">
									References:
								</p>
								<p>
									Casuga, Shelly M., Eric B. Vogel, and Alison
									Pope-Rhodius. "A Qualitative Content
									Analysis of the Bahala Na Attitude in
									Filipino Elite Athletes." International
									Journal of Sport Psychology, vol. 48, no. 5,
									2017, pp. 419–434.
								</p>
								<p>
									Lopez, Bobby. "Bahala Na Si Bathala: Isang
									Pagsusuri Ng Mga Nabuong Diskurso at
									Pagpapakahulugan Sa Konseptong 'Bahala Na.'"
									International Journal on Culture History and
									Religion, vol. 7, no. 1, June 2025, pp.
									357–72.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Navigation */}
			<section className="relative px-4 py-20 sm:px-6 lg:px-8 border-t border-primary/10">
				<div className="mx-auto max-w-5xl">
					<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
						<Link href="/self" className="group">
							<motion.div
								whileHover={{ scale: 1.02, y: -2 }}
								className="p-6 md:p-8 rounded-xl border-2 border-primary/30 hover:border-accent/50 transition-all hover:bg-accent/10 shadow-md hover:shadow-xl"
							>
								<p className="text-sm md:text-base text-foreground/60 mb-2">
									← Previous
								</p>
								<p className="font-serif font-bold text-lg md:text-xl">
									The Self
								</p>
							</motion.div>
						</Link>
						<Link href="/" className="group md:col-start-3">
							<motion.div
								whileHover={{ scale: 1.02, y: -2 }}
								className="p-6 md:p-8 rounded-xl border-2 border-primary/30 hover:border-accent/50 transition-all hover:bg-accent/10 shadow-md hover:shadow-xl"
							>
								<p className="text-sm md:text-base text-foreground/60 mb-2">
									Home
								</p>
								<p className="font-serif font-bold text-lg md:text-xl">
									↑
								</p>
							</motion.div>
						</Link>
						<Link
							href="/moral-philosophy"
							className="group col-start-2 md:col-start-auto"
						>
							<motion.div
								whileHover={{ scale: 1.02, y: -2 }}
								className="p-6 md:p-8 rounded-xl border-2 border-primary/30 hover:border-accent/50 transition-all hover:bg-accent/10 shadow-md hover:shadow-xl"
							>
								<p className="text-sm md:text-base text-foreground/60 mb-2">
									Next
								</p>
								<p className="font-serif font-bold text-lg md:text-xl">
									Morality →
								</p>
							</motion.div>
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</motion.main>
	);
}
