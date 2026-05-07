import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createHmac, timingSafeEqual } from "crypto";

const AMOUNT_PAISE = 29900; // ₹299
const CURRENCY = "INR";

function getKeys() {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_id || !key_secret) throw new Error("Razorpay keys are not configured.");
  return { key_id, key_secret };
}

export const createRazorpayOrder = createServerFn({ method: "POST" })
  .inputValidator(() => ({}))
  .handler(async () => {
    const { key_id, key_secret } = getKeys();
    const auth = Buffer.from(`${key_id}:${key_secret}`).toString("base64");
    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: AMOUNT_PAISE,
        currency: CURRENCY,
        receipt: `nx_${Date.now()}`,
        notes: { product: "NexAutomate Lifetime Access" },
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("Razorpay order error:", res.status, text);
      throw new Error(`Razorpay order creation failed (${res.status})`);
    }
    const order = (await res.json()) as { id: string; amount: number; currency: string };
    return {
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: key_id,
    };
  });

const VerifySchema = z.object({
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
});

export const verifyRazorpayPayment = createServerFn({ method: "POST" })
  .inputValidator((input) => VerifySchema.parse(input))
  .handler(async ({ data }) => {
    const { key_secret } = getKeys();
    const expected = createHmac("sha256", key_secret)
      .update(`${data.razorpay_order_id}|${data.razorpay_payment_id}`)
      .digest("hex");
    const a = Buffer.from(expected);
    const b = Buffer.from(data.razorpay_signature);
    const ok = a.length === b.length && timingSafeEqual(a, b);
    if (!ok) return { success: false as const };
    return { success: true as const, paymentId: data.razorpay_payment_id };
  });