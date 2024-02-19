# Netlify Geolocation  [<img alt="Geolocation logo" src="docs/favicon.svg" height="90" align="right" />](https://netlify-geo.redirect2.me/)

Server that determines your physical location by looking at headers sent to Netlify edge functions.

Try it with: [Netlify](https://netlify-geo.redirect2.me/)

Also see a more detailed [comparison of geolocation providers](https://resolve.rs/ip/geolocation.html)

## How it works

This application is just a simple app that shows various HTTP header values.

## Running it yourself

It is a trivial TypeScript application.  

LATER

## Contributions

Contributions are welcome!  If you know of any other similar CDNs/services, let me know & I will add them in!

## API

There is a simple JSON/JSONP API that is free for light, non-commercial use.  This is such a trivial application that you should run your own copy (or make your own  version) for anything serious.  Both Netlify has a generous free plan (which is what I'm using).

Send a `callback` parameter to get JSONP instead of JSON.

- [`/api/cfw.json`](https://aws-geo.redirect2.me/api/cfw.json)

## License

[GNU Affero General Public License v3.0](LICENSE.txt)

## Credits

[![Git](https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg)](https://git-scm.com/ "Version control")
[![Github](https://www.vectorlogo.zone/logos/github/github-ar21.svg)](https://github.com/ "Code hosting")
[![Netlify](https://www.vectorlogo.zone/logos/netlify/netlify-ar21.svg)](https://www.netlify.com/ "Hosting and geolocation")
[![NodePing](https://www.vectorlogo.zone/logos/nodeping/nodeping-ar21.svg)](https://nodeping.com?rid=201109281250J5K3P "Uptime monitoring")
[![svgrepo](https://www.vectorlogo.zone/logos/svgrepo/svgrepo-ar21.svg)](https://www.svgrepo.com/svg/185727/map-position "favicon")
[![water.css](https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg)](https://watercss.netlify.app/ "Classless CSS")

- LATER: typescript, npm, nodeping, etc
