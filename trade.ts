import { KiteConnect } from "kiteconnect";
import { config } from "./config";

const kc = new KiteConnect({ api_key: config.kiteApiKey });

export async function placeOrder(
  tradingSymbol: string,
  quantity: number,
  transactionType: "BUY" | "SELL",
) {
  try {
    kc.setAccessToken(config.kiteAccessToken);
    await kc.placeOrder("regular", {
      exchange: "NSE",
      tradingsymbol: tradingSymbol,
      transaction_type: transactionType,
      quantity,
      product: "CNC",
      order_type: "MARKET",
    });
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
