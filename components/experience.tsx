import React from "react";
import Image from "next/image";
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
    <section id="experience">
      <h1 className="pl-3 font-Code-Pro text-xl font-black">EXPERIENCE</h1>
      {data?.map((experience:any) => {
        const fromDate = new Date(experience.from);
        const formattedFrom = `${months[fromDate.getMonth()]} ${fromDate.getFullYear()}`;

        const toDate = experience.until ? new Date(experience.until) : null;
        const formattedUntil = toDate ? `${months[toDate.getMonth()]} ${toDate.getFullYear()}` : "Now";

        return (
          <div className="flex bg-[#EBC7E6] p-4 hover:bg-[#c39ebe] hover:shadow-lg hover:rounded-sm text-[#765170] hover:text-[#4d325b]">
            <div className="w-60">
              <h1 className="font-Code-Pro opacity-50 ">
                {formattedFrom} - {formattedUntil}
              </h1>
            </div>
            <div className="">
              <p className="font-Code-Pro font-black text-3xl mb-2 ">{experience.name}</p>
              <p className="font-Code-Pro font-bold text-lg my-1 ">{experience.role}</p>
              <p className="my-1 w-[30rem] font-Code-Pro ">{experience.description}</p>
              <a href={experience.url} target="_blank" rel="noopener noreferrer" className="my-1 font-Code-Pro hover:text-purple-800 underline italic hover:no-underline">
                {experience.url_name}
              </a>

              {/* <p className="m-1 bg-[#423d6a] rounded-full text-sm w-auto py-1 px-2 text-center text-white opacity-75" key={index}>
                {tag}
              </p> */}
            </div>
            <div className="cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute backface-hidden w-full h-full">{/* back content */}</div>
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden">{/* front content */}</div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Experience;
