import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

import svg from "./assets/blur-splatter-1.svg";
import svg2 from "./assets/blur-splatter-2.svg";
import svg3 from "./assets/blur-splatter-3.svg";
import test from "./assets/images/test.png";


const App = () => {
	return (
		<>
			<div className="p-4 sm:p-2 flex flex-col container h-screen place-content-center">
				<div>
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

					<div>
						<h1 className="text-4xl sm:text-7xl text-overtext text-left sm:text-center text-shadow-h1">
							Hello, I'm{" "}
							<motion.span
								animate={{ scaleY: [1, 1.1, 1] }}
								transition={{ ease: "easeInOut", duration: 2, repeat: Infinity }}
								className="text-inherit font-bold"
							>
								Favian.
							</motion.span>
						</h1>
						<h3 className="mt-4 text-xl sm:text-3xl text-overtext text-left sm:text-center italic text-shadow-h1">
							and I'm a...
						</h3>
					</div>
				</div>
			</div>

			<div className="relative top-[700px] lg:ml-12 flex flex-col lg:flex-row sm:justify-around items-center">
				<a href="web-developer" />
				<div>
					<motion.h1
						animate={{ y: [0, 5, 0] }}
						transition={{ ease: "easeInOut", duration: 2, repeat: Infinity }}
						className="text-left text-3xl sm:text-6xl text-shadow-h1 text-overtext font-bold"
					>
						Web Developer.
					</motion.h1>
					<p className="text-left sm:text-center lg:text-left text-subtext text-md sm:text-lg max-w-md mt-4 sm:mt-7">
						As a young developer hoping to hone my skills for future prospects, I've dabbled in
						multiple pet projects which target relevant programming topics. These projects range
						from experimenting with different programming languages to building full web
						applications.
					</p>
				</div>

				<motion.img
					src={test}
					alt=""
					className="sm:rotate-6 mx-16 my-6 sm:my-12 w-3xl max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-full h-auto rounded-3xl"
				/>
			</div>
		</>
	);
};

export default App;
