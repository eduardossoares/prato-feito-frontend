import { Button } from "@/components/ui/button";
import { useServerStatusQuery } from "@/hooks/use-server-status-query";
import { CheckIcon } from "@phosphor-icons/react";

export function StatusPage() {
  const { isSuccess, isError } = useServerStatusQuery();
  return (
    <div className="bg-background h-screen">
      <span className="font-normal font-serif italic text-xl text-foreground">
        prato feito<span className="text-accent text-xl">.</span>
      </span>
      <div>
        <div>
          <div>
            <div></div>
          </div>
          <h1>Todos os sistemas estão operacionais</h1>
          <span>
            A aplicação e o banco de dados estão funcionando normalmente.
          </span>
        </div>

        <div>
          <div>
            <div>
              <h2>Aplicação</h2>
              <span>Site e recursos principais</span>
            </div>
            <span>Operacional</span>
          </div>
          <div>
            <div>
              <h2>Banco de dados</h2>
              <span>Armazenamento e acesso aos dados</span>
            </div>
            <span>Operacional</span>
          </div>
        </div>

        <div>
          <span>Última alteração: agora</span>
          <Button>Verificar novamente</Button>
        </div>
      </div>

      <div>
        <span>prato feito</span>
        <span>·</span>
        <span>página de status</span>
      </div>
    </div>
  );
}
