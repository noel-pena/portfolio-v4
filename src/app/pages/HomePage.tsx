"use client";

import AppWrapper from "@/app/AppWrapper";
import Footer from "@/app/components/Footer/Footer";
import Hero from "@/app/components/Hero/Hero";
import Projects from "@/app/components/Projects/Projects";
import Skills from "@/app/components/Skills/Skills";

export default function HomePage() {
	return (
		<AppWrapper>
			<Hero />
			<Skills />
			<Projects />
			<Footer />
		</AppWrapper>
	);
}
