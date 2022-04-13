import { FaGithub, FaHeart } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="w-full h-32 mt-48 p-4 bg-slate-800 flex flex-col justify-evenly items-center">
			<div className="flex items-center gap-2">
				<span className="text-subtext">Made with</span>
				<FaHeart className="hover:fill-pink-500" size="1.25em" />
				<span className="text-subtext">by Favian Teo</span>
			</div>

			<div className="flex justify-center items-center align-middle gap-3">
				<FaGithub className="max-w-full hover:fill-subtext" size="2em" />
			</div>
		</div>
	);
};

export default Footer;
