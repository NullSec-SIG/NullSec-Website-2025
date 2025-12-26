import { promises as fs } from "fs";
import { createReadStream } from "fs";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    let json = JSON.parse(await fs.readFile(process.cwd() + "/website-data/events/events.json"))

    const photo = req.nextUrl.searchParams.get("photo")

    if (photo) {
        json = json.filter(item => item.image === photo)

        const responseHeader = new Headers(req.headers)
        responseHeader.set("Content-Type", json[0].image.split(".")[1] === "jpg" ? "image/jpeg" : "image/png")
        const stream = await createReadStream(process.cwd() + `/website-data/events/${json[0].image}`)
        return new Response(stream, { headers: responseHeader } )
    }

    return NextResponse.json({ error: "Invalid photo" }, { status: 400 })
}