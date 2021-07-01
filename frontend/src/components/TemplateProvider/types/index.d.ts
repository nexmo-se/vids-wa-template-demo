export type MediaType = "text" | "media" | "document" | "video" | "image" | "location";
export type HeaderUserValue = TextValue | MediaValue | LocationValue | DocumentValue;
export type TextValue = {
  text: string;
}

export type MediaValue = {
  link: string;
}

export type LocationValue = {
  longitude: string;
  latitude: string;
  name: string;
  address: string;
}

export type DocumentValue = {
  link: string;
  filename: string;
}

export type HeaderType = {
  type: "text" | "media",
  value: MediaType,
  userValue: HeaderUserValue // always have, because it has default value
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
