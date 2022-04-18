import { HTMLMotionProps, useReducedMotion } from "framer-motion";


export const useBobbing = (): HTMLMotionProps<"div"> => {
	const reduceMotion = useReducedMotion();

	return !reduceMotion
		? {
				animate: {
					y: [0, 5, 0],
				},
				transition: {
					ease: "easeInOut",
					duration: 2,
					repeat: Infinity,
				},
		  }
		: {};
}