import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    let json = JSON.parse(await fs.readFile(process.cwd() + "/public/events/events.json"))

    const event = req.nextUrl.searchParams.get("event")

    if (event) json = json.filter(item => item.image.split(".")[0] === event)

    let response = [];
    
    for (var workshop of json) {
        const files = await fs.readdir(process.cwd() + `/public/events/${workshop.image.split(".")[0]}`)

        let photoList = {
            name: workshop.name,
            id: event ?? workshop.image.split(".")[0],
            photos: []
        }
        
        files.forEach(file => photoList.photos.push(file))

        response.push(photoList);
    }

    return NextResponse.json({ data: response }, { status: 200 })
}