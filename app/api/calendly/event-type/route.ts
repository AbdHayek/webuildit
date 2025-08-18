  import { NextRequest } from "next/server";

  export async function GET(req: NextRequest) {
   
    try {
      const calendlyRes = await fetch(
        `${process.env.CALENDLY_URL}event_types?user=https://api.calendly.com/users/${process.env.CALENDLY_UUID}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.CALENDLY_API_KEY}`, // Your Calendly personal access token
            "Content-Type": "application/json",
          },
        }
      );

      if (!calendlyRes.ok) {
        return new Response(await calendlyRes.text(), { status: calendlyRes.status });
      }

      const data = await calendlyRes.json();

      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching event types:", error);
      return new Response(
        JSON.stringify({ error: "Failed to fetch event types" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }
