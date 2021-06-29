export default {
  apiKey: process.env.NEXMO_API_KEY ?? "",
  apiSecret: process.env.NEXMO_API_SECRET ?? "",
  apiURL: process.env.NEXMO_API_URL ?? "https://api.nexmo.com/v0.1",
  waNumber: process.env.NEXMO_WHATSAPP_NUMBER ?? "",
  privateKey: process.env.NEXMO_PRIVATE_KEY,
  applicationID: process.env.NEXMO_APPLICATION_ID
}