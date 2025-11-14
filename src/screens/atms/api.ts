import { GET } from "@/config/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetAtms = () => {
  const { data: atms, ...rest } = useQuery({
    queryKey: ["atms"],
    queryFn: async () => {
      const response = await GET({
        route: "/admin/atms",
      });
      return response.data;
    }
  });

  return { atms, ...rest };
};