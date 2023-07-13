import React from "react";

type CertificateProps = {
  certificate: {
    certificate_name: string;
    organizer: string;
    description: string;
    issued: string;
    expires: string;
    image_url: string;
  };
};

const Certificate: React.FC<CertificateProps> = ({ certificate }) => {
  return (
    <div>
      <h3>{certificate.certificate_name}</h3>
      <p>Organizer: {certificate.organizer}</p>
      <p>Description: {certificate.description}</p>
      <p>Issued: {certificate.issued}</p>
      <p>Expires: {certificate.expires}</p>
      <img src={certificate.image_url} alt={certificate.certificate_name} />
    </div>
  );
};

export default Certificate;
