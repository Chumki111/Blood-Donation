import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"
import { getUser } from "../api/auth";


const useGetUser = () => {
    const { user, loading } = useAuth();
    const { data: userInfo, isLoading, refetch } = useQuery({
        enabled: !loading && !!user?.email,
        queryFn: async () => getUser(user?.email),
        queryKey: ['role']
    })
    return [userInfo, isLoading, refetch];
}

export default useGetUser