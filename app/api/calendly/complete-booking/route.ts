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

    const { date, type, time, name, email, phone } = session.metadata ?? {};

    // Safety check
    if (!date || !type || !time || !name || !email || !phone) {
      return NextResponse.redirect(new URL('/?payment_error=true', req.nextUrl.origin));
    }

    // Make Calendly reservation
    const calendlyResponse = await fetch(`${process.env.CALENDLY_URL}/event_types`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CALENDLY_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        active: false,
        owner: `${process.env.CALENDLY_URL}/users/${process.env.CALENDLY_UUID}`,
        name: `New Meeting with ${name} for ${type}`,
        description: `New Meeting with ${name} for ${type}`,
        duration: 15,
        locations: [
          {
            kind: "custom",
            location: "Online Meeting"
          }
        ],
        color: "#fff200",
        locale: "en"
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
