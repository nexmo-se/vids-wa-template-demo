import fetch from "node-fetch";
import FormData from "form-data";
import { RequestInit } from "node-fetch";

type Body = string | FormData;

class FetchService{
  static getContentType(body: Body): string {
    if (body instanceof FormData) {
      return "multipart/form-data";
    } else if (typeof body === "string") {
      return "application/json";
    } else return "application/json";
  }

  static async fetch(url: string, options?: RequestInit): Promise<any> {
    const response = await fetch(url, options);
    if (response.ok) {
      if (response.headers.get("Content-Type").includes("application/json")) {
        const jsonResponse = await response.json();
        return jsonResponse;
      } else return response.text();
    } else {
      if (response.headers.get("Content-Type").includes("application/json")) {
        const jsonResponse = await response.json();
        console.log("[Error] ", jsonResponse);
        throw new Error(jsonResponse.message);
      } else {
        const bodyResponse = await response.text();
        console.log("[Error] ", bodyResponse);
        console.log("[Error] ", response.status, response.statusText)
        throw new Error(bodyResponse);
      }
    }
  }

  static async get(url: string, accessToken?: string): Promise<any> {
    const headers = JSON.parse(JSON.stringify({
      Accept: "application/json",
      Authorization: accessToken? `Bearer ${accessToken}`: undefined
    }));

    const options = { method: "GET", headers };
    return FetchService.fetch(url, options);
  }

  static async post(url: string, body?: Body, accessToken?: string): Promise<any> {
    const headers =  JSON.parse(JSON.stringify({ 
      "Content-Type": FetchService.getContentType(body),
      Accept: "application/json",
      Authorization: accessToken? `Bearer ${accessToken}`: undefined
    }));

    const options = { method: "POST", headers, body }
    return FetchService.fetch(url, options);
  }
}
export default FetchService;