import { CheckIcon, WarningIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useServerStatusQuery } from "@/hooks/use-server-status-query";
import { cn } from "@/utils/cn";
import { Skeleton } from "@/components/ui/skeleton";

type UnitTime = {
  limit: number;
  duration: number;
  label: "min" | "h" | "d";
};

const units: UnitTime[] = [
  {
    label: "min",
    duration: 60_000,
    limit: 60 * 60_000,
  },
  {
    label: "h",
    duration: 60 * 60_000,
    limit: 24 * 60 * 60_000,
  },
  {
    label: "d",
    duration: 24 * 60 * 60_000,
    limit: 30 * 24 * 60 * 60_000,
  },
];

export function StatusPage() {
  const { isSuccess, isError, isLoading, refetch, dataUpdatedAt } =
    useServerStatusQuery();

  function handleUpdatedAtCalc() {
    const nowTimestamp = Date.now();
    const updatedDateTimestamp = new Date(dataUpdatedAt).getTime();
    const difference = nowTimestamp - updatedDateTimestamp;

    if (difference < 60_000) return "agora";

    const unit = units.find((u) => difference < u.limit) ?? null;
    if (!unit) return "unidade não definida";
    const amount = Math.floor(difference / unit?.duration);
    const formatted = `${amount}${unit.label}`;
    return difference >= 0 ? `em ${formatted}` : `há ${formatted}`;
  }

  return (
    <div className="bg-background h-screen flex justify-center pt-12">
      <div className="max-w-2xl w-full">
        <span className="font-medium font-serif italic text-xl text-foreground">
          prato feito<span className="text-accent text-2xl">.</span>
        </span>

        <div className="mt-12 space-y-4">
          <div className="bg-surface border border-border rounded-2xl flex items-center shadow-sm/5 h-28 gap-x-4 px-6">
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
            <div className="flex flex-col gap-y-1">
              <h1 className="font-serif font-medium text-xl text-foreground">
                {isLoading ? (
                  <Skeleton className="w-96 h-6 bg-foreground-muted/10" />
                ) : (
                  <>
                    {isSuccess && "Todos os sistemas estão operacionais"}
                    {isError && "Os servidores estão inoperantes"}
                  </>
                )}
              </h1>
              <span className="text-foreground-muted">
                {isLoading ? (
                  <Skeleton className="w-125 h-6 bg-foreground-muted/10" />
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
            <div className="flex items-center justify-between py-4 px-6">
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
                  <Skeleton className="w-32 h-12 bg-foreground-muted/10" />
                ) : (
                  <>
                    {isSuccess && "Operacional"}
                    {isError && "Inoperante"}
                  </>
                )}
              </span>
            </div>

            <Separator className={"h-px"} />

            <div className="flex items-center justify-between py-4 px-6">
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
                  <Skeleton className="w-32 h-12 bg-foreground-muted/10" />
                ) : (
                  <>
                    {isSuccess && "Operacional"}
                    {isError && "Inoperante"}
                  </>
                )}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <span className="text-foreground-muted text-sm">
              Última alteração: {handleUpdatedAtCalc()}
            </span>
            <Button
              disabled={isLoading}
              onClick={() => refetch()}
              variant={"outline"}
              className={"w-48 font-semibold hover:bg-black/5"}
            >
              Verificar novamente
            </Button>
          </div>
        </div>

        <div className="text-foreground-muted flex gap-x-2 text-sm justify-center mt-28">
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
