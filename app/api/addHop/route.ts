import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { db } from "@/lib/kysely";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  //const petName = searchParams.get("petName");
  //const ownerName = searchParams.get("ownerName");
  try {
    //if (!petName || !ownerName) throw new Error("Pet and owner names required");
    await db
      .insertInto("hops")
      .values({
        name: "Amarillo",
        description: "Desc for Amarillo",
        slug: "amarillo",
      })
      .execute();

    //const pets = await sql`SELECT * FROM Pets;`;
    //await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  const hops = await db.selectFrom("hops").select(["name", "slug"]).execute();
  return NextResponse.json({ hops }, { status: 200 });
}
