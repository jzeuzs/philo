"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import pic15 from "@/../public/15.jpg";
import pic16 from "@/../public/16.jpg";
import pic17 from "@/../public/17.jpg";
import pic18 from "@/../public/18.png";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export default function MoralPhilosophyPage() {
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
								<div className="h-1 w-16 bg-linear-to-r from-rose-500 to-pink-500 rounded-full"></div>
							</div>
							<h1 className="text-5xl sm:text-7xl font-serif font-bold leading-tight">
								<span className="bg-linear-to-r from-rose-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
									Morality
								</span>
							</h1>
						</motion.div>
					)}
				</div>
			</section>

			{/* Content Sections */}
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
							<p className="text-3xl font-bold bg-linear-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
								+10 AKO SA LANGITTTTT BOIII
							</p>
							<p>
								Morality and its many subjective perceptions is
								one of the biggest parts of what it means to be
								human. In a very profound way, it is one of the
								fundamental forces of determining your character
								and the way you interact with not just the
								people around you, but also the world as you
								know it (see: epistemology shameless plug LOL)
							</p>
							<p>
								To help you think about the good life, some
								questions and answers are provided below.
							</p>
							<blockquote className="bg-rose-500/5 border-l-4 border-rose-500 pl-8 pr-6 py-6 my-8 rounded-r-lg italic text-foreground/80 text-xl">
								"Even though you can't expect to defeat the
								absurdity of the world, you must make the
								attempt. That's morality, that's religion,
								that's art, that's life."
								<footer className="text-base mt-3 not-italic font-semibold text-rose-500">
									— Phil Ochs
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
						className="space-y-6 border-l-4 border-rose-500 pl-8 py-4"
					>
						<h3 className="text-3xl font-serif font-bold text-foreground">
							a. What Defines a Good Life?
						</h3>
						<p className="font-semibold text-foreground text-xl leading-relaxed">
							What defines a good life more – what you do or who
							you are? Explain your answer. You may refer to the
							various ethical theories.
						</p>
						<div className="space-y-5 text-lg text-foreground/90 leading-[1.8]">
							<p>
								Bro tinatanong pa ba yan? What you do defines
								who you are, parang you are what you eat lang
								yan (fallacy?) ANYWAY my point still stands,
								what you do is what defines a good life more,
								under one condition— di mo yan ginagawa lang
								para magpasikat, maging performative, ew kadiri
								yuck mga performative ang aasim niyo charot.
								Pero ayon, a good life, aligned with the life of
								virtue is a life where you do things
								consistently na, and these actions are what
								defines YOU. Huhu real talk lang ang tamaan
								matamaan pake ko sa inyo (wow egoism?), don't
								claim that you are like this nor you have a good
								life if the things you do are just one-time
								things and not incorporated sa routines mo. Huhu
								are you even having the totoong good life if
								yung habit mo is pagpapasikat by doing tons of
								things na isang beses mo lang gagawin? Good life
								na sa'yo yung pagiging sikat sa mga one-time
								shit na ginagawa mo? So lame HAHAHAHAHAHAH
								ayus-ayusin mo buhay mo tol.
							</p>
							<div className="my-8">
								<Image
									src={pic15}
									alt=""
									className="object-cover rounded-2xl shadow-2xl"
								/>
							</div>
						</div>
					</motion.div>

					{/* Question B */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6 border-l-4 border-rose-500 pl-8 py-4"
					>
						<h3 className="text-3xl font-serif font-bold text-foreground">
							b. Martial Law Dilemma
						</h3>
						<p className="font-semibold text-foreground text-xl leading-relaxed">
							Take this case study: it is Martial Law in the
							Philippines and you have a soldier friend who
							entrusted a weapon to you for safe keeping. You
							promised to keep it and give it only to your soldier
							friend when asked. You also happen to have an
							activist roommate in the dorm. Recently, your
							soldier friend found out about your roommate and
							demands you give back the weapon. Will you give it
							back to your friend as promised or break your
							promise? Why or why not? You may refer to the
							various ethical theories.
						</p>
						<div className="space-y-5 text-lg text-foreground/90 leading-[1.8]">
							<p>
								Bro its martial law, and alam naman natin yung
								mga kademonyohang nagaganap there, and it's
								SUPER bullshit, like maging aktibista ka (which,
								mind you, is something that they do for the
								right, para maayos bansa natin), oa agad
								punishment?!?!?! O ngayon apply mo yon sa
								situation na to. Bro that gun, that fucking gun,
								take it away from a soldier during martial law
								and it can save lives and maybe help save the
								Philippines, simple as that.
							</p>
							<p>
								Actually joke lang huhu, given the severity of
								the situation, do you really think hiding one
								gun from the picture will make things better?
								Huhu I feel like di gagana rito yung pagiging
								martir dito ng isang tao, and I would even argue
								that it is NOT utilitarianism, yung tipong
								itatago ko yung baril para sa kapakanan ng
								marami? Para mabawasan yung mga mamamatay dahil
								nabawasan sila ng isang baril? Heck, who would
								know ano pwede nila gawin? What if pag-initan ka
								nila tas yung roommate mo tapos yung buong dorm
								dahil doon sa ginawa mo? O deba, lalo lang
								naparami yung pwedeng mamatay sa situation na
								'yon kesa sa maliligtas. Isip isip din bro, look
								at the bigger picture nga ika nila, kasi
								especially in situations like this, sacrificing
								one thing for the "good" of many will not always
								go that way talaga ahuhuhu gising na tayo sa
								katotohanan bro, laging may plot twist ang
								buhay, hindi laging magaganda nangyayari 🙁
							</p>
							<p>
								In this scenario hindi talaga pwede eh huhu, it
								is almost certain that breaking your promise to
								your soldier friend will just make things worse.
								Kaya ayonnn haha,{" "}
								<span className="font-bold text-rose-500 text-xl">
									deontology truther
								</span>{" "}
								muna ako at iki-keep ko ang promise ko sa
								soldier friend ko ahahaha. Sakin lang ha, don't
								act purely out of heart, wag ka magpakamartir
								dahil lang sinasabi ng puso mo na "ah,
								makakaligtas ka ng maraming tao." NO! Kaya nga
								may puso't utak tayo deba? They're meant to be
								working together huhuhu so PLEASEEEEE wag ka
								magpakamartir nang bulag, maging matalino rin,
								kasi not everything that looks promising at
								first will give out promising results. Same lang
								din yan sa utilitarianism actually, need din
								gamitan ng utak para mas sure natin na yung
								i-a-act natin is for the greatest good talaga
								for the greatest number of people.
							</p>
							<p className="font-semibold text-xl">
								Dedma sa bashers btw, i'm just saying my opinion
								based on my critical thinking, sana maging
								critical din kayo #peace #respectmyonion
							</p>
							<div className="my-8">
								<Image
									src={pic16}
									alt=""
									className="object-cover rounded-2xl shadow-2xl"
								/>
							</div>
						</div>
					</motion.div>

					{/* Question C */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6 border-l-4 border-rose-500 pl-8 py-4"
					>
						<h3 className="text-3xl font-serif font-bold text-foreground">
							c. Need to Argue About Morality?
						</h3>
						<p className="font-semibold text-foreground text-xl leading-relaxed">
							If everyone has their own definitions of right and
							wrong, is there still a need to argue about
							morality? Explain your answer.
						</p>
						<div className="space-y-5 text-lg text-foreground/90 leading-[1.8]">
							<p>
								Bakla, morality, branch of philo. Ano ginagawa
								sa philo? You defend what you believe in and
								refute those that attack your beliefs,
								understand others' beliefs din etc. etc.
								basically andun yung act of arguing ang
								understanding and even reinforcing. The same
								applies to our morality. I believe the act of
								doing philosophy, which can also be applied on
								the debate of morality, is necessary for a
								better society ganern. Lahat naman tayo for sure
								want ng progress right? Deba???? Well, kung sa
								tingin niyo di natin need ng arguments about
								these, then congrats, walang kwenta yang mga
								pinaniniwalaan mo.
							</p>
							<p className="font-semibold text-xl">
								#dedmasabashers #suntukansalabas
							</p>
							<div className="my-8">
								<Image
									src={pic17}
									alt=""
									className="object-cover rounded-2xl shadow-2xl"
								/>
							</div>
						</div>
					</motion.div>

					{/* Filipino Context */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6 bg-rose-500/5 p-10 rounded-2xl border-2 border-rose-500/20 shadow-lg"
					>
						<h3 className="text-3xl font-serif font-bold text-rose-500">
							d. Filipino Moral Theory
						</h3>
						<p className="font-semibold text-foreground text-xl leading-relaxed">
							Which moral theory do you think Filipinos subscribe
							under? Should that be the case? Cite specific local
							sources or examples to back up your claim.
						</p>
						<div className="space-y-5 text-lg text-foreground/90 leading-[1.8]">
							<p className="font-mono text-sm">
								#UPSilimansiOwnerNgFreedomWall67
							</p>
							<p>
								Ako lang ba yung taong hindi makagets sa kung
								pano magmahal ung ibang tao dito sa Pilipinas?
								Taena, hindi ata nila alam san sila lulugar e.
								Puro sila avoidant anxious kineso amp, para
								naman silang virtue ethics nyan??? Isipin mo
								diba may virtue, tapos may pagkukulang/saks
								lang/OA sa sobra. Tapos dito naman may
								quarrelsome, may friendly, tas may sobrang
								sipsip 🤣🤣🤣 maka happy life sila sa iba eh
								hindi nga nila kaya maghappy life sa sarili
								juice ko!!
							</p>
							<p>
								Tas diba may platonic kineme ng pagmamahal, aray
								kohh sahh kahit sa simpleng pakikipagkapwa
								parang nawawalan na rin ako ng pag-asa 😭 either
								ang sama ng ugali nila, or (sana mas mangyari
								to) mabuti silang kaibigan, pero meron din
								kasing mga sobrang people pleaser 😭🙏 hindi
								naman masama eon pero gurll gayahin nyo nmn ung
								I gotta put me first na audio please 😨 maawa ka
								nmn sa sarili m,,, 💎
							</p>
							<div className="my-8">
								<Image
									src={pic18}
									alt=""
									className="object-cover rounded-2xl shadow-2xl"
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Navigation */}
			<section className="relative px-4 py-20 sm:px-6 lg:px-8 border-t border-primary/10">
				<div className="mx-auto max-w-5xl">
					<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
						<Link href="/freedom" className="group">
							<motion.div
								whileHover={{ scale: 1.02, y: -2 }}
								className="p-6 md:p-8 rounded-xl border-2 border-primary/30 hover:border-accent/50 transition-all hover:bg-accent/10 shadow-md hover:shadow-xl"
							>
								<p className="text-sm md:text-base text-foreground/60 mb-2">
									← Previous
								</p>
								<p className="font-serif font-bold text-lg md:text-xl">
									Freedom
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
							href="/epistemology"
							className="group col-start-2 md:col-start-auto"
						>
							<motion.div
								whileHover={{ scale: 1.02, y: -2 }}
								className="p-6 md:p-8 rounded-xl border-2 border-primary/30 hover:border-accent/50 transition-all hover:bg-accent/10 shadow-md hover:shadow-xl"
							>
								<p className="text-sm md:text-base text-foreground/60 mb-2">
									Back to Start
								</p>
								<p className="font-serif font-bold text-lg md:text-xl">
									Knowledge →
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
