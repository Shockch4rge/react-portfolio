import { HTMLMotionProps, motion, useAnimation, useReducedMotion, Variants } from "framer-motion";

import svg from "./assets/blur-splatter-1.svg";
import svg2 from "./assets/blur-splatter-2.svg";
import svg3 from "./assets/blur-splatter-3.svg";
import test from "./assets/images/test.png";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useBobbing, useShiftIn } from "./hooks/animations";


const App = () => {
	const animateBobbing = useBobbing();
	const animateShiftIn = useShiftIn();

	return (
		<ScrollToTop>
			<div className="container flex h-screen items-center sm:justify-center">
				<div>
					<a href="hello" />
					<img
						src={svg}
						alt="blur-splatter-1"
						className="absolute -top-40 -left-40 max-w-xs max-h-xs opacity-20 blur-3xl noselect"
						draggable="false"
					/>
					<img
						src={svg2}
						alt="blur-splatter-2"
						className="absolute -top-40 -right-40 max-w-xs max-h-xs opacity-20 blur-3xl noselect"
						draggable="false"
					/>
					<img
						src={svg3}
						alt="blur-splatter-3"
						className="absolute my-auto max-w-xs max-h-xs opacity-20 blur-3xl noselect"
						draggable="false"
					/>
				</div>

				<motion.div {...animateBobbing} className="mx-24">
					<h1 className="text-4xl sm:text-7xl text-overtext text-left sm:text-center text-shadow-h1">
						Hello, I'm <span className="text-inherit font-bold">Favian.</span>
					</h1>
					<h3 className="mt-4 text-xl sm:text-3xl text-overtext text-left sm:text-center italic text-shadow-h1">
						and I'm a...
					</h3>
				</motion.div>
			</div>

			<div className="container flex flex-col space-y-14 sm:space-y-28">
				<a href="web-developer" />
				<div className="flex flex-col lg:flex-row sm:justify-around items-center">
					<motion.div className="ml-4" {...animateShiftIn("right")}>
						<motion.h1
							{...animateBobbing}
							className="text-left sm:text-center lg:text-left text-3xl sm:text-6xl text-shadow-h1 text-overtext font-bold"
						>
							Web developer.
						</motion.h1>
						<p className="text-left sm:text-center lg:text-left text-subtext text-md sm:text-lg max-w-md mt-4 sm:mt-7">
							As a young developer hoping to hone my skills for future prospects, I've dabbled in
							multiple pet projects which target relevant programming topics. These projects
							range from experimenting with different programming languages to building full web
							applications.
						</p>
					</motion.div>

					<motion.img
						src={test}
						alt=""
						className="mx-16 sm:mx-8 my-10 sm:my-14 w-3xl max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-full h-auto rounded-3xl drop-shadow-lg"
						{...animateShiftIn("left")}
						animate={{ rotate: 6 }}
					/>
				</div>

				<a href="musician" />
				<div className="flex flex-col-reverse lg:flex-row sm:justify-around items-center">
					<motion.img
						src={test}
						alt=""
						className="mx-16 sm:mx-8 my-10 sm:my-12 w-3xl max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-full h-auto rounded-3xl drop-shadow-lg"
						{...animateShiftIn("right")}
						animate={{ rotate: -6 }}
					/>
					<motion.div className="mr-4" {...animateShiftIn("left")}>
						<motion.h1
							{...animateBobbing}
							className="text-left sm:text-center lg:text-left text-3xl sm:text-6xl text-shadow-h1 text-overtext font-bold"
						>
							Musician.
						</motion.h1>
						<p className="text-left sm:text-center lg:text-left text-subtext text-md sm:text-lg max-w-md mt-4 sm:mt-7">
							Growing up with a solid foundation in music has allowed me to think comprehensively
							to problems . It is also likely that my proficiency in music has fostered my
							interest in programming.
						</p>
					</motion.div>
				</div>

				<a href="cool-person" />
				<div className="flex flex-col lg:flex-row sm:justify-around items-center">
					<motion.div className="ml-4" {...animateShiftIn("right")}>
						<motion.h1
							{...animateBobbing}
							className="text-left sm:text-center lg:text-left text-3xl sm:text-6xl text-shadow-h1 text-overtext font-bold"
						>
							Cool person!
						</motion.h1>
						<p className="text-left sm:text-center lg:text-left text-subtext text-md sm:text-lg max-w-md mt-4 sm:mt-7">
							I love to interact with my peers and make jokes! I aim to be as inclusive as
							possible and remain open to new perspectives that others may have. Life is a bag of
							worms, and I'm all for it.
						</p>
					</motion.div>

					<motion.img
						src={test}
						alt=""
						className="mx-16 sm:mx-8 my-10 sm:my-12 w-3xl max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-full h-auto rounded-3xl drop-shadow-lg"
						{...animateShiftIn("left")}
						animate={{ rotate: 6 }}
					/>
				</div>
			</div>

			<Footer />
		</ScrollToTop>
	);
};

export default App;
