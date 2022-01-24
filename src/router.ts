import { createRouter, defineRoute } from "type-route";
import { makeThisModuleAnExecutableRouteLister } from "github-pages-plugin-for-type-route";

export const routeDefs = {
    /*
        If you are using a custom domain name,
        set the home route definition to <defineRoute("/")>
    */
    "home": defineRoute("/crispy-octo-bassoon"),
    "page1": defineRoute("/page1"),
    "page2": defineRoute("/page2"),
    "page3": defineRoute("/page3"),
};

makeThisModuleAnExecutableRouteLister(routeDefs);

export const { RouteProvider, routes, useRoute } = createRouter(routeDefs);
