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
import Spline from "@splinetool/react-spline";

const Page = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen relative">
        <div className="fixed inset-0 -z-10 opacity-30">
          <Spline scene="https://prod.spline.design/aOEw6gjrQlZoBN08/scene.splinecode" />
        </div>
        <div className="flex text-[#FFEADD] bg-cover h-full">
          <Sidebar />
          <div className="p-10 xl:pl-[380px] w-full h-full">
            <About />
            <Skills />
            <Experience />
            <Projects />
            {/* <Certification /> */}
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Page;
