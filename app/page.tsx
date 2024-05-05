"use client";
import React from "react";
import Image from "next/image";
import About from "../components/en/aboutYou";
import Skills from "../components/en/skills";
import Experience from "../components/en/experience";
import Projects from "@/components/en/projects";
import Certification from "@/components/en/certification";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../components/en/navbar";

const Page = () => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<div className="bg-black">
				<Navbar />
				<div>
					<About />
					<Skills />
					<Experience />
					<Certification />
					<Projects />
				</div>
				{/* <div className="flex  bg-[#0B0A27] p-4">
          <p className="text-white italic">sssss</p>
        </div> */}
			</div>
		</QueryClientProvider>
	);
};

export default Page;
