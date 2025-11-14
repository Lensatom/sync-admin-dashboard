import { GET } from "@/config/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetDispatches = () => {
  const { data: dispatches, ...rest } = useQuery({
    queryKey: ["dispatches"],
    queryFn: async () => {
      const response = await GET({
        route: "/tasks?limit=30&page=1",
      });
      return response.data;
    }
  });

  return { dispatches, ...rest };
};