import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { useQuery } from "react-query";
import React, { useState, useEffect } from "react";
import supabase from "../../utils/supabaseClient";

const Experience = () => {
	const { data, isLoading, isError } = useQuery("experience", async () => {
		const { data } = await supabase.from("experience").select().order("from", { ascending: false });
		return data;
	});

	const [loadingText, setLoadingText] = useState("Loading...");

	useEffect(() => {
		if (isLoading) {
			const chars = loadingText.split("");
			let currentIndex = 0;

			const intervalId = setInterval(() => {
				currentIndex++;
				setLoadingText(chars.slice(0, currentIndex).join(""));

				if (currentIndex === chars.length) {
					currentIndex = 0; // Reset to start from the beginning
				}
			}, 250);

			return () => clearInterval(intervalId);
		}
	}, [isLoading]);

	if (isLoading) {
		return (
			<section id="experience" className="bg-[#0b0a27] text-white">
				<h1 className="ml-[20px] xl:ml-[100px] text-[16px] sm:text-[20px] xl:text-[26px] 2xl:text-[36pX] italic uppercase font-bold py-5 mt-0">pengalaman</h1>
				<hr></hr>
				<div>
					<div className="flex my-10 justify-between">
						<div className="flex">
							<div className="flex flex-col mr-3 xl:mr-20">
								<h1 className="font-bold italic text-[20px] xl:text-[62px] 2xl:text-[72px] text-center">0</h1>
								<div className="mt-10 xl:mt-32 mb-10 -rotate-90 w-[80px] xl:w-[230px] 2xl:w-[290px]">
									<h1 className="text-sm xl:text-base font-bold italic font-Code-Pro text-right">December 30th 2002</h1>
								</div>
							</div>

							<div className="flex">
								<div className="flex flex-col my-auto">
									<div>
										<p className="text-lg xl:text-4xl italic font-bold text-[#161538] bg-[#161538] px-2 py-1 rounded">{loadingText}</p>
									</div>
									<p className="font-Code-Pro text-base xl:text-lg 2xl:text-xl my-1">
										<span className="text-[#161538] bg-[#161538] px-2 py-1 rounded">{loadingText}</span>
									</p>
									<p className="my-1 font-Code-Pro text-sm xl:text-base px-2 py-1 rounded text-[#caff00] bg-[#caff00] underline italic flex">{loadingText}</p>
								</div>
							</div>
						</div>

						<div className="flex flex-row-reverse">
							<div className="rounded-l-2xl bg-[#ffffff] shadow-lg shadow-[#0c0a20] w-[70px] sm:w-[120px] xl:w-[300px] h-[160px] xl:h-[280px] my-auto">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" className="w-[30px] sm:w-[80px] xl:w-[180px] h-[30px] xl:h-[180px] my-16 xl:my-14 mx-auto">
									<path
										fill="none"
										stroke="#0B0A27"
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
						</div>
					</div>
					<hr></hr>
				</div>
			</section>
		);
	}

	if (isError) {
		return <p>Error occurred.</p>;
	}

	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	return (
		<section id="experience" className="bg-[#0b0a27] text-white">
			<h1 className="ml-[20px] xl:ml-[100px] text-[16px] sm:text-[20px] xl:text-[26px] 2xl:text-[36px] italic uppercase font-bold py-5 mt-0">
				pengalaman
				{/* <span>
          <a href="/experience" target="_blank" rel="noopener noreferrer" className=" font-Code-Pro hover:text-[#caff00]  italic flex text-[26px] ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-2 w-7 h-7" strokeWidth={2} stroke="currentColor">
              <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
            </svg>
            all
          </a>
        </span> */}
			</h1>
			<hr></hr>
			{data?.map((experience: any) => {
				const fromDate = new Date(experience.from);
				const formattedFrom = `${months[fromDate.getMonth()]} ${fromDate.getFullYear()}`;

				const toDate = experience.until ? new Date(experience.until) : null;
				const formattedUntil = toDate ? `${months[toDate.getMonth()]} ${toDate.getFullYear()}` : "Now";

				return (
					<div>
						<div className="flex my-10 justify-between">
							<div className="flex mb-10">
								<div className="flex flex-col mr-3 xl:mr-20">
									<h1 className="font-bold italic text-[36px] xl:text-[62px] 2xl:text-[72px] text-center">{experience.id}</h1>
									<div className="hidden xl:block mt-32 mb-10 -rotate-90 w-[230px] 2xl:w-[290px]">
										<h1 className="text-sm xl:text-base 2xl:text-lg font-bold italic font-Code-Pro text-right">
											{formattedFrom} - {formattedUntil}
										</h1>
									</div>
									<div className="block xl:hidden mt-16 -rotate-90 w-[120px]">
										<h1 className="text-sm xl:text-base font-bold italic font-Code-Pro text-right">{formattedFrom}</h1>
										<hr />
										<h1 className="text-sm xl:text-base font-bold italic font-Code-Pro text-right">{formattedUntil}</h1>
									</div>
								</div>

								<div className="flex">
									<div className="flex flex-col my-auto">
										<h1 id="" className="text-lg xl:text-4xl 2xl:text-5xl italic font-bold">
											{experience.role}
										</h1>
										<p className="font-Code-Pro text-base xl:text-lg 2xl:text-xl my-1">
											<span className="text-[#caff00]">di</span> {experience.work_loc}
										</p>
										<a href={experience.url} target="_blank" className="my-1 font-Code-Pro text-sm xl:text-base 2xl:text-md hover:text-[#caff00] underline italic flex max-w-[250px]">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 xl:w-4 h-3 xl:h-6 mt-1 xl:mt-0">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
												/>
											</svg>
											{experience.url_name}
										</a>
									</div>
								</div>
							</div>

							<div className="flex flex-row-reverse">
								<div id="logo" className=" rounded-l-2xl bg-[#ffffff] shadow-lg shadow-[#0c0a20] w-[70px] sm:w-[120px] xl:w-[300px] h-[160px] xl:h-[280px] my-auto">
									<Image src={experience.work_icon} alt="d" className=" w-[30px] xl:w-[180px] h-[30px] xl:h-[180px] my-16 xl:my-14 mx-auto" width={500} height={100} />
								</div>
							</div>
						</div>

						<hr></hr>
					</div>
				);
			})}
		</section>
	);
};

export default Experience;
