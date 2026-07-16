import { useServerStatusQuery } from "@/hooks/use-server-status-query";

export function StatusPage() {
  const { data } = useServerStatusQuery();
  return (
    <div>
      <h1>{data?.updated_at}</h1>
    </div>
  );
}
