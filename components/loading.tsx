// components/GradientWheel.js
import React from "react";

const GradientWheel = () => {
	return (
		<div className="flex justify-center items-center h-screen bg-gray-200">
			<div className="relative w-88 h-88 rounded-full bg-gradient-to-r from-red-400 via-blue-300 to-teal-300 animate-spin">
				<span className="absolute w-full h-full rounded-full bg-gradient-to-r from-red-400 via-blue-300 to-teal-300 blur-sm"></span>
				<span className="absolute w-full h-full rounded-full bg-gradient-to-r from-red-400 via-blue-300 to-teal-300 blur"></span>
				<span className="absolute w-full h-full rounded-full bg-gradient-to-r from-red-400 via-blue-300 to-teal-300 blur-lg"></span>
				<span className="absolute w-full h-full rounded-full bg-gradient-to-r from-red-400 via-blue-300 to-teal-300 blur-2xl"></span>
				<div className="absolute top-2.5 left-2.5 right-2.5 bottom-2.5 bg-gray-200 border-4 border-white rounded-full"></div>
			</div>
		</div>
	);
};

export default GradientWheel;
