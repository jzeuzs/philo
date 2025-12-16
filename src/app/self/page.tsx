"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import pic7 from "@/../public/7.png";
import pic8 from "@/../public/8.png";
import pic9 from "@/../public/9.png";
import pic10 from "@/../public/10.jpg";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export default function SelfPage() {
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
								<div className="h-1 w-16 bg-linear-to-r from-purple-500 to-blue-500 rounded-full"></div>
							</div>
							<h1 className="text-5xl sm:text-7xl font-serif font-bold leading-tight">
								<span className="bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
									The Self
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

						<div className="my-8">
							<Image
								src={pic7}
								alt=""
								className="object-cover rounded-2xl shadow-2xl"
							/>
						</div>

						<div className="space-y-6 text-lg text-foreground/90 leading-[1.8]">
							<p className="text-2xl font-semibold text-foreground">
								Wait a minute, who am I?
							</p>
							<p>
								What is the "Self"? If you can define it, can
								you define it objectively? Can you critique it
								in the same way? Can you then apply this same
								approach to other "selves" of other people,
								provided you know what they are?
							</p>
							<p>
								These are some questions brought about by the
								philosophical concept of the self. Through the
								study of this area of philosophy, we work
								towards understanding the consciousness of the
								human person, guidance for ethical
								decision-making, and tools to navigate various
								existential questions (while avoiding
								existential crises!) by analyzing what
								constitutes identity, how the 'I' endures over
								time, and what connects our mental states to our
								physical form.
							</p>
							<p>
								Thus, the questions below (with a little/lotta
								bit of humor…) and the answers provided to them
								aim to help this cause by providing practical
								situations of how identity can be perceived, and
								what we can do to further the objectives of
								personal philosophy and the ultimate
								(ultimate?!) definition of the Self.
							</p>
							<blockquote className="bg-blue-500/5 border-l-4 border-blue-500 pl-8 pr-6 py-6 my-8 rounded-r-lg italic text-foreground/80 text-xl">
								"Knowing yourself is the beginning of all
								wisdom."
								<footer className="text-base mt-3 not-italic font-semibold text-blue-500">
									— Aristotle
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
						className="space-y-6 border-l-4 border-blue-500 pl-8 py-4"
					>
						<h3 className="text-3xl font-serif font-bold text-foreground">
							The "Babe" Phone Case Study
						</h3>
						<p className="font-semibold text-foreground text-xl leading-relaxed">
							Take this case study: You named your phone, "Babe".
							Babe has been beaten down drastically over the years
							to the point that you had to replace all of Babe's
							parts – the screen, the buttons, the casing, etc.
							Even your sim card had to be replaced. After all
							these changes, is this still your "Babe"?
						</p>

						<div className="space-y-5 text-lg text-foreground/90 leading-[1.8]">
							<div className="my-8">
								<Image
									src={pic8}
									alt=""
									className="object-cover rounded-2xl shadow-2xl"
								/>
							</div>
							<p>
								<span className="font-semibold text-blue-500">
									Answer:
								</span>{" "}
								I would like to laban that this will not be my
								original "Babe" anymore. Individuals have
								objects and bagay-bagay in their lives that are
								significant to them, essentially associating
								memories and experiences (relapse talaga 'yan)
								with that object. In accordance with John
								Locke's Memory Theory, the self is defined
								through the memories it retains. If I were to
								palit-palit all the parts of my "Babe" with new
								ones, all the alaala of each fragment of the
								original babe would be tanggal-tanggal na and
								changed. Furthermore, if I were to replace all
								parts of "Babe" with parts of the new iPhone 17
								Pro Max 256GB Fully Paid, and infront of me is
								"Babe" and another iPhone 17, how will I be able
								to differentiate the two? Ang mga tao na ito
								tends to memorize or contextualize people
								according to the (1) memories attached to them
								and their (2) physical appearance. That's why
								when we look at someone's childhood photos and
								they look alike, we can immediately say "uy,
								cute mo pa dito ah". When we apply this same
								thinking to "Babe", we personalize the phone by
								its (1) physical attributes (case, size of
								screen, type of charger, processor etc.) and (2)
								memories (scratches, cracks on the screen, when
								it was bought, etc).
							</p>
						</div>
					</motion.div>

					{/* Question B */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6 border-l-4 border-blue-500 pl-8 py-4"
					>
						<h3 className="text-3xl font-serif font-bold text-foreground">
							Mind Over Matter?
						</h3>
						<p className="font-semibold text-foreground text-xl leading-relaxed">
							If the mind is non-physical and the body is
							physical, how does the phrase "mind over matter"
							make sense? Or does "matter over mind" make more
							sense? Explain your answer.
						</p>
						<div className="space-y-5 text-lg text-foreground/90 leading-[1.8]">
							<p>
								<span className="font-semibold text-blue-500">
									Answer:
								</span>{" "}
								In the case (IN THE CASE ⁉️) of mind and body, I
								would like to argue that "mind over matter"
								makes a lot more kwenta compared to the latter.
								To contextualize the phrase, "mind over matter",
								it describes the kakayahan of the utak to
								control the galaw of the body. I would like to
								laban that partly, both broskis Descartes and
								Leibniz's solution for the mind-body problem
								work hand-in-hand in explaining the phrase.
								Descartes argues that there is an interaction
								between the mind and body, but is medyo ewan of
								what mechanism allows it. I would like to take
								the standpoint (STANDDDPOINTTT ⁉️) that this
								mechanism is due to the pre-established harmony
								that God has set for our mind and body
								(Leibniz's). This is under two major points: (1)
								Is that the thoughts (mind) and actions (body)
								that consists us is already pre-determined by
								God (Leibniz), but we are given the illusion of
								free will that makes us think that both have an
								interaction (Descartes). This can be separated
								into two leveled (oa talaga) views: (1) God
								making our lives pre-determined and (2) our
								earthly view of free will.
							</p>
							<div className="my-8">
								<Image
									src={pic9}
									alt=""
									className="object-cover rounded-2xl shadow-2xl"
								/>
							</div>
							<p>
								For example, God already pre-determined the
								action of us being hungry (mind) and eating at
								this hour (body). But in the perspective of
								humans, both the mind and the body interact by
								the stomach growling (body's response) and the
								thought of eating (mind's response).
							</p>
						</div>
					</motion.div>

					{/* Question C */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6 border-l-4 border-blue-500 pl-8 py-4"
					>
						<h3 className="text-3xl font-serif font-bold text-foreground">
							Which Theory Do You Identify With?
						</h3>
						<p className="font-semibold text-foreground text-xl leading-relaxed">
							Which theory of the self do you most identify with?
							Explain your answer.
						</p>
						<div className="space-y-5 text-lg text-foreground/90 leading-[1.8]">
							<p>
								<span className="font-semibold text-blue-500">
									Answer:
								</span>{" "}
								Among the given theories of the self, I
								personally identify best with Hesse's Onion
								Model (gutom n tlga sha). Growing up, I would
								often ask myself, "who am I really?" and ang
								sinasagot ko, ako si Dennis (joke). Am I this
								outgoing and extroverted person who can
								socialize with everyone? Am I this leader-like
								person who is mostly serious and focused on
								their goals? Am I this spontaneous and
								unstructured person who is mostly goofy and
								happy? Some of these "selves" contradict one
								another, and oftentimes I find myself choosing
								one self over the other. However, that does not
								remove the fact that these selves exist, and
								these still show up given the right
								circumstances. For example, I am generally a
								strict person when it comes to my time, but when
								my family asks for my time, I'm willing to break
								my schedule for any spontaneous events.
								Furthermore, I'm often a jolly and outgoing
								person, but in certain situations (even when I'm
								out with my friends), I'd also enjoy my personal
								company and not lead the conversations (ambivert
								yarn). With Hesse's Onion model, there is no
								true self. Self consists of multiple layers that
								are constantly changing and transforming on a
								daily basis, depending on our experiences. The
								emotions, actions, and interactions of other
								people influences the layers of self, inevitably
								changing the "self" in the process.
							</p>
						</div>
					</motion.div>

					{/* Filipino Context */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6 bg-blue-500/5 p-10 rounded-2xl border-2 border-blue-500/20 shadow-lg"
					>
						<h3 className="text-3xl font-serif font-bold text-blue-500">
							Filipino Outlook on the Self
						</h3>
						<p className="font-semibold text-foreground text-xl leading-relaxed">
							Given the many theories of the self, which do you
							think most closely resembles a Filipino outlook on
							the self? Or do you think none of those theories
							satisfy the criteria for how we view ourselves as
							Filipinos?
						</p>
						<div className="space-y-5 text-lg text-foreground/90 leading-[1.8]">
							<p>
								Tbh ang gulo nitong sagot, kasing gulo ng
								nagpauso netong philosophy neto ems. Pero ayun,
								feel ko nasa Self as Choice tayo ni Sartres ba
								un? Parang grade ko lang sa Philo hahahaha,,, n
								e wayz sabi nya kasi we r only what we make of
								ourselves, and tama naman na dito un sa
								Pilipinas e. Tignan mo lng ung political kineme
								ngaun. Puro sya choice ng "ah magiging
								bootlicker ako neto" (shoutout sa mga dee dee
								ess jn, PI 100 nyo po) na, kahit may literal na
								nasa harap ng mukha nila na kung hindi man
								lahat, merong mali sa pag-iisip nila. Sige, okay
								lang naman un, [REDACTED] naman nila ean e.
								Poide rin nmn sabihin na "ah ganyan tayo kasi
								dahil sa kasaysayan (Kas 1???) natin e". Sige,
								okay lang din! Pero jusmiyo meron din namang
								point na nagpapakamangmang na lang tau sa sarili
								natin at choice na natin na hindi na umusad 😭
								like girll??? Sarili laban sa sarili??
								Encantadia??
							</p>
							<div className="my-8">
								<Image
									src={pic10}
									alt=""
									className="object-cover rounded-2xl shadow-2xl"
								/>
							</div>
							<p>
								PERO AT LEAST, AT LEAST meron din namang
								kabaliktaran neto ngayon. May mga pumipili rin
								naman sa #self (tanggapin nyo na tong sagot
								please ems) nila na kahit papano ialay ang bohai
								nila sa tamang pagtrato ng del mundo sa kapwa
								man o sa puno na inihian tas sinabihan ng "tabi
								tabi po". Which, choice din naman nila un. Basta
								ean, kung ano man way of water natin sa bohai un
								din nmn nagbubuo ng kung sino tau. Part din
								cguro kung nahahappy ba tyo sa choice natin na
								kung sino tyo. Ayaw mo sa choice mo? Edi
								baguhin! Kaya nga nauuso yung character
								development tas nakipagbalikan sa ex e.
								Akshuwally may pagkabundle theory din to e na
								paiba iba tyo ng isip (except pagdating sa
								pagkain) na kung sino tyo pero mostly sa choice
								din nmn un kung magsstay ba tyo or shift, kaya
								dat maganda GWA mo sa sarili mo.
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Navigation */}
			<section className="relative px-4 py-20 sm:px-6 lg:px-8 border-t border-primary/10">
				<div className="mx-auto max-w-5xl">
					<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
						<Link href="/epistemology" className="group">
							<motion.div
								whileHover={{ scale: 1.02, y: -2 }}
								className="p-6 md:p-8 rounded-xl border-2 border-primary/30 hover:border-accent/50 transition-all hover:bg-accent/10 shadow-md hover:shadow-xl"
							>
								<p className="text-sm md:text-base text-foreground/60 mb-2">
									← Previous
								</p>
								<p className="font-serif font-bold text-lg md:text-xl">
									Epistemology
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
							href="/freedom"
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
									Freedom →
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
