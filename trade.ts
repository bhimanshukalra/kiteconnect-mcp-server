import { KiteConnect } from "kiteconnect";

// TODO: move these to .env
const apiKey = "your_api_key";
// const apiSecret = "your_api_secret";
// const requestToken = "your_request_token";
const accessToken = "your_access_token";

const kc = new KiteConnect({ api_key: apiKey });

export async function placeOrder(
  tradingSymbol: string,
  quantity: number,
  transactionType: "BUY" | "SELL",
) {
  try {
    kc.setAccessToken(accessToken);
    const order = await kc.placeOrder("regular", {
      exchange: "NSE",
      //   tradingsymbol: "HDFCBANK",
      tradingsymbol: tradingSymbol,
      transaction_type: transactionType,
      quantity,
      product: "CNC",
      order_type: "MARKET",
    });

    console.log("Order:", order);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
