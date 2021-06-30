import UserInformation from "../models/user-information";
import { createContext } from "react";

interface VidsContextProps {
  token: string;
  userInformation: UserInformation;
  sendRequest: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
}

export const VidsContext = createContext<VidsContextProps>({} as VidsContextProps);
