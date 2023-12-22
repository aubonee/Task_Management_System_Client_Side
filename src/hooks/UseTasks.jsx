import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const UseTasks = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    const {  data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/alltask?email=${user.email}`);
            return res.data;
        }
    })

    return [tasks, refetch]
};


export default UseTasks;