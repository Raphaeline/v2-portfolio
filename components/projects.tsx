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
    <section id="project" className="py-10">
      <h1 className="pl-3 font-Code-Pro text-xl font-black">PROJECTS</h1>
      {data?.map((project: any) => (
        <a href={project.url} target="_blank" className="flex bg-[#EBC7E6] p-4 hover:bg-[#c39ebe] hover:shadow-ls hover:rounded-sm text-[#765170] hover:text-[#4d325b] my-2">
          <div className="w-52 m-2">
            <img src={project.image_url} alt="{project.project_name}" className="rounded-sm shadow-lg" />
          </div>
          <div className="m-2">
            <h1 className="font-Code-Pro font-black text-xl mb-2 ">{project.project_name}</h1>
            <p className="font-Code-Pro font-thin my-1 ">{project.description}</p>
            <a href={project.repo_url} target="_blank" className="font-Code-Pro font-thin my-1 hover:underline hover:text-[#6f3669] italic">
              {project.repo_name}
            </a>
          </div>
        </a>
      ))}
    </section>
  );
};

export default Projects;
