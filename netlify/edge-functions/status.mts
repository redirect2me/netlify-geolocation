import type { Config, Context } from "@netlify/edge-functions";
import { promises as fsPromises } from 'node:fs';

import { handleJsonp } from "handleJsonp.mts";
import * as buildInfo from "build.json" with { type: "json" };

export default async function handler(req: Request, context: Context) {

    return handleJsonp(req, {
        "success": true,
        "message": "OK",
        "commit": buildInfo.commit,
        "lastmod": buildInfo.lastmod,
        "tech": `Deno ${Deno.version.deno}`,
    });
}

export const config: Config = {
    path: "/status.json",
};