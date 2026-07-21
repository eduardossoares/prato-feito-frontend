import { CheckIcon, WarningIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useServerStatusQuery } from "@/hooks/use-server-status-query";
import { cn } from "@/utils/cn";
import { useMetadata } from "@/hooks/use-metadata";

export function StatusPage() {
  useMetadata("Página de Status");
  const [nowTimestamp, setNowTimestamp] = useState<number>(Date.now());
  const { isSuccess, isError, isLoading, refetch, dataUpdatedAt } =
    useServerStatusQuery();

  function handleLastUpdate() {
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
    <div className="bg-background min-h-screen flex justify-center px-4 py-8 sm:px-6 sm:pt-12">
      <div className="max-w-2xl w-full">
        <span className="font-medium font-serif italic text-xl text-foreground">
          prato feito<span className="text-accent text-2xl">.</span>
        </span>

        <div className="mt-8 space-y-4 sm:mt-12">
          <div className="bg-surface border border-border rounded-2xl flex flex-col items-start shadow-sm/5 gap-4 p-5 sm:min-h-28 sm:flex-row sm:items-center sm:px-6">
            {isLoading ? (
              <Skeleton className="w-12 h-12 bg-foreground-muted/10" />
            ) : (
              <div
                className={cn(
                  "rounded-full h-12 w-12 flex items-center justify-center",
                  isSuccess && "bg-secondary/15",
                  isError && "bg-danger/60",
                )}
              >
                <div
                  className={cn(
                    "rounded-full  h-7 w-7 flex items-center justify-center",
                    isSuccess && "bg-secondary/20",
                    isError && "bg-danger",
                  )}
                >
                  {isSuccess && (
                    <CheckIcon
                      className="text-secondary"
                      size={16}
                      weight="bold"
                    />
                  )}

                  {isError && (
                    <WarningIcon
                      className="text-white"
                      size={16}
                      weight="bold"
                    />
                  )}
                </div>
              </div>
            )}
            <div className="flex flex-col gap-y-1 min-w-0">
              <h1 className="font-serif font-medium text-xl text-foreground">
                {isLoading ? (
                  <Skeleton className="h-6 w-full max-w-full bg-foreground-muted/10 sm:w-96" />
                ) : (
                  <>
                    {isSuccess && "Todos os sistemas estão operacionais"}
                    {isError && "Os servidores estão inoperantes"}
                  </>
                )}
              </h1>
              <span className="text-foreground-muted">
                {isLoading ? (
                  <Skeleton className="h-6 w-full max-w-full bg-foreground-muted/10 sm:w-[31.25rem]" />
                ) : (
                  <>
                    {isSuccess &&
                      "A aplicação e o banco de dados estão funcionando normalmente."}
                    {isError && "Já estamos trabalhando nisso."}
                  </>
                )}
              </span>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-2xl shadow-sm/5">
            <div className="flex flex-col gap-3 py-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex flex-col ">
                <h2 className="font-bold text-foreground">Aplicação</h2>
                <span className="text-foreground-muted text-sm">
                  Site e recursos principais
                </span>
              </div>
              <span
                className={cn(
                  "font-semibold",
                  isSuccess && "text-secondary",
                  isError && "text-danger",
                )}
              >
                {isLoading ? (
                  <Skeleton className="h-6 w-32 bg-foreground-muted/10" />
                ) : (
                  <>
                    {isSuccess && "Operacional"}
                    {isError && "Inoperante"}
                  </>
                )}
              </span>
            </div>

            <Separator className={"h-px"} />

            <div className="flex flex-col gap-3 py-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex flex-col ">
                <h2 className="font-bold text-foreground">Banco de dados</h2>
                <span className="text-foreground-muted text-sm">
                  Armazenamento e acesso aos dados
                </span>
              </div>
              <span
                className={cn(
                  "font-semibold",
                  isSuccess && "text-secondary",
                  isError && "text-danger",
                )}
              >
                {isLoading ? (
                  <Skeleton className="h-6 w-32 bg-foreground-muted/10" />
                ) : (
                  <>
                    {isSuccess && "Operacional"}
                    {isError && "Inoperante"}
                  </>
                )}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-foreground-muted text-sm flex items-center gap-x-2">
              Última alteração:{" "}
              {isLoading ? (
                <Skeleton className="w-16 h-6 bg-foreground-muted/10" />
              ) : (
                handleLastUpdate()
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
        </div>

        <div className="text-foreground-muted flex gap-x-2 text-sm justify-center mt-16 sm:mt-28">
          <span>
            prato feito
            <span className="text-accent">.</span>
          </span>
          <span>·</span>
          <span>página de status</span>
        </div>
      </div>
    </div>
  );
}
