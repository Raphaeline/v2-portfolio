"use client";
import React from "react";
import About from "@/components/jp/aboutYou";
import Skills from "@/components/jp/skills";
import Experience from "@/components/jp/experience";
import Projects from "@/components/jp/projects";
import Certification from "@/components/jp/certification";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "@/components/jp/navbar";


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
			</div>
		</QueryClientProvider>
	);
};

export default Page;
