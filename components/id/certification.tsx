import Image from "next/image";
import { useQuery } from "react-query";
import React, { useState, useEffect } from "react";
import supabase from "../../utils/supabaseClient";

const Certification = () => {
	const { data, isLoading, isError } = useQuery("certification", async () => {
		const { data } = await supabase.from("certification").select().order("issued", { ascending: false });
		return data;
	});
	// const isLoading = true;
	const [loadingText, setLoadingText] = useState("Loading.....................");

	useEffect(() => {
		if (isLoading) {
			const chars = loadingText.split("");
			let currentIndex = 0;

			const intervalId = setInterval(() => {
				currentIndex++;
				setLoadingText(chars.slice(0, currentIndex).join(""));

				if (currentIndex === chars.length) {
					currentIndex = 0;
				}
			}, 100);

			return () => clearInterval(intervalId);
		}
	}, [isLoading]);

	if (isLoading) {
		return (
			<section id="certificate" className="bg-[#0b0a27] text-white">
				<h1 className="pl-[20px] xl:pl-[100px] text-[16px] sm:text-[20px] xl:text-[26px] 2xl:text-[36px] italic uppercase font-bold py-5 mt-0">sertifikasi</h1>
				<hr></hr>
				<div>
					<div className="text-[#FFFFFF] flex justify-between">
						<div className="flex my-10">
							<div className="ml-5 sm:ml-14 xl:ml-20 px-1 w-16 xl:w-48 flex items-center bg-[#161538] rounded-lg ">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" className="">
									<path
										fill="none"
										stroke="#ffffff"
										stroke-width="15"
										stroke-linecap="round"
										stroke-dasharray="300 385"
										stroke-dashoffset="0"
										d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
									>
										<animate attributeName="stroke-dashoffset" calcMode="spline" dur="4" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate>
									</path>
								</svg>
							</div>
							<div className="ml-2">
								<div className="text-sm xl:text-4xl font-bold italic mt-3 text-[#161538] bg-gradient-to-r from-[#161538] from-15% to-[#34678e] shadow-sm shadow-black px-2 py-1 rounded-xl">
									<p className="opacity-0">{loadingText}</p>
								</div>
								<div className="font-Code-Pro text-xs xl:text-base my-5 text-[#161538] bg-gradient-to-r from-[#161538] from-15% to-[#34678e] shadow-sm shadow-black px-2 py-1 rounded-lg">
									<p className="opacity-0">{loadingText}</p>
								</div>
								<div className="hidden xl:block font-Code-Pro text-xs xl:text-sm mb-5 text-[#161538] bg-gradient-to-r from-[#161538] from-15% to-[#34678e] shadow-sm shadow-black px-2 py-1 rounded-lg">
									<p className="opacity-0">{loadingText}</p>
								</div>
							</div>
						</div>
						<div className="mx-4 xl:mx-20 flex items-center">
							<h1 className="font-bold italic text-[24px] sm:text-[32px] xl:text-[68px] 2xl:text-[78px] text-center">00</h1>
						</div>
					</div>
					<hr className="w-[300px] sm:w-[600px] xl:w-[1200px] 2xl:w-[1600px] right-0 left-0 mx-auto"></hr>
				</div>
			</section>
		);
	}
	if (isError) {
		return <p>Error occurred.</p>;
	}

	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	return (
		<section id="certificate" className="bg-[#0b0a27] text-white">
			<h1 className="pl-[20px] xl:pl-[100px] text-[16px] sm:text-[20px] xl:text-[26px] 2xl:text-[36px] italic uppercase font-bold py-5 mt-0">sertifikasi</h1>
			<hr></hr>

			{data?.map((certification: any) => {
				const issuedDate = new Date(certification.issued);
				const issuedMonth = months[issuedDate.getMonth()];
				const issuedYear = issuedDate.getFullYear();

				const expiresDate = certification.expires ? new Date(certification.expires) : null;
				const expiresMonth = expiresDate ? months[expiresDate.getMonth()] : "-";
				const expiresYear = expiresDate ? expiresDate.getFullYear() : "-";
				return (
					<div>
						<div className="text-[#FFFFFF] flex justify-between" key={certification.id}>
							<div className="flex min-w-[280px] xl:min-w-[900px] my-10">
								<div className="ml-5 sm:ml-14 xl:ml-20 w-16 xl:w-48 flex items-center">
									<Image src={certification.image_url} alt={certification.organizer} width={120} height={120} className="rounded-sm" />
								</div>

								<div className="ml-2 w-[200px] sm:w-[500px] xl:w-[800px] 2xl:w-[900px]">
									<h1 className="text-sm sm:text-lg xl:text-4xl font-bold w-[220px] sm:w-[520px] xl:w-[750px] 2xl:w-[1000px] italic mt-3">{certification.certificate_name}</h1>
									<p className="font-Code-Pro text-xs sm:text-sm xl:text-base 2xl:text-lg my-5">{certification.organizer}</p>
									<p className="hidden xl:block font-Code-Pro text-xs xl:text-sm 2xl:text-base mb-5 w-[580px] 2xl:w-[880px]">{certification.description}</p>
								</div>
							</div>
							<div className="mx-4 xl:mx-20 flex items-center">
								<h1 className="font-bold italic text-[24px] sm:text-[32px] xl:text-[68px] 2xl:text-[78px] text-center">0{certification.id}</h1>
							</div>
						</div>
						<hr className="w-[300px] sm:w-[600px] xl:w-[1200px] 2xl:w-[1600px] right-0 left-0 mx-auto"></hr>
					</div>
				);
			})}
			<div className="flex  ">
				<div className="right-0 left-0 mx-auto my-10">
					<p className="text-base xl:text-2xl italic ">
						"Another site on the brink of destruction. At least we're <span className="font-bold text-[#CAFF00]">consistent</span>."
					</p>
					<p className="text-sm xl:text-xl italic text-right mr-3">
						- <span className="font-bold text-[#70aede]">Neon</span>
					</p>
				</div>
			</div>
			<hr></hr>
		</section>
	);
};

export default Certification;
