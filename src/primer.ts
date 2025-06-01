import type { Style } from '.';
const colors = (await import('./colors.json')).default;// Based on "@primer/primitives": "2.0.1",

function getColors(style: Style): typeof colors {
    if (style === "dark") {
        /* The array of light to dark colors are reversed to auto-generate dark theme */
        const darkColors = structuredClone(colors);
        // Swap black and white color
        [darkColors.black, darkColors.white] = [darkColors.white, darkColors.black];
        for (let value of Object.values(darkColors)) {
            if (Object.prototype.toString.call(value) === '[object Array]') {
                value = (value as string[]).reverse();
            }
        }
        return darkColors as typeof colors;
    } else {
        return colors;
    }
}

export {
    getColors,
};