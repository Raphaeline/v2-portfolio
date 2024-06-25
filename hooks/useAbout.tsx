// hooks/useProjects.js
import { useQuery } from "react-query";
import supabase from "@/utils/supabaseClient";

const fetchProjects = async () => {
	const { data, error } = await supabase.from("profiles").select();
	if (error) {
		throw new Error(error.message);
	}
	return data;
};

const useAbout = () => {
	return useQuery("profiles", fetchProjects);
};

export default useAbout;
