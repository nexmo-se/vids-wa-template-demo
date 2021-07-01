import Config from "configs";
import UserInformation from "./models/user-information";
import lodash from "lodash";
import { VidsContext } from "./contexts/vids";

import { useVids } from "./hooks/vids";
import { useState, useEffect, useCallback } from "react";

interface VidsProviderProps {
  children: any;
  tokenParam?: string;
}

/**
 * It will not render the children after the token is well received
 * from URL Search Params.
 * 
 * @param param - The `tokenParam` props default to `ref`. You can change it
 */
function VidsProvider ({ children, tokenParam }: VidsProviderProps) {
  const [token, setToken] = useState<string>();
  const [userInformation, setUserInformation] = useState<UserInformation>();

  /**
   * Add additional Authorization headers to endpoint. This assume we uses
   * backend provided by VIDS or the backend is located in VIDS.
   * 
   * This method uses `fetch` as its core.
   * @param input 
   * @param init 
   * @returns 
   */
  const sendRequest = useCallback(
    (input: RequestInfo, init?: RequestInit) => {
      if (!token) return Promise.reject("No token found");

      const additionalHeader = { Authorization: `Bearer ${token}` };
      const combinedInit = lodash(init).merge({ headers: additionalHeader }).value();
      return fetch(input, combinedInit);
    },
    [token]
  )

  useEffect(
    () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get(tokenParam ?? "ref");
      if (token) setToken(token);
      else setToken(undefined);
    },
    [tokenParam]
  );

  useEffect(
    () => {
      // Fetch user information from VIDS backend
      async function fetchData () {
        const response = await sendRequest(`${Config.apiUrl}/vids`, { method: "GET" });
        if (response.ok) {
          const jsonResponse = await response.json();
          const userInformation = UserInformation.fromResponse(jsonResponse);
          setUserInformation(userInformation);
        }
      }
      if (token) fetchData();
    },
    [token, sendRequest]
  )

  if (!token || !userInformation) return null;
  else {
    return (
      <VidsContext.Provider
        value={{
          token,
          userInformation,
          sendRequest
        }}
      >
        {children}
      </VidsContext.Provider>
    )
  }
}

export { useVids };
export default VidsProvider;