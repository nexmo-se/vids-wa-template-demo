export type LocationValue = {
  longitude: number;
  latitude: number;
  name?: string;
  address?: string;
}

export type HeaderType = {
  type: "text" | "media",
  value: string;
  userValue?: string | LocationValue;
}

export type Paramater = {
  type: string;
  text: string;
  userValue?: string | number;
}

export interface BodyPayload {
  type: "body",
  parameters: Paramater[]
}