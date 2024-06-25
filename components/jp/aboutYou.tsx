import React, { useEffect, useState } from "react";
import Image from "next/image";
import useProjects from "@/hooks/useAbout";

const About = () => {

	const { data, error } = useProjects();

	if (error) {
		return <p>Error occurred.</p>;
	}

	const isImage = data && data.filter((profile: any) => profile.isImageActive === true);

	return (
		<section id="about" className="bg-[#70aede] relative">
			<div className=" xl:mb-20 relative z-0 flex px-12 pt-24 xl:pt-48">
				{/* <div className="hidden xl:block absolute top-auto xl:top-12 right-0 -z-10">
          {isImage?.map((profile: any) => (
            <Image src={profile.image_url} alt="" width={700} height={500} className="w-[200px] xl:w-[700px] " />
          ))}
        </div> */}
				<div className="w-3/4 m-1 xl:m-4 relative z-10">
					<h1 className="text-[20px] sm:text-[30px] xl:text-[42px] 2xl:text-[56px] font-bold italic">ムハマド・アル・フィトラ ズルフィカール・アクバル</h1>
					<p className="font-Code-Pro text:sm sm:text-base xl:text-lg 2xl:text-xl">テルコム大学の電気エンジニアの学生</p>
					<div className="flex">
						<div className="flex mx-auto sm:mx-0 xl:mx-0">
							<a href="https://github.com/Raphaeline" className="p-1 xl:p-4 w-full" target="_blank">
								<Image src="/github.png" alt="Raphaelin's" width={50} height={50} className="hover:invert invert-0" />
							</a>
							<a href="https://www.instagram.com/zulfikhar1412/" className="p-1 xl:p-4 w-full" target="_blank">
								<Image src="/instagram.png" alt="" width={50} height={50} className="hover:invert invert-0" />
							</a>
							<a href="https://www.linkedin.com/in/zulfikhar-akbar/?locale=ja_JP" className="p-1 xl:p-4 w-full" target="_blank">
								<Image src="/linkedin.png" alt="" width={50} height={50} className="hover:invert invert-0" />
							</a>
							<a href="https://open.spotify.com/user/31nsjupqrny4uzbtxnfhzuyomqvq?si=493b7b19225b4ace" target="_blank" className="p-1 xl:p-4 w-full">
								<Image src="/spotify.png" alt="" width={50} height={50} className="hover:invert invert-0" />
							</a>
							<a href="mailto:zulfikhar.akbar1412@gmail.com" target="_blank" className="p-1 xl:p-4 w-full">
								<Image src="/mail3.png" alt="" width={60} height={60} className="hover:invert invert-0" />
							</a>
						</div>
					</div>
				</div>
				<div className="w-1/4 m-4"></div>
			</div>
			<div className="relative z-10 bg-gradient-to-t  from-[#0B0A27] from-50% text-white mb-0 pt-12">
				<h1 className="ml-[20px] xl:ml-[100px] text-[16px] sm:text-[20px] xl:text-[26px] 2xl:text-[36px] italic uppercase font-bold py-5 pt-20">アバウト・ミー</h1>
				<hr className="mb-10"></hr>
				<div className="ml-[20px] xl:ml-[100px] mr-[20px] xl:mr-0">
					<p className="font-Code-Pro w-30 xl:w-[670px] 2xl:w-[980px] text-sm xl:text-base 2xl:text-lg">
						私の名前はズルフィカールです。インドネシアのバンドンにあるテルコム大学で電気工学を専攻している学部3年生です。私の興味はソフトウェアとハードウェアの開発、特にウェブアプリケーションや人工知能などの分野にあります。現在の目標は、人工知能の分野で研究を行うことで、特に画像処理に力を入れています。
					</p>
					{/* <a href="/cv" className="flex flex-row hover:text-[#b4d725] w-[220px] bg-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="m12.707 7.293-1.414 1.414L15.586 13H7V4H5v11h10.586l-4.293 4.293 1.414 1.414L19.414 14l-6.707-6.707z" stroke="currentColor" />
            </svg>
            <p className="font-Code-Pro text-sm xl:text-base 2xl:text-lg">Check out My CV</p>
          </a> */}
				</div>
			</div>
		</section>
	);
};

export default About;
