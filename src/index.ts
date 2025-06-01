import { writeFile, mkdir } from 'node:fs/promises';
import { getTheme } from './theme';

type Style = 'light' | 'dark';

const lightTheme = getTheme({
    style: "light",
    name: "GitHub Light Classic",
});

const darkTheme = getTheme({
    style: "dark",
    name: "GitHub Dark Classic",
});

const themes = {
    "$schema": "https://zed.dev/schema/themes/v0.2.0.json",
    name: "GitHub Classic",
    author: "Nguyen Dang Vinh <meocoder@gmail.com>",
    themes: [lightTheme, darkTheme]
}

// Write themes
// const zedThemesFolderLocalPath = 'YOUR_ZED_THEMES_FOLDER_PATH/github-classic.json';
mkdir("../themes", { recursive: true })
    .then(() => Promise.all([
        writeFile("../themes/github-classic.json", JSON.stringify(themes, null, 2)),
        // writeFile(zedThemesFolderLocalPath, JSON.stringify(theme, null, 2)),

    ]))
    .catch(() => process.exit(1))



export type {
    Style
}