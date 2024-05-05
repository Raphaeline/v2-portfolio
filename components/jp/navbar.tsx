import React, { useState, useEffect } from "react";

const Navbar = () => {
	const [scrolling, setScrolling] = useState(false);

	const handleScroll = () => {
		if (typeof window !== "undefined") {
			if (window.scrollY > 400) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		}
	};

	const handleButtonClick = (sectionId: string) => {
		if (typeof window !== "undefined") {
			const section = document.getElementById(sectionId);
			if (section) {
				section.scrollIntoView({ behavior: "smooth" });
			}
		}
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", handleScroll);
			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={`fixed z-20 mt-5 mx-3 sm:mx-24 xl:mx-32 2xl:mx-48 left-0 right-0 rounded-md drop-shadow-[0_1px_5px_rgba(0,0,0,0.6)] ${scrolling ? "opacity-100 bg-[#CAFF00] text-[#0b0a27]" : "opacity-90  bg-[#0b0a27] text-white"}`}>
			<ul className="flex justify-between xl:justify-normal flex-row-reverse font-Code-Pro uppercase text-xs sm:text-sm xl:text-base 2xl:text-lg font-bold mx-3">
				<button onClick={() => handleButtonClick("project")} className={`p-1 sm:p-2 xl:p-4 ${scrolling ? "hover:bg-[#0c0b20] hover:text-white" : "hover:bg-[#b4d725] hover:text-black"}`}>
					プロジェクト
				</button>
				<button onClick={() => handleButtonClick("certificate")} className={`p-1 sm:p-2 xl:p-4 ${scrolling ? "hover:bg-[#0c0b20] hover:text-white" : "hover:bg-[#b4d725] hover:text-black"}`}>
					サーティフィケート
				</button>
				<button onClick={() => handleButtonClick("experience")} className={`p-1 sm:p-2 xl:p-4 ${scrolling ? "hover:bg-[#0c0b20] hover:text-white" : "hover:bg-[#b4d725] hover:text-black"}`}>
					エクスペリエンス
				</button>
				<button onClick={() => handleButtonClick("about")} className={`p-1 sm:p-2 xl:p-4 ${scrolling ? "hover:bg-[#0c0b20] hover:text-white" : "hover:bg-[#b4d725] hover:text-black"}`}>
					アバウトミー
				</button>
			</ul>
		</div>
	);
};

export default Navbar;
