import { createContext } from "react";

interface VidsContextProps {
  token: string;
  sendRequest: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
}

export const VidsContext = createContext<VidsContextProps>({} as VidsContextProps);
