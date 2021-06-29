export type HeaderType = {
  type: "text" | "media",
  value: string;
  userValue?: string;
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