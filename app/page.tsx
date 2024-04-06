"use client";
import React from "react";
import Image from "next/image";
import About from "../components/aboutYou";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Projects from "@/components/projects";
import Certification from "@/components/certification";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../components/navbar";

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
