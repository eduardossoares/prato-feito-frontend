import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useServerStatusQuery } from "@/hooks/use-server-status-query";

interface LastCheckedAtProps {
  isLoading: boolean;
}

export function LastCheckedAt({ isLoading }: LastCheckedAtProps) {
  const [nowTimestamp, setNowTimestamp] = useState<number>(Date.now());

  const { refetch, dataUpdatedAt } = useServerStatusQuery();

  function handleLastCheckedAt() {
    const difference = Math.abs(nowTimestamp - dataUpdatedAt);
    const validDataUpdatedAt = Number(dataUpdatedAt);
    if (Number.isNaN(validDataUpdatedAt) || difference < 0)
      return "data inválida";

    if (difference < 60000) return "agora";

    if (difference < 60 * 60000)
      return `há ${Math.floor(difference / 60000)}min`;

    if (difference < 24 * 60 * 60000)
      return `há ${Math.floor(difference / (60 * 60000))}h`;

    return `há ${Math.floor(difference / (24 * 60 * 60000))}d`;
  }

  function handleRefetch() {
    setNowTimestamp(Date.now());
    refetch();
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNowTimestamp(Date.now());
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-foreground-muted text-sm flex items-center gap-x-2">
        Última alteração:{" "}
        {isLoading ? (
          <Skeleton className="w-16 h-6 bg-foreground-muted/10" />
        ) : (
          handleLastCheckedAt()
        )}
      </span>
      <Button
        disabled={isLoading}
        onClick={handleRefetch}
        variant={"outline"}
        className={"w-full font-semibold hover:bg-black/5 sm:w-48"}
      >
        Verificar novamente
      </Button>
    </div>
  );
}
