import { createThemeProvider, defaultGetTypographyDesc } from "onyxia-ui";

export const { ThemeProvider, useTheme } = createThemeProvider({
    "getTypographyDesc": ({
        browserFontSizeFactor,
        windowInnerHeight,
        windowInnerWidth,
    }) => {
        const typographyDesc = defaultGetTypographyDesc({
            browserFontSizeFactor,
            windowInnerHeight,
            windowInnerWidth,
        });

        return {
            "fontFamily": '"Work Sans", sans-serif',
            "rootFontSizePx": typographyDesc.rootFontSizePx,
            "variants": {
                ...typographyDesc.variants,
                "page heading": {
                    ...typographyDesc.variants["page heading"],
                    "fontFamily": '"Playfair Display", serif',
                },
                "subtitle": {
                    ...typographyDesc.variants["subtitle"],
                    "fontFamily": '"Open Sans", sans-serif',
                },
                "My title": {
                    "htmlComponent": "h1",
                    "fontWeight": "bold",
                    "fontSizeRem": 2,
                    "lineHeightRem": 2,
                    "fontFamily": '"Cinzel Decorative", cursive',
                },
            },
        };
    },
});
