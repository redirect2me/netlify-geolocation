import type { Config, Context } from "@netlify/edge-functions";

export default async function handler(req: Request, context: Context) {
    const html = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Netlify Geolocation - Resolve.rs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </head>
    <body>
        <h1>
            <img alt="Resolve.rs geolocation logo" src="favicon.svg" style="height:2.2em;vertical-align:middle;" />
            Netlify Geolocation
        </h1>
        <p>
            Determine your real (physical) location based on your IP address, powered by Netlify edge functions.
        </p>
        <p>
            Your IP address: ${req.headers.get('x-forwarded-for')}
        </p>
        <p>
            Country: ${context.geo.country?.name} (${context.geo.country?.code})<br/>
            Region: ${context.geo.subdivision?.name} (${context.geo.subdivision?.code})<br/>
            City: ${context.geo.city}<br/>
            Latitude/Longitude: ${context.geo.latitude}, ${context.geo.longitude}<br/>
            Time zone: ${context.geo.timezone}<br/>
        </p>
        <details><summary>Raw Data</summary>
          <pre>${JSON.stringify(context.geo, null, 2)}</pre>
        </details>
        <p>
            <a href="https://github.com/redirect2me/netlify-geolocation">How this works</a>, including API details and source code!
        </p>
        <p>
            <a href="https://resolve.rs/">Resolve.rs</a>
            has more
            <a href="https://resolve.rs/tools.html">diagnostic tools</a>.
            including a
            <a href="https://resolve.rs/ip/geolocation.html">comparison of different geolocation APIs</a>.
        </p>
    </body>
</html>`;
    return new Response(html, { headers: {
        'Cache-Control': 'public',
        'Content-Type': 'text/html',
        } });
}

export const config: Config = {
    path: "/",
};
