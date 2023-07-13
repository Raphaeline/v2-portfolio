import React from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import supabase from "../utils/supabaseClient";

const About = () => {
  const { data, isError } = useQuery("profiles", async () => {
    const { data } = await supabase.from("profiles").select();
    return data;
  });

  if (isError) {
    return <p>Error occurred.</p>;
  }

  const isImage = data && data.filter((profile: any) => profile.isImageActive === true);

  return (
    <section id="about">
      <div>
        <p className="font-Code-Pro text-justify pb-10 indent-8">
          Hello people, you can call me <span className="font-black">Zul</span>, and sometimes I'm called <span className="font-bold">Mai</span> by my friends. I'm a 3rd year student majoring in Electrical Engineering at{" "}
          <span className="font-bold">Telkom University</span> in Bandung. and now I am also an Assistant in two different laboratories namely, <span className="font-black">Dasar Komputer</span> laboratory (practicum lab), and{" "}
          <span className="font-bold">Image Processing & Vision Laboratory</span> (research lab). and also I am a <span className="font-bold">Web Developer</span>.
        </p>
        {isImage?.map((profile: any) => (
          <div key={profile.id} className="">
            <img src={profile.image_url} alt="Profile" className="object-cover h-96 rounded-sm m-2 w-full shadow" />
            <p className="font-Code-Pro text-center italic">{profile.quotes}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
