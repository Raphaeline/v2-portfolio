import React from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import supabase from "../utils/supabaseClient";

const Skills = () => {
  const { data, isError } = useQuery("skills", async () => {
    const { data } = await supabase.from("skills").select();
    return data;
  });

  if (isError) {
    return <p>Error occurred.</p>;
  }
  const isFrameworkSkills = data?.filter((skill: any) => skill.isFramework === true);
  const isProgramLanguages = data?.filter((skill: any) => skill.isLanguages === true);
  const isToolsSkills = data?.filter((skill: any) => skill.isTools === true);
  const isHardwareSkills = data?.filter((skill: any) => skill.isHardware === true);
  return (
    <section id="skills" className="py-16 ">
      <h1 className="xl:hidden block pl-3 font-Code-Pro text-xl font-black">SKILLS</h1>
      <div className="flex flex-wrap justify-center">
        <div className="">
          <h1 className="xl:block hidden text-center font-Code-Pro text-xl font-black">LANGUAGES</h1>
          {isProgramLanguages?.map((skill: any) => (
            <div className="flex xl:w-48 w-14 h-14 bg-[#7f78af] xl:my-4 my-2 mx-1 rounded-sm text-white shadow-blue-950  shadow-md" key={skill.id}>
              <div className="w-14 h-14 grid place-content-center">
                <img src={skill.icon_url} alt={skill.skill_name} width={100} height={100} className="w-20 p-2" />
              </div>

              <div className="hidden p-4 xl:flex">
                <h1 className=" text-md font-Code-Pro font-bold self-center">{skill.skill_name}</h1>
                {/* <p className="font-Code-Pro">{skill.description}</p>
            <div className="flex">
              <p>
                <span>{skill.level}</span>%
              </p>
              <div>..............................</div>
            </div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <h1 className="xl:block hidden text-center font-Code-Pro text-xl font-black">FRAMEWORKS</h1>
          {isFrameworkSkills?.map((skill: any) => (
            <div className="flex xl:w-48 w-14 h-14 bg-[#7f78af] xl:my-4 my-2 mx-1 rounded-sm text-white shadow-blue-950  shadow-md" key={skill.id}>
              <div className="w-14 h-14 grid place-content-center">
                <img src={skill.icon_url} alt={skill.skill_name} width={100} height={100} className="w-20 p-2" />
              </div>

              <div className="hidden p-4 xl:flex">
                <h1 className=" text-md font-Code-Pro font-bold self-center">{skill.skill_name}</h1>
                {/* <p className="font-Code-Pro">{skill.description}</p>
              <div className="flex">
                <p>
                  <span>{skill.level}</span>%
                </p>
                <div>..............................</div>
              </div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <h1 className="xl:block hidden text-center font-Code-Pro text-xl font-black">TOOLS</h1>
          {isToolsSkills?.map((skill: any) => (
            <div className="flex xl:w-48 w-14 h-14 bg-[#7f78af] xl:my-4 my-2 mx-1 rounded-sm text-white shadow-blue-950  shadow-md" key={skill.id}>
              <div className="w-14 h-14 grid place-content-center">
                <img src={skill.icon_url} alt={skill.skill_name} width={100} height={100} className="w-20 p-2" />
              </div>

              <div className="hidden p-4 xl:flex">
                <h1 className="font-Code-Pro font-bold self-center">{skill.skill_name}</h1>
                {/* <p className="font-Code-Pro">{skill.description}</p>
              <div className="flex">
                <p>
                  <span>{skill.level}</span>%
                </p>
                <div>..............................</div>
              </div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <h1 className="xl:block hidden text-center font-Code-Pro text-xl font-black">HARDWARE</h1>
          {isHardwareSkills?.map((skill: any) => (
            <div className="flex xl:w-48 w-14 h-14 bg-[#7f78af] xl:my-4 my-2 mx-1 rounded-sm text-white shadow-blue-950  shadow-md" key={skill.id}>
              <div className="w-14 h-14 grid place-content-center">
                <img src={skill.icon_url} alt={skill.skill_name} width={100} height={100} className="w-20 p-2" />
              </div>

              <div className="hidden p-4 xl:flex">
                <h1 className="font-Code-Pro font-bold self-center">{skill.skill_name}</h1>
                {/* <p className="font-Code-Pro">{skill.description}</p>
              <div className="flex">
                <p>
                  <span>{skill.level}</span>%
                </p>
                <div>..............................</div>
              </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
