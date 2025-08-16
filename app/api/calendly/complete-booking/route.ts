import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.redirect(new URL('/?payment_error=true', req.nextUrl.origin));
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return NextResponse.redirect(new URL('/?payment_error=true', req.nextUrl.origin));
    }

    const { date, type, time, name, email, phone, sessionUri } = session.metadata ?? {};

    // Safety check
    if (!date || !type || !time || !name || !email || !phone || !sessionUri) {
      return NextResponse.redirect(new URL('/?payment_error=true', req.nextUrl.origin));
    }

    // Make Calendly reservation
    const calendlyResponse = await fetch(`${process.env.CALENDLY_URL}scheduling_links`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CALENDLY_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        max_event_count: 1,
        owner: sessionUri,
        owner_type: "EventType"
      }),
    });
    const result = await calendlyResponse.json();
    console.log("calendlyResponse:", result);

    return NextResponse.redirect(new URL('/?success=true', req.nextUrl.origin));
  } catch (err) {
    console.error('Error completing booking:', err);
    return NextResponse.redirect(new URL('/?payment_error=true', req.nextUrl.origin));
  }
}
