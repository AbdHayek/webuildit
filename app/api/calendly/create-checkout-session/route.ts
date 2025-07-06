import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { date, type, time, name, email, phone } = body;

  if (!date || !type || !time || !name || !email || !phone) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Consultation ${date} (${time})`,
            },
            unit_amount: 100 * 100, // $100 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.nextUrl.origin}/api/calendly/complete-booking?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/?canceled=true`,
      metadata: { date, type, time, name, email, phone },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe Error:', error);
    return NextResponse.json({ error: 'Stripe session creation failed' }, { status: 500 });
  }
}
