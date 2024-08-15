import React from "react";
import Image from "next/image";
import useProjects from "@/hooks/useProjects";

const Projects = () => {
	const { data, error } = useProjects();

	if (error) {
		return <p>Error occurred.</p>;
	}

	return (
		<section id="project" className="bg-[#0b0a27] text-white">
			<h1 className="ml-[20px] xl:ml-[100px] text-[16px] sm:text-[20px] xl:text-[26px] 2xl:text-[36px] italic uppercase font-bold py-5 mt-0">project</h1>
			<hr></hr>
			<div className="flex flex-row justify-center ">
				{data?.map((project: any) => (
					<div className="flex flex-col w-[150px] xl:w-[400px] my-10 mx-auto relative overflow-hidden group bg-[#0b0a27] hover:bg-[#111331] rounded-lg shadow-lg">
						<div className="mx-4 my-10">
							<h1 className="text-[12px] xl:text-[22px] font-bold italic my-1">{project.project_name}</h1>
							<p className="text-xs xl:text-base font-Code-Pro my-4 text-[#caff00]">{project.role}</p>
							<p className="text-xs xl:text-sm font-Code-Pro t my-4">{project.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
