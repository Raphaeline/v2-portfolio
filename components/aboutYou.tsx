import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import supabase from "../utils/supabaseClient";

const About = () => {
  const { data, isError } = useQuery("profiles", async () => {
    const { data } = await supabase.from("profiles").select();
    return data;
  });

  const [typedName, setTypedName] = useState("");
  const name = "Muhamad Al Fitra Zulfikhar Akbar";

  useEffect(() => {
    typeEffect();
  }, []);

  const typeEffect = async () => {
    for (let i = 0; i <= name.length; i++) {
      setTypedName(name.slice(0, i));
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  };

  if (isError) {
    return <p>Error occurred.</p>;
  }

  const isImage = data && data.filter((profile: any) => profile.isImageActive === true);

  return (
    <section id="about" className="">
      <div className="hidden xl:block">
        <p className="font-Code-Pro lg:text-base text-sm py-1">Hi my name is..</p>
        <div className="relative lg:px-8 lg:py-6 px-3 py-2 my-4 font-bold group">
          <span className=" absolute inset-0 h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#bf4343] "></span>
          <span className="absolute inset-0 h-full border-4 border-[#FFEADD]"></span>
          <span className="relative xl:text-4xl text-lg font-Code-Pro font-bold py-1">{typedName}</span>
        </div>
        {/* <h1 className="xl:text-4xl text-lg font-Code-Pro font-bold py-1">Muhamad Al Fitra Zulfikhar Akbar</h1> */}
        <h1 className="xl:text-2xl text-lg xl:block hidden font-bold font-Code-Pro">
          Undergraduate Electrical Engineer at <span className="font-black">Telkom University</span>, also as Teaching Assistant in <span className="font-black">Daskom Laboratory</span>
        </h1>
      </div>
      <div className="xl:hidden block">
        <p className="font-Code-Pro text-base py-1">hi my name is..</p>
        <div className="relative px-3 py-2 my-4 font-bold group">
          <span className="absolute inset-0 h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#bf4343] "></span>
          <span className="absolute inset-0 h-full border-4 border-[#FFEADD]"></span>
          <span className="relative text-2xl font-Code-Pro font-bold py-1">{typedName}</span>
        </div>
      </div>
      <div>
        <p className="font-Code-Pro text-justify py-4 indent-8">
          Hello people, you can call me <span className="font-black">Zul</span>, and sometimes I'm called <span className="font-bold">Mai</span> by my friends. I'm a 3rd year student majoring in Electrical Engineering at{" "}
          <span className="font-bold">Telkom University</span> in Bandung. and now I am also an Assistant in two different laboratories namely, <span className="font-black">Dasar Komputer</span> laboratory (practicum lab), and{" "}
          <span className="font-bold">Image Processing & Vision Laboratory</span> (research lab). and also I am a <span className="font-bold">Web Developer</span>.
        </p>
        {isImage?.map((profile: any) => (
          <div key={profile.id} className="">
            <img src={profile.image_url} alt="Profile" className="object-cover h-72 rounded-md m-2 w-full shadow-md shadow-[#7f78af] " />
            <p className="font-Code-Pro text-center italic">{profile.quotes}</p>
          </div>
        ))}
      </div>
      <div className="xl:hidden flex justify-center">
        <div className="flex ">
          <a href="https://github.com/Raphaeline" className="lg:p-2 p-4 w-full" target="_blank">
            <Image src="/github.png" alt="Raphaelin's" width={30} height={30} className="hover:invert-0 invert" />
          </a>
          <a href="https://www.instagram.com/zulfikhar1412/" className="lg:p-2 p-4 w-full" target="_blank">
            <Image src="/instagram.png" alt="" width={30} height={30} className="hover:invert-0 invert" />
          </a>
          <a href="https://www.linkedin.com/in/muhamad-al-fitra-zulfikhar-akbar-2a863a21a/" className="lg:p-2 p-4 w-full" target="_blank">
            <Image src="/linkedin.png" alt="" width={30} height={30} className="hover:invert-0 invert" />
          </a>
          <a href="https://open.spotify.com/user/31nsjupqrny4uzbtxnfhzuyomqvq?si=493b7b19225b4ace" target="_blank" className="lg:p-2 p-4 w-full">
            <Image src="/spotify.png" alt="" width={30} height={30} className="hover:invert-0 invert" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
