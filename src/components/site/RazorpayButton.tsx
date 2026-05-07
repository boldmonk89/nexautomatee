import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { createRazorpayOrder, verifyRazorpayPayment } from "@/server/razorpay.functions";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

function loadScript(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

export function RazorpayButton({
  className = "btn-primary",
  label = "Get Instant Access — ₹299",
}: {
  className?: string;
  label?: string;
}) {
  const [loading, setLoading] = useState(false);
  const createOrder = useServerFn(createRazorpayOrder);
  const verifyPayment = useServerFn(verifyRazorpayPayment);

  async function handleClick() {
    try {
      setLoading(true);
      const ok = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      if (!ok || !window.Razorpay) {
        toast.error("Couldn't load payment gateway. Check your internet and try again.");
        return;
      }
      const order = await createOrder({ data: {} });
      const rzp = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        order_id: order.orderId,
        name: "NexAutomate",
        description: "Lifetime access — n8n automation templates",
        theme: { color: "#0A0A0A" },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          try {
            const result = await verifyPayment({ data: response });
            if (result.success) {
              toast.success("Payment successful! Check your email for access.");
            } else {
              toast.error("Payment verification failed. Contact support.");
            }
          } catch (e) {
            console.error(e);
            toast.error("Verification error. Contact support with your payment ID.");
          }
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      });
      rzp.open();
    } catch (e) {
      console.error(e);
      toast.error("Couldn't start payment. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button onClick={handleClick} disabled={loading} className={className} type="button">
      {loading ? (
        <>
          <Loader2 size={16} className="animate-spin" /> Processing…
        </>
      ) : (
        <>
          {label} <ArrowRight size={16} />
        </>
      )}
    </button>
  );
}