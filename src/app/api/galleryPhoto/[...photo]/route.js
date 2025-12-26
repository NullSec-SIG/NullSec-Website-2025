import { fileTypeFromFile } from "file-type";
import { promises as fs } from "fs";
import { createReadStream } from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(req, { params }) {
    const { photo } = await params;

    if (photo) {
        const photoPath = photo.join('/');

        const filePath = path.normalize(process.cwd() + `/website-data/events/${photoPath}`);
        if (!filePath.startsWith(path.join(process.cwd(), "website-data", "events"))) return NextResponse.redirect(new URL ("/iseewhatyoudidthere", req.url));

        try {
            await fs.stat(filePath);
        } catch {
            return NextResponse.json({ error: "Photo not found" }, { status: 404 });
        }

        const fileType = await fileTypeFromFile(filePath);

        if (fileType.mime !== "image/png" && fileType.mime !== "image/jpeg") return NextResponse.redirect(new URL ("/iseewhatyoudidthere", req.url));

        const responseHeader = new Headers(req.headers)
        const stream = createReadStream(filePath)
        responseHeader.set("Content-Type", fileType.mime)
        return new Response(stream, { headers: responseHeader })
    }
}
