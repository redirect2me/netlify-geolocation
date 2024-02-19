import type { Config, Context } from "@netlify/edge-functions";
import { promises as fsPromises } from 'node:fs';

import { handleJsonp } from "handleJsonp.mts";
import { default as buildInfo } from "build.json" with { type: "json" };

export default async function handler(req: Request, context: Context) {

    console.log(buildInfo);

    return handleJsonp(req, {
        "success": true,
        "message": "OK",
        "commit": buildInfo.commit,
        "lastmod": buildInfo.lastmod,
        "tech": `Deno ${Deno.version.deno}`,
        "timestamp": new Date().toISOString(),
    });
}

export const config: Config = {
    path: "/status.json",
};