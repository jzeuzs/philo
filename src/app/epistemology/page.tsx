"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import pic from "@/../public/mami.jpg";
import { NavBar } from "@/components/NavBar";

export default function EpistemologyPage() {
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
								<div className="h-1 w-16 bg-linear-to-r from-primary to-accent rounded-full"></div>
							</div>
							<h1 className="text-5xl sm:text-7xl font-serif font-bold leading-tight">
								<span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
									Search for Truth
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
							<p>
								The epistemological journey, or the search for
								truth, is arguably, to this day, still one of
								the areas of philosophy that is shrouded in the
								most mystery. This is due to how much of the
								world we still don't know, and the differing
								truths of every individual, and in some cases,
								both factors come into play at the same time.
							</p>
							<p>
								Through the study of epistemology, we lay the
								foundation for critical thinking, major guidance
								for research and science, and tools to address
								modern challenges by rigorously examining what
								knowledge is, how it is acquired, and what
								justifies our beliefs, thereby directly
								illuminating some of the hidden truths of our
								world.
							</p>
							<p>
								Thus, the questions below (with a little/lotta
								bit of memes…) and the answers provided to them
								aim to help this cause by providing practical
								situations of how truth can be perceived, and
								what we can do to further the objectives of
								epistemology and the ultimate (ultimate?!)
								truth.
							</p>
							<blockquote className="bg-primary/5 border-l-4 border-primary pl-8 pr-6 py-6 my-8 rounded-r-lg italic text-foreground/80 text-xl">
								"We look not at the things which are what you
								would call seen, but at the things which are not
								seen. For the things which are seen are
								temporal. But the things that are not seen are
								eternal."
								<footer className="text-base mt-3 not-italic font-semibold text-primary">
									— Madeleine L'Engle
								</footer>
							</blockquote>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="my-12"
					>
						<Image
							src={pic}
							alt="mami"
							className="w-full h-[300px] sm:h-[400px] object-cover rounded-2xl shadow-2xl"
						/>
					</motion.div>

					{/* Question A */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6 border-l-4 border-primary pl-8 py-4"
					>
						<h3 className="text-3xl font-serif font-bold text-foreground">
							a. Mary the Love Expert
						</h3>
						<p className="font-semibold text-foreground text-xl leading-relaxed">
							Take this case study: Mary is a love expert who
							consistently gives the best advice for relationships
							which everyone thinks is always right. However, she
							has never been in one. Do you think she knows
							anything about relationships at all? Why or why not?
						</p>
						<p className="italic text-foreground/70 text-lg">
							We're no strangers to love. You know the rules and
							so do I.
						</p>
						<div className="space-y-5 text-lg text-foreground/90 leading-[1.8]">
							<p>
								Mary has the ability to know about relationships
								despite never being in one. Yeah, sure, maybe
								she would have better credibility if she was
								ever in one, but according to Kant's
								transcendental idealism and his concept of the
								synthetic a priori, not all knowledge that can
								be validated by experience is dependent on
								experience.
							</p>
							<p>
								Mary can possess a set of principles—moral,
								logical, practical, aesthetic—to help in forming
								and sustaining a relationship, despite the fact
								that her principles have never been tested. Kant
								did not believe that synthetic knowledge solely
								comes from experience (like how Hume would go
								around this question), but also with reasoning.
							</p>

							<div className="my-8">
								<Image
									src={pic}
									alt="mami"
									className="w-full h-[300px] sm:h-[400px] object-cover rounded-2xl shadow-2xl"
								/>
							</div>

							<p>
								Such conceptualization might not be able to
								encapsulate the being-in-itself of love, but
								Kant knows this. As he asserts, what we can know
								is only the phenomenal world, a world of
								appearances, not the noumenal, the world of
								things-in-themselves. As much as lovers like
								saying that they have "found" love,
								love-in-itself is elusive as an object of
								knowledge.
							</p>
							<p>
								While Kant also said that "experience without
								theory is blind, and theory without experience
								is mere intellectual play", Mary still does not
								fit this description of being someone who has
								completely zero empirical knowledge about
								relationships. She deliberately goes out into
								the world and tests her knowledge through
								interacting with people. Every time someone asks
								Mary for advice, to some extent, she gathers
								more experience and does not remain a static
								source of advice, someone who Kant would regard
								as an intellectual role-player. Her knowledge as
								a love expert is actively nurtured by the people
								who judge her advice—which in this case are
								mostly positive judgements.
							</p>
							<p className="font-bold text-xl text-primary">
								TLDR: COACHES DON'T PLAYYYY
							</p>
						</div>
					</motion.div>

					{/* Question B */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6 border-l-4 border-primary pl-8 py-4"
					>
						<h3 className="text-3xl font-serif font-bold text-foreground">
							b. Misinformation and Fake News
						</h3>
						<p className="font-semibold text-foreground text-xl leading-relaxed">
							In a world of misinformation and fake news, can you
							tell what is true apart from what is false? If so,
							how? If not, is there still such a thing as the
							truth – why or why not? You may refer to the various
							theories of truth.
						</p>
						<p className="italic text-foreground/70 text-lg">
							Lies have existed long before mass media.
						</p>

						<div className="my-8">
							<Image
								src={pic}
								alt="mami"
								className="w-full h-[300px] sm:h-[400px] object-cover rounded-2xl shadow-2xl"
							/>
						</div>

						<div className="space-y-5 text-lg text-foreground/90 leading-[1.8]">
							<p>
								Even when these white lies and evil lies existed
								in humanity's peripherals, they still decided to
								keep moving forward, developing frameworks to
								achieve the "truth" like logic, mathematics and
								science, even now. We can judge the truth of a
								statement with confidence, but through
								assumptions about what truth should look like.
								The mere premise of this question that
								"misinformation" and "fake news" exist as
								distinguishable concepts of society makes it so
								that logically, only through reasoning and the
								structures that aid reasoning do we pick out
								these lies. Thus, we would be able to tell what
								is true and false. Unfortunately, our visions of
								the truth are not rooted in the absolute truth
								by God or something, but simply our faculties of
								reason—something subjective. Only in the
								situation where we cannot discern what
								"misinformation" and "fake news" mean does the
								distinction between true and false fall apart.
								The singularity of truth—an absolute certainty
								about the truth and falsehood of statements,
								going against doubt at the root of
								rationalism—is a recipe for totalitarianism.
							</p>
							<p>
								Correspondence theory of truth seems to be the
								go-to framework to capture the concept of truth,
								although that would not imply that the truth
								derived from it would be incoherent and
								impractical. Unfortunately, correspondence
								theory is almost circular, only mediated by the
								framework in which a fact is deemed to be true.
								Such frameworks most of the time are optimized
								to be practical, which is a highly flexible
								category (which kind of makes it unclear what it
								actually refers to) and if you think about it,
								must be coherent, to be actually convenient and
								useful. In a world of misinformation where we
								realize that not everybody cares that deeply
								about their own logical structures, the
								multiplicity of truth becomes clearer.
							</p>
						</div>
					</motion.div>

					{/* Question C */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6 border-l-4 border-primary pl-8 py-4"
					>
						<h3 className="text-3xl font-serif font-bold text-foreground">
							c. Should We Search and Fight for the Truth?
						</h3>
						<p className="font-semibold text-foreground text-xl leading-relaxed">
							If everyone has their own truths, should we still
							search and fight for the truth? Explain your answer.
						</p>
						<div className="space-y-5 text-lg text-foreground/90 leading-[1.8]">
							<p>
								As with David Hume's is-ought problem, the
								subjectivity of truth in itself does not
								immediately suggest anything about whether we
								should search and fight for the truth. The duty
								(or the lack thereof) of the individual or the
								society to search and fight for the truth is not
								the concern of epistemology, but ethics.
								However, the "truth" is something that is not
								engaged with in complete isolation in this day
								and age where knowledge is capital and a tool in
								politics, for better or for worse. Truth is not
								anymore purely metaphysical, but manifests
								itself through power. "Knowledge is power," as
								postmodernists might say. Engaging with
								knowledge for its own sake only risks
								trivializing the power-relations ingrained in
								the domination of certain epistemic frameworks,
								which is another problem.
							</p>
							<p>
								The subjectivity and the multiplicity of truth
								in this day and age is not something to be
								interpreted as the downfall of its potency or in
								other words, a step towards nihilism. Instead,
								it should be noted that the fact that a truth
								asserts itself as "truth" says a lot about its
								potency already, both for the oppressor and the
								oppressed in the political system. Instead of
								becoming nihilistic as Nietzsche has warned,
								people still engage in online discourse, rally
								in the streets, pick up weapons, precisely
								because they believe in something, while their
								oppressors believe something else. If anything,
								this difference in truths is what makes the
								people have to fight for the truth. We should
								have the capacity to fight for the truth and if
								anything, its subjectivity is not the thing that
								is going to prevent us from doing so.
								Unfortunately, oppression does not inherently
								cause the oppressed to fight back as the
								oppressed are free to do nothing, either
								strategically or because they are simply
								pacified. We are condemned to be free, to be
								able to believe in truths we do not even want to
								struggle for.
							</p>
						</div>
					</motion.div>

					{/* Filipino Context */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6 bg-primary/5 p-10 rounded-2xl border-2 border-primary/20 shadow-lg"
					>
						<h3 className="text-3xl font-serif font-bold text-primary">
							Filipino Context
						</h3>
						<div className="space-y-5 text-lg text-foreground/90 leading-[1.8]">
							<p>
								Ang diskusyon sa The Search for Truth
								(Epistemology) ay sobrang relevant sa Pinas
								dahil we are all living in a teleserye of fake
								news. Sa isang bansa na binansagang "patient
								zero" ng global disinformation, ang pag-aaral ng
								truth theories—like Correspondence (Tugma ba sa
								fact?) at Rationality (May good reason ba?)—ang
								nagsisilbing "Detective Conan toolkit" natin.
								Every day, we face massive propaganda,
								historical revisionism (hello, Tallano Gold
								myth!), and emotionally agitating posts designed
								to make us choose the comfortable lie
								(Pragmatism gone wrong) over the inconvenient
								truth.
							</p>
							<p>
								So, when you see a viral post that's screaming
								at you or making you too angry, your
								philosophical duty is to pause, put on your
								skeptic hat, and ask: "Nasaan ang resibo?"
								Whether it's checking with Tsek.ph or demanding
								justification over ad hominem attacks, this is
								how we stop being the victim of the narrative
								and start being the one who writes it. In short:{" "}
								<span className="font-bold text-primary text-xl">
									Ang truth ay hindi 'yung mas sikat; ang
									truth ay 'yung may evidence, mga accla!
								</span>
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Navigation */}
			<section className="relative px-4 py-20 sm:px-6 lg:px-8 border-t border-primary/10">
				<div className="mx-auto max-w-5xl">
					<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
						<Link href="/" className="group">
							<motion.div
								whileHover={{ scale: 1.02, y: -2 }}
								className="p-6 md:p-8 rounded-xl border-2 border-primary/30 hover:border-accent/50 transition-all hover:bg-accent/10 shadow-md hover:shadow-xl"
							>
								<p className="text-sm md:text-base text-foreground/60 mb-2">
									← Back
								</p>
								<p className="font-serif font-bold text-lg md:text-xl">
									Home
								</p>
							</motion.div>
						</Link>
						<Link href="/self" className="group md:col-start-3">
							<motion.div
								whileHover={{ scale: 1.02, y: -2 }}
								className="p-6 md:p-8 rounded-xl border-2 border-primary/30 hover:border-accent/50 transition-all hover:bg-accent/10 shadow-md hover:shadow-xl"
							>
								<p className="text-sm md:text-base text-foreground/60 mb-2">
									Next
								</p>
								<p className="font-serif font-bold text-lg md:text-xl">
									The Self →
								</p>
							</motion.div>
						</Link>
					</div>
				</div>
			</section>
		</motion.main>
	);
}
