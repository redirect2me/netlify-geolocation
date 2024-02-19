import type { Config, Context } from "@netlify/edge-functions";

import { handleJsonp } from "handleJsonp.mts";

export default async function handler(req: Request, context: Context) {

    return handleJsonp(req, {
        "success": true,
        "message": "OK",
        "country": context.geo.country?.code,
        "city": context.geo.city,
        "latitude": context.geo.latitude,
        "longitude": context.geo.longitude,
        "text": `${context.geo.city}, ${context.geo.subdivision?.name}, ${context.geo.country?.name}`,
        "TZ": context.geo.timezone,
        "raw": context.geo,
    });
}

export const config: Config = {
    path: "/api/netlify.json",
};