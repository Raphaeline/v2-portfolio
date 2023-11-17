import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { useQuery } from "react-query";
import supabase from "../utils/supabaseClient";

const Experience = () => {
  const { data, isError } = useQuery("experience", async () => {
    const { data } = await supabase.from("experience").select().order("from", { ascending: false });
    return data;
  });

  if (isError) {
    return <p>Error occurred.</p>;
  }

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <section id="experience" className="py-36 w-full">
      <h1 className="pl-3 font-Code-Pro text-xl font-black">EXPERIENCE</h1>
      {data?.map((experience: any) => {
        const fromDate = new Date(experience.from);
        const formattedFrom = `${months[fromDate.getMonth()]} ${fromDate.getFullYear()}`;

        const toDate = experience.until ? new Date(experience.until) : null;
        const formattedUntil = toDate ? `${months[toDate.getMonth()]} ${toDate.getFullYear()}` : "Now";

        return (
          <div className="xl:flex bg-[#bf4343] p-4 my-10 hover:bg-[#e68f8f] shadow-md hover:shadow-lg rounded-sm hover:rounded-sm text-[#FFEADD] hover:text-[#3e1c1c]">
            <div className="w-60">
              <h1 className="font-Code-Pro opacity-50 ">
                {formattedFrom} - {formattedUntil}
              </h1>
            </div>
            <div className="w-full">
              <p className="font-Code-Pro font-black xl:text-2xl text-lg mb-2 ">{experience.name}</p>
              <p className="font-Code-Pro font-bold text-lg my-1 flex">
                {experience.role}&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                &nbsp;
                {experience.work_loc}
              </p>
              <p className="my-1  font-Code-Pro w-full">{experience.description}</p>
              <a href={experience.url} target="_blank" rel="noopener noreferrer" className="my-1 font-Code-Pro hover:text-[#533870] underline italic hover:no-underline flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                </svg>
                {experience.url_name}
              </a>

              {/* <p className="m-1 bg-[#423d6a] rounded-full text-sm w-auto py-1 px-2 text-center text-white opacity-75" key={index}>
                {tag}
              </p> */}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Experience;
