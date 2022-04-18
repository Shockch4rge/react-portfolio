import { FaGithub, FaHeart, FaLinkedin, FaStackOverflow } from "react-icons/fa";

import { Icon } from "./common";


const Footer = () => {
	return (
		<div className="w-full h-32 mt-48 p-4 bg-slate-800 flex flex-col justify-evenly items-center">
			<div className="flex items-center gap-2">
				<span className="text-subtext">Made with</span>
				<FaHeart className="hover:fill-pink-500" size="1.25em" />
				<span className="text-subtext">by Favian Teo</span>
			</div>

			<div className="flex justify-center items-center align-middle gap-3">
				<Icon type={FaGithub} url="https://github.com/shockch4rge" />
				<Icon type={FaLinkedin} url="https://www.linkedin.com/in/favian-teo-eu-kiat-133b79216/" />
				<Icon type={FaStackOverflow} url="https://stackoverflow.com/users/16144470/shockch4rge" />
			</div>
		</div>
	);
};

export default Footer;
