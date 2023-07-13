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
  const isFrameworkSkills = data?.filter((skill:any) => skill.isFramework === true);
  const isProgramLanguages = data?.filter((skill:any) => skill.isLanguages === true);
  const isToolsSkills = data?.filter((skill:any) => skill.isTools === true);

  return (
    <section id="skills" className="py-10 flex flex-wrap justify-center">
      <div>
        <h1 className="text-center  font-Code-Pro text-xl font-black">LANGUAGES</h1>
        {isProgramLanguages?.map((skill:any) => (
          <div className="flex w-64 h-24 bg-[#7f78af] my-4 mx-3 rounded-sm text-white shadow-blue-950  shadow-lg" key={skill.id}>
            <div className="w-24 h-24 grid place-content-center">
              <img src={skill.icon_url} alt={skill.skill_name} width={100} height={100} className="w-20 p-2" />
            </div>

            <div className="p-4 flex">
              <h1 className="text-2xl font-Code-Pro font-bold self-center">{skill.skill_name}</h1>
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
      <div>
        <h1 className="text-center font-Code-Pro text-xl font-black">FRAMEWORKS</h1>
        {isFrameworkSkills?.map((skill:any) => (
          <div className="flex w-64 h-24 bg-[#7f78af] my-4 mx-3 rounded-sm text-white shadow-blue-950  shadow-lg" key={skill.id}>
            <div className="w-24 h-24 grid place-content-center">
              <img src={skill.icon_url} alt={skill.skill_name} width={100} height={100} className="w-20 p-2" />
            </div>

            <div className="p-4 flex">
              <h1 className="text-2xl font-Code-Pro font-bold self-center">{skill.skill_name}</h1>
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
      <div>
        <h1 className="text-center font-Code-Pro text-xl font-black">TOOLS</h1>
        {isToolsSkills?.map((skill:any) => (
          <div className="flex w-64 h-24 bg-[#7f78af] my-4 mx-3 rounded-sm text-white shadow-blue-950  shadow-lg" key={skill.id}>
            <div className="w-24 h-24 grid place-content-center">
              <img src={skill.icon_url} alt={skill.skill_name} width={100} height={100} className="w-20 p-2" />
            </div>

            <div className="p-4 flex">
              <h1 className="text-2xl font-Code-Pro font-bold self-center">{skill.skill_name}</h1>
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
    </section>
  );
};

export default Skills;
