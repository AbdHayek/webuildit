import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  const eventTypeUri = req.nextUrl.searchParams.get('event_type_uri') as string;
  const start_time = req.nextUrl.searchParams.get('start_time') as string;
  const end_time = req.nextUrl.searchParams.get('end_time') as string;

  if (!eventTypeUri || !start_time || !end_time) {
    return NextResponse.json(
      { error: "Missing required query parameters: event_type_uri, start_time, end_time" },
      { status: 400 }
    );
  }
  

  try {
    const calendlyResponse = await fetch(
      `${process.env.CALENDLY_URL}event_type_available_times?event_type=${decodeURIComponent(eventTypeUri)}&start_time=${start_time}&end_time=${end_time}`,
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
