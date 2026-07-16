import { useQuery } from "@tanstack/react-query";
import api from "@/services/api";

interface UseServerStatusQueryResponse {
  updated_at: string;
  dependencies: {
    database: {
      version: string;
      max_connections: string;
      opened_connections: string;
    };
  };
}

export function useServerStatusQuery() {
  return useQuery<UseServerStatusQueryResponse>({
    refetchInterval: 1000,
    queryKey: ["server-status"],
    queryFn: async () => {
      const response = await api.get("/status");
      return response.data;
    },
  });
}
