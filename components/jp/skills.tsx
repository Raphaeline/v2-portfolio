import React from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import supabase from "../../utils/supabaseClient";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

interface SkillItemProps {
	skill: {
		id: string;
		icon_url: string;
		skill_name: string;
	};
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
	});

	const animation = useSpring({
		opacity: inView ? 1 : 0,
		transform: inView ? "translateY(0)" : "translateY(20px)",
	});

	return (
		<animated.div ref={ref} style={animation} className="flex 2xl:w-[340px] xl:w-48 w-14 h-14 2xl:h-20 bg-[#caff00] text-black 2xl:my-6 xl:my-4 my-2 mx-1 rounded-sm  shadow-[#200a0a] shadow-md" key={skill?.id}>
			<div className="w-14 h-14 grid place-content-center my-auto">
				<img src={skill.icon_url} alt={skill.skill_name} width={100} height={100} className="w-20 p-2" />
			</div>
			<div className="hidden p-4 xl:flex">
				<h1 className="font-Code-Pro font-bold self-center text-base 2xl:text-xl">{skill.skill_name}</h1>
			</div>
		</animated.div>
	);
};

const Skills: React.FC = () => {
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
		<section id="skills" className="py-10 bg-[#0b0a27] text-white">
			<div className="flex flex-wrap justify-center">
				<div>
					{isProgramLanguages?.map((skill: any) => (
						<SkillItem key={skill.id} skill={skill} />
					))}
				</div>
				<div>
					{isFrameworkSkills?.map((skill: any) => (
						<SkillItem key={skill.id} skill={skill} />
					))}
				</div>
				<div>
					{isToolsSkills?.map((skill: any) => (
						<SkillItem key={skill.id} skill={skill} />
					))}
				</div>
				<div>
					{isHardwareSkills?.map((skill: any) => (
						<SkillItem key={skill.id} skill={skill} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
