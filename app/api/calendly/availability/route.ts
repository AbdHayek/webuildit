import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  try {
    const calendlyUserUri = `${process.env.CALENDLY_URL}users/${process.env.CALENDLY_UUID!}`;

    const calendlyResponse = await fetch(
      `${process.env.CALENDLY_URL}user_availability_schedules?user=${encodeURIComponent(calendlyUserUri)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CALENDLY_API_KEY!}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!calendlyResponse.ok) {
      console.error("Calendly API error:", await calendlyResponse.text());
      return NextResponse.json({ error: "Failed to fetch Calendly availability" }, { status: 500 });
    }

    const data = await calendlyResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Unhandled error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
