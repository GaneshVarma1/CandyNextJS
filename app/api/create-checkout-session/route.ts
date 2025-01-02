import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe-config";

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    if (!items?.length) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map(
        (item: {
          name: any;
          image: any;
          description: any;
          price: number;
          quantity: any;
        }) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              images: [item.image],
              description: item.description,
            },
            unit_amount: Math.round(item.price * 100), // Convert to cents
          },
          quantity: item.quantity,
        })
      ),
      mode: "payment",
      success_url: `${req.headers.get(
        "origin"
      )}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}?canceled=true`,
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB"],
      },
      billing_address_collection: "required",
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error: any) {
    console.error("Error creating checkout session:", error.message);
    return NextResponse.json(
      { error: error.message || "Error creating checkout session" },
      { status: 500 }
    );
  }
}
