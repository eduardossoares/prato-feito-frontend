import { useEffect } from "react";

export function useMetadata(pageName: string) {
  useEffect(() => {
    document.title = `${pageName} - PratoFeito`;
  }, [pageName]);
}
