# Netlify Geolocation  [<img alt="Geolocation logo" src="docs/favicon.svg" height="90" align="right" />](https://netlify-geo.redirect2.me/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/96f4db97-3110-4a94-8f6d-eefd5aab54bc/deploy-status)](https://app.netlify.com/sites/geolocation-r2/deploys)

Server that determines your physical location by looking at headers sent to Netlify edge functions.

Try it with: [Netlify](https://netlify-geo.redirect2.me/)

Also see a more detailed [comparison of geolocation providers](https://resolve.rs/ip/geolocation.html)

## How it works

This application is just a simple app that shows various values provided by Netlify's [context](https://docs.netlify.com/functions/api/#netlify-specific-context-object) object.

## Running it yourself

It is a trivial TypeScript application. See `run.sh` for how I run it during development.

LATER

## Contributions

Contributions are welcome!  If you know of any other similar CDNs/services, let me know & I will add them in!

## API

There is a simple JSON/JSONP API that is free for light, non-commercial use.  This is such a trivial application that you should run your own copy (or make your own  version) for anything serious.  Netlify has a generous free plan (which is what I'm using).

Send a `callback` parameter to get JSONP instead of JSON.

- [`/api/netlify.json`](https://netlify-geo.redirect2.me/api/netlify.json)

## License

[GNU Affero General Public License v3.0](LICENSE.txt)

## Credits

[![Deno](https://www.vectorlogo.zone/logos/deno/deno-ar21.svg)](https://deno.com/ "Programming environment")
[![Git](https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg)](https://git-scm.com/ "Version control")
[![Github](https://www.vectorlogo.zone/logos/github/github-ar21.svg)](https://github.com/ "Code hosting")
[![Jekyll](https://www.vectorlogo.zone/logos/jekyllrb/jekyllrb-ar21.svg)](https://www.jekyllrb.com/ "Static website builder")
[![Netlify](https://www.vectorlogo.zone/logos/netlify/netlify-ar21.svg)](https://www.netlify.com/ "Hosting and geolocation")
[![NodePing](https://www.vectorlogo.zone/logos/nodeping/nodeping-ar21.svg)](https://nodeping.com?rid=201109281250J5K3P "Uptime monitoring")
[![npm](https://www.vectorlogo.zone/logos/npmjs/npmjs-ar21.svg)](https://www.npmjs.com/ "JS Package Management")
[![svgrepo](https://www.vectorlogo.zone/logos/svgrepo/svgrepo-ar21.svg)](https://www.svgrepo.com/svg/185727/map-position "favicon")
[![TypeScript](https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg)](https://www.typescriptlang.org/ "Programming Language")
[![VectorLogoZone](https://www.vectorlogo.zone/logos/vectorlogozone/vectorlogozone-ar21.svg)](https://www.vectorlogo.zone/ "Logos")
[![water.css](https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg)](https://watercss.netlify.app/ "Classless CSS")
