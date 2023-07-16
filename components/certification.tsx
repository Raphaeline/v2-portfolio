import React from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import supabase from "../utils/supabaseClient";

const Certification = () => {
  const { data, isError } = useQuery("certification", async () => {
    const { data } = await supabase.from("certification").select().order("issued", { ascending: false });
    return data;
  });

  if (isError) {
    return <p>Error occurred.</p>;
  }

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <section id="certificate" className="py-36">
      <h1 className="pl-3 font-Code-Pro text-xl font-black uppercase">Licenses & Certificates</h1>
      {data?.map((certification: any) => {
        const issuedDate = new Date(certification.issued);
        const issuedMonth = months[issuedDate.getMonth()];
        const issuedYear = issuedDate.getFullYear();

        const expiresDate = certification.expires ? new Date(certification.expires) : null;
        const expiresMonth = expiresDate ? months[expiresDate.getMonth()] : "-";
        const expiresYear = expiresDate ? expiresDate.getFullYear() : "-";
        return (
          <div className="xl:flex my-4 p-4 bg-[#bf4343] shadow-md shadow-[#661e1e]  rounded-sm text-[#FFEADD]" key={certification.id}>
            <div className="w-24 h-24 grid place-content-center">
              <img src={certification.image_url} alt={certification.organizer} width={100} height={100} className="w-20 p-2" />
            </div>

            <div className="px-2 xl:w-72">
              <h1 className="font-Code-Pro font-black xl:text-2xl text-sm xl:mb-2 mb-0">{certification.certificate_name}</h1>
              <p className="font-Code-Pro xl:block hidden">Organizer &nbsp;&nbsp;&nbsp;&nbsp;: {certification.organizer}</p>
              <p className="font-Code-Pro xl:block hidden">Issued &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {`${issuedMonth} ${issuedYear}`}</p>
              <p className="font-Code-Pro xl:block hidden">Expires &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {`${expiresMonth} ${expiresYear}`}</p>
              <p className="font-Code-Pro xl:block hidden">Credential ID : {certification.credential_id}</p>
            </div>
            <div className="w-96 xl:block hidden">
              <p className="font-Code-Pro ">{certification.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Certification;
