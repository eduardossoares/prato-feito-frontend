import { CheckIcon, WarningIcon } from "@phosphor-icons/react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useMetadata } from "@/hooks/use-metadata";
import { useServerStatusQuery } from "@/hooks/use-server-status-query";
import { LastCheckedAt } from "@/pages/status/components/last-checked-at";
import { cn } from "@/utils/cn";

export function StatusPage() {
  useMetadata("Página de Status");
  const { isSuccess, isError, isLoading, isRefetching } =
    useServerStatusQuery();

  const loadingStatus = isLoading || isRefetching;

  return (
    <div className="bg-background min-h-screen flex justify-center px-4 py-8 sm:px-6 sm:pt-12">
      <div className="max-w-2xl w-full">
        <span className="font-medium font-serif italic text-xl text-foreground">
          prato feito<span className="text-accent text-2xl">.</span>
        </span>

        <div className="mt-8 space-y-4 sm:mt-12">
          <div className="bg-surface border border-border rounded-2xl flex flex-col items-start shadow-sm/5 gap-4 p-5 sm:min-h-28 sm:flex-row sm:items-center sm:px-6">
            {loadingStatus ? (
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
                {loadingStatus ? (
                  <Skeleton className="h-6 w-full max-w-full bg-foreground-muted/10 sm:w-96" />
                ) : (
                  <>
                    {isSuccess && "Todos os sistemas estão operacionais"}
                    {isError && "Os servidores estão inoperantes"}
                  </>
                )}
              </h1>
              <span className="text-foreground-muted">
                {loadingStatus ? (
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
                {loadingStatus ? (
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
                {loadingStatus ? (
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

          <LastCheckedAt isLoading={loadingStatus} />
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
