import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="xl:w-[280px] w-[180px] h-full p-10 fixed xl:block bg-[#bf4343] hidden shadow-xl shadow-black">
      <div className="grid place-content-center h-full">
        <div className="py-10">
          <ul className="font-Code-Pro text-center">
            <li className="pb-4">
              <a href="#about" className="relative lg:px-6 lg:py-3 px-3 py-2 font-bold text-black group">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#932727] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-[#FFEADD]"></span>
                <span className="relative xl:text-base text-sm text-[#FFEADD]">About Me</span>
              </a>
            </li>
            <li className="py-4">
              <a href="#skills" className="relative lg:px-6 lg:py-3 px-3 py-2 font-bold text-black group">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#932727] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-[#FFEADD]"></span>
                <span className="relative xl:text-base text-xs text-[#FFEADD]">Skills</span>
              </a>
            </li>
            <li className="py-4">
              <a href="#experience" className="relative lg:px-6 lg:py-3 px-3 py-2 font-bold text-black group">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#932727] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-[#FFEADD]"></span>
                <span className="relative xl:text-base text-xs text-[#FFEADD]">Experience</span>
              </a>
            </li>
            <li className="py-4">
              <a href="#project" className="relative lg:px-6 lg:py-3 px-3 py-2 font-bold text-black group">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#932727] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-[#FFEADD]"></span>
                <span className="relative xl:text-base text-xs text-[#FFEADD]">Projects</span>
              </a>
            </li>
            {/* <li className="pt-4">
              <a href="#certificate" className="relative lg:px-6 lg:py-3 px-3 py-2 font-bold text-black group">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#932727] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-[#FFEADD]"></span>
                <span className="relative xl:text-base text-xs text-[#FFEADD]">Certificate</span>
              </a>
            </li> */}
          </ul>
        </div>
        <div className="flex justify-center">
          <a href="https://github.com/Raphaeline" className="lg:p-2 p-0.5 w-full" target="_blank">
            <Image src="/github.png" alt="Raphaelin's" width={30} height={30} className="hover:invert-0 invert" />
          </a>
          <a href="https://www.instagram.com/zulfikhar1412/" className="lg:p-2 p-0.5 w-full" target="_blank">
            <Image src="/instagram.png" alt="" width={30} height={30} className="hover:invert-0 invert" />
          </a>
          <a href="https://www.linkedin.com/in/muhamad-al-fitra-zulfikhar-akbar-2a863a21a/" className="lg:p-2 p-0.5 w-full" target="_blank">
            <Image src="/linkedin.png" alt="" width={30} height={30} className="hover:invert-0 invert" />
          </a>
          <a href="https://open.spotify.com/user/31nsjupqrny4uzbtxnfhzuyomqvq?si=493b7b19225b4ace" target="_blank" className="lg:p-2 p-0.5 w-full">
            <Image src="/spotify.png" alt="" width={30} height={30} className="hover:invert-0 invert" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
