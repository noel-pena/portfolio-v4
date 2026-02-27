"use client";

import AppWrapper from "../AppWrapper";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

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
