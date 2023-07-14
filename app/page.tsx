"use client";
import React from "react";
import Image from "next/image";
import About from "../components/aboutYou";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Projects from "@/components/projects";
import Certification from "@/components/certification";
import { QueryClient, QueryClientProvider } from "react-query";
import Sidebar from "@/components/sidebar";

const Page = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-[#EBC7E6] flex text-[#4d325b] bg-cover h-full ">
        <Sidebar />
        <div className="p-10 xl:pl-[380px] w-full h-full">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certification />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Page;
