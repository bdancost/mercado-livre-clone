export async function register() {
  if (process.env.NODE_ENV === "production") {
    const { registerOTel } = await import("@vercel/otel");
    registerOTel("mercado-livre-clone");
  }
}
