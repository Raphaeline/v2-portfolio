"use client";
import React from "react";
import About from "../../components/id/aboutYou";
import Skills from "../../components/id/skills";
import Experience from "../../components/id/experience";
import Projects from "@/components/id/projects";
import Certification from "@/components/id/certification";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../../components/en/navbar";

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
