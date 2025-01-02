import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export async function createCheckoutSession(items: any[]) {
  try {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    });

    const { sessionId, error } = await response.json();
    if (error) throw new Error(error);

    const stripe = await stripePromise;
    if (!stripe) throw new Error("Failed to load Stripe");

    const { error: stripeError } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (stripeError) throw stripeError;
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    throw error;
  }
}
