import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("linknamu");
  const docs = await db.collection("clicks").find({}).toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[String(doc._id)] = doc.count ?? 0;
  }

  return NextResponse.json(counts);
}
