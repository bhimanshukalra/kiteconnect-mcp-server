import "dotenv/config";

export const config = {
  kiteApiKey: requireEnv("KITE_API_KEY"),
  kiteAccessToken: requireEnv("KITE_ACCESS_TOKEN"),
};

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value?.trim()) {
    throw new Error(`Missing ${name} in .env`);
  }
  return value;
}
