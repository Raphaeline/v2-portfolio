// hooks/useProjects.js
import { useQuery } from "react-query";
import supabase from "@/utils/supabaseClient";

const fetchProjects = async () => {
	const { data, error } = await supabase.from("projects").select();
	if (error) {
		throw new Error(error.message);
	}
	return data;
};

const useProjects = () => {
	return useQuery("projects", fetchProjects);
};

export default useProjects;
