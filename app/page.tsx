"use client";
import React from "react";
import Image from "next/image";
import About from "../components/aboutYou";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Projects from "@/components/projects";
import Certification from "@/components/certification";
import { QueryClient, QueryClientProvider } from "react-query";

const Page = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-[#EBC7E6] flex text-[#4d325b]">
        <div className="w-[380px] h-full p-10 fixed">
          <p className="font-Code-Pro py-1">hi my name is</p>
          <h1 className="text-4xl font-grape-nuts italic py-1">Muhamad Al Fitra Zulfikhar Akbar</h1>
          <h2 className="pt -5 font-Code-Pro">
            Undergraduate Electrical Engineer at <span className="font-black">Telkom University</span>, also as Teaching Assistant in <span className="font-black">Daskom Laboratory</span>
          </h2>
          <div className="py-10">
            <ul className="font-Code-Pro text-center">
              <li className="pb-4">
                <a href="#about" className="relative px-6 py-3 font-bold text-black group">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#c0afe4] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                  <span className="relative">About Me</span>
                </a>
              </li>
              <li className="py-4">
                <a href="#skills" className="relative px-6 py-3 font-bold text-black group">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#c0afe4] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                  <span className="relative">Skills</span>
                </a>
              </li>
              <li className="py-4">
                <a href="#experience" className="relative px-6 py-3 font-bold text-black group">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#c0afe4] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                  <span className="relative">Experience</span>
                </a>
              </li>
              <li className="py-4">
                <a href="#project" className="relative px-6 py-3 font-bold text-black group">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#c0afe4] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                  <span className="relative">Projects</span>
                </a>
              </li>
              <li className="py-4">
                <a href="#certificate" className="relative px-6 py-3 font-bold text-black group">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#c0afe4] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                  <span className="relative">Certification</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <a href="https://github.com/Raphaeline" className="p-2" target="_blank">
              <Image src="/github.png" alt="Raphaelin's" width={30} height={30} className="hover:invert" />
            </a>
            <a href="https://www.instagram.com/zulfikhar1412/" className="p-2" target="_blank">
              <Image src="/instagram.png" alt="" width={30} height={30} className="hover:invert" />
            </a>
            <a href="https://www.linkedin.com/in/muhamad-al-fitra-zulfikhar-akbar-2a863a21a/" className="p-2" target="_blank">
              <Image src="/linkedin.png" alt="" width={30} height={30} className="hover:invert" />
            </a>
            <a href="https://open.spotify.com/user/31nsjupqrny4uzbtxnfhzuyomqvq?si=493b7b19225b4ace" target="_blank" className="p-2 ">
              <Image src="/spotify.png" alt="" width={30} height={30} className="hover:invert" />
            </a>
          </div>
        </div>

        <div className="p-10 pl-[380px]">
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
