import Color from 'color';
import type { Style } from '.';

/*
 * Generate color variant by inverting
 * luminance in the  HSL representation
 */
function getVariant(hex: string, style: Style): string {
    if (style === 'dark') {
        const c = Color(hex);
        return c
            .hsl()
            .lightness(100 - c.lightness())
            .hex()
            .toLowerCase();
    } else {
        return hex;
    }
}

export {
    getVariant
}