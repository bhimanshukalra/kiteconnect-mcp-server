import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { placeOrder } from "./trade";

const server = new McpServer({ name: "demo-server", version: "1.0.0" });

server.registerTool(
  "buy_stock",
  {
    description: "Buy a stock",
    inputSchema: z.object({ stock: z.string(), qty: z.number().positive() }),
  },
  async ({ stock, qty }: { stock: string; qty: number }) => {
    await placeOrder(stock, qty, "BUY");
    return {
      content: [{ type: "text", text: "Stock has been bought" }],
    };
  },
);

server.registerTool(
  "sell_stock",
  {
    description: "Sell a stock",
    inputSchema: z.object({ stock: z.string(), qty: z.number().positive() }),
  },
  async ({ stock, qty }: { stock: string; qty: number }) => {
    await placeOrder(stock, qty, "SELL");
    return {
      content: [{ type: "text", text: "Stock has been sold" }],
    };
  },
);

server.registerTool(
  "greet",
  {
    description: "Greet someone by name",
    inputSchema: z.object({ name: z.string() }),
  },
  async ({ name }: { name: string }) => ({
    content: [{ type: "text", text: `Hello, ${name}!` }],
  }),
);

server.registerTool(
  "add_two_numbers",
  {
    description: "Calculate sum of two numbers.",
    inputSchema: z.object({ a: z.number(), b: z.number() }),
  },
  async ({ a, b }: { a: number; b: number }) => ({
    content: [{ type: "text", text: String(a + b) }],
  }),
);

server.registerTool(
  "factorial",
  {
    description: "Calculate factorial of a number.",
    inputSchema: z.object({ a: z.number().int().nonnegative() }),
  },
  async ({ a }: { a: number }) => {
    let answer = 1;
    for (let i = 2; i <= a; i++) {
      answer *= i;
    }
    return {
      content: [{ type: "text", text: String(answer) }],
    };
  },
);

async function main() {
  try {
    const transport = new StdioServerTransport();
    await server.connect(transport);
  } catch (err) {
    console.error(err);
  }
}

main();
