import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Terminal from "../components/Terminal/Terminal";

export default function HomePage() {
	return (
		<>
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Terminal />
			<Footer />
		</>
	);
}
