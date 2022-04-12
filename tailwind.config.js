module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Arvo"],
			},

			colors: {
				main: "#0F1C26",
				overtext: "#9AF8FF",
				undertext: "#A3DDE1",
				subtext: "#7D96B7",
			},

			textShadow: {
				h1: "0 0.275rem rgba(163, 221, 225, 0.20)",
				h3: "0 1px rgba(163, 221, 225, 0.20)",
			},
		},

		container: {
			center: true,
		},
	},
	plugins: [require("tailwindcss-textshadow")],
};
