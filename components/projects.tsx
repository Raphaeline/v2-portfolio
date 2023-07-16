import React from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import supabase from "../utils/supabaseClient";

const Projects = () => {
  const { data, isError } = useQuery("projects", async () => {
    const { data } = await supabase.from("projects").select();
    return data;
  });

  if (isError) {
    return <p>Error occurred.</p>;
  }

  return (
    <section id="project" className="py-36 w-full">
      <h1 className="pl-3 font-Code-Pro text-xl font-black">PROJECTS</h1>
      {data?.map((project: any) => (
        <a href={project.url} target="_blank" className="flex bg-[#bf4343] p-4 hover:bg-[#e68f8f] shadow-md hover:shadow-xl hover:rounded-sm text-[#FFEADD] hover:text-[#3e1c1c] ">
          {/* <div className="xl:w-52 w-auto m-2">
            <img src={project.image_url} alt="{project.project_name}" className="rounded-sm shadow-lg" />
          </div> */}
          <div className="m-2">
            <h1 className="font-Code-Pro font-black text-xl  ">{project.project_name}</h1>
            <p className="font-Code-Pro text-lg font-black mb-2">{project.role}</p>
            <p className="font-Code-Pro font-thin my-1 ">{project.description}</p>
            <a href={project.repo_url} target="_blank" className="font-Code-Pro font-thin my-1 hover:underline hover:text-[#6f3669] italic">
              {project.repo_name}
            </a>
            <div className="xl:w-96 w-auto my-2">
              <img src={project.image_url} alt="{project.project_name}" className="rounded-sm shadow-lg" />
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};

export default Projects;
