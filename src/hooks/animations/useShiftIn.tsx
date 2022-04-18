import { HTMLMotionProps, useReducedMotion } from "framer-motion";


export const useShiftIn =
	() =>
	(direction: "left" | "right"): HTMLMotionProps<"div"> => {
		const reduceMotion = useReducedMotion();

		return !reduceMotion
			? {
					initial: "offscreen",
					whileInView: "onscreen",
					viewport: { once: true },
					variants: {
						offscreen: {
							x: direction === "right" ? -500 : 500,
						},
						onscreen: {
							x: 0,
							transition: {
								type: "spring",
								bounce: 0.3,
								duration: 2.5,
							},
						},
					},
			  }
			: {};
	};
