# Kite Connect MCP Server

A small TypeScript MCP server that exposes tools for basic calculations, greetings, and placing Kite Connect stock orders over stdio.

## Features

- `greet`: returns a greeting for a provided name.
- `add_two_numbers`: adds two numbers.
- `factorial`: calculates the factorial of a non-negative integer.
- `buy_stock`: places a Kite Connect market buy order on NSE.
- `sell_stock`: places a Kite Connect market sell order on NSE.

## Prerequisites

- Node.js
- pnpm
- A Zerodha Kite Connect API key
- A valid Kite Connect access token

## Setup

Install dependencies:

```bash
pnpm install
```

Create a `.env` file in the project root:

```bash
KITE_API_KEY=your_api_key
KITE_ACCESS_TOKEN=your_access_token
```

## Run

Start the MCP server:

```bash
pnpm dev
```

The server uses stdio transport, so it is intended to be launched by an MCP-compatible client.

## MCP Tools

### `buy_stock`

Places a regular CNC market buy order on NSE.

Input:

```json
{
  "stock": "INFY",
  "qty": 1
}
```

### `sell_stock`

Places a regular CNC market sell order on NSE.

Input:

```json
{
  "stock": "INFY",
  "qty": 1
}
```

### `greet`

Input:

```json
{
  "name": "Bhimanshu"
}
```

### `add_two_numbers`

Input:

```json
{
  "a": 2,
  "b": 3
}
```

### `factorial`

Input:

```json
{
  "a": 5
}
```

## Safety Note

The `buy_stock` and `sell_stock` tools call Kite Connect's `placeOrder` API and can place real market orders. Use valid credentials carefully and test with small quantities only when you are ready to trade.

## Project Structure

```text
.
├── config.ts       # Loads required environment variables
├── index.ts        # Defines and starts the MCP server
├── trade.ts        # Wraps Kite Connect order placement
├── package.json    # Scripts and dependencies
└── tsconfig.json   # TypeScript configuration
```
