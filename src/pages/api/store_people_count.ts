import type { NextApiRequest, NextApiResponse } from "next";

import { sql } from "@vercel/postgres";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const response = await fetch(
      "https://display.safespace.io/value/live/a7796f34"
    );
    const data = await response.json();

    if (response.status == 200) {
      await sql`INSERT INTO vital_people_count (num_people) VALUES (${data});`;
    }

    res.status(200).json({});
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}
