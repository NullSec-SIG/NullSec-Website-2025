import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    let json = JSON.parse(await fs.readFile(process.cwd() + "/website-data/events/events.json"))

    return NextResponse.json({ data: json }, { status: 200 })
}