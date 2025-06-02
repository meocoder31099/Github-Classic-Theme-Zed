import type { Style } from '.';
import { getVariant } from './process';
import { getColors } from './primer';
import chroma from 'chroma-js';


function getTheme({ style, name }: { style: Style, name: string }): Record<string, any> {
    // Usage: `auto('pink')`
    const auto = (hex: string) => getVariant(hex, style);

    // Usage: `pick({ light: "lightblue", dark: "darkblue" })`
    const pick = (options: { light?: string, dark?: string }): string => options[style] as string;

    const primer = getColors(style);

    const workbenchForeground = pick({ light: primer.gray[8], dark: primer.gray[7] });
    const editorForeground = pick({ light: primer.gray[9], dark: primer.gray[7] });

    const alpha = (color: string, alpha: number): string => {
        return chroma(color).alpha(alpha).hex()
    }

    return {
        name: name,
        appearance: style,
        style: {
            "background.appearance": "opaque",
            "accents": [
                primer.blue[6],
                primer.orange[6],
                primer.purple[6],
            ],
            "border": pick({ light: primer.gray[2], dark: primer.white }),
            "border.variant": pick({ light: primer.gray[2], dark: primer.white }),
            "border.focused": pick({ light: primer.blue[4], dark: primer.blue[3] }),
            "border.selected": pick({ light: primer.gray[2], dark: primer.white }),
            "border.transparent": pick({ light: primer.gray[2], dark: primer.white }),
            "border.disabled": pick({ light: primer.gray[2], dark: primer.white }),
            "elevated_surface.background": primer.gray[0],
            "surface.background": pick({ light: primer.gray[1], dark: "#1f2428" }),
            "background": pick({ light: primer.white, dark: primer.gray[0] }),
            "element.background": pick({ light: "#ebf0f4", dark: "#282e34" }),
            "element.hover": pick({ light: "#ebf0f4", dark: "#282e34" }),
            "element.active": null,
            "element.selected": pick({ light: "#e2e5e9", dark: "#39414a" }),
            "element.disabled": null,
            "drop_target.background": null,
            "ghost_element.background": null,
            "ghost_element.hover": pick({ light: "#ebf0f4", dark: "#282e34" }),
            "ghost_element.active": pick({ light: "#e2e5e9", dark: "#39414a" }),
            "ghost_element.selected": pick({ light: "#e2e5e9", dark: "#39414a" }),
            "ghost_element.disabled": null,
            "text": pick({ light: primer.gray[7], dark: primer.gray[6] }),
            "text.muted": primer.gray[5],
            "text.placeholder": pick({ light: primer.gray[4], dark: primer.gray[5] }),
            "text.disabled": null,
            "text.accent": pick({ light: primer.green[5], dark: primer.green[4] }),
            "icon": null,
            "icon.muted": null,
            "icon.disabled": null,
            "icon.placeholder": pick({ light: primer.gray[4], dark: primer.gray[5] }),
            "icon.accent": pick({ light: primer.gray[7], dark: primer.gray[6] }),
            "debugger.accent": null,
            "status_bar.background": pick({ light: primer.white, dark: primer.gray[0] }),
            "title_bar.background": pick({ light: primer.white, dark: primer.gray[0] }),
            "title_bar.inactive_background": null,
            "toolbar.background": pick({ light: primer.white, dark: primer.gray[0] }),
            "tab_bar.background": pick({ light: primer.gray[1], dark: "#1f2428" }),
            "tab.inactive_background": pick({ light: primer.gray[1], dark: "#1f2428" }),
            "tab.active_background": pick({ light: primer.white, dark: primer.gray[0] }),
            "search.match_background": pick({ light: primer.yellow[4], dark: "#ffd33d44" }),
            "panel.background": pick({ light: primer.gray[1], dark: "#1f2428" }),
            "panel.focused_border": pick({ light: primer.gray[2], dark: primer.white }),
            "panel.indent_guide": pick({ light: "#eff2f6", dark: primer.gray[1] }),
            "panel.indent_guide_hover": pick({ light: "#d7dbe0", dark: primer.gray[2] }),
            "panel.indent_guide_active": pick({ light: "#d7dbe0", dark: primer.gray[2] }),
            "pane.focused_border": pick({ light: primer.gray[2], dark: primer.white }),
            "pane_group.border": pick({ light: primer.gray[2], dark: primer.white }),
            "scrollbar.thumb.background": pick({ light: "#959da533", dark: "#6a737d33" }),
            "scrollbar.thumb.hover_background": pick({ light: "#959da544", dark: "#6a737d44" }),
            "scrollbar.thumb.active_background": pick({ light: "#959da588", dark: "#6a737d88" }),
            "scrollbar.thumb.border": primer.white,
            "scrollbar.track.background": pick({ light: primer.white, dark: primer.gray[0] }),
            "scrollbar.track.border": primer.white,
            "minimap.thumb.background": pick({ light: "#959da533", dark: "#6a737d33" }),
            "minimap.thumb.hover_background": pick({ light: "#959da544", dark: "#6a737d44" }),
            "minimap.thumb.active_background": pick({ light: "#959da588", dark: "#6a737d88" }),
            "minimap.thumb.border": primer.white,
            "editor.foreground": editorForeground,
            "editor.background": pick({ light: primer.white, dark: primer.gray[0] }),
            "editor.gutter.background": pick({ light: primer.white, dark: primer.gray[0] }),
            "editor.subheader.background": pick({ light: primer.gray[1], dark: "#1f2428" }),
            "editor.active_line.background": pick({ light: primer.gray[1], dark: "#2b3036" }),
            "editor.highlighted_line.background": pick({ light: primer.gray[1], dark: "#2b3036" }),
            "editor.debugger_active_line.background": null,
            "editor.line_number": pick({ light: "#1b1f234d", dark: primer.gray[2] }),
            "editor.active_line_number": editorForeground,
            "editor.hover_line_number": null,
            "editor.invisible": null,
            "editor.wrap_guide": pick({ light: primer.gray[2], dark: primer.white }),
            "editor.active_wrap_guide": pick({ light: primer.gray[2], dark: primer.white }),
            "editor.indent_guide": pick({ light: "#eff2f6", dark: primer.gray[1] }),
            "editor.indent_guide_active": pick({ light: "#d7dbe0", dark: primer.gray[2] }),
            "editor.document_highlight.read_background": pick({ light: "#0366d611", dark: "#3392FF11" }),
            "editor.document_highlight.write_background": pick({ light: "#0366d611", dark: "#3392FF11" }),
            "editor.document_highlight.bracket_background": pick({ light: "#34d05840", dark: "#17E5E611" }),
            "terminal.background": pick({ light: primer.gray[1], dark: "#1f2428" }),
            "terminal.foreground": primer.gray[6],
            "terminal.ansi.background": null,
            "terminal.bright_foreground": null,
            "terminal.dim_foreground": null,
            "terminal.ansi.black": pick({ light: primer.gray[9], dark: primer.gray[3] }),
            "terminal.ansi.bright_black": pick({ light: primer.gray[4], dark: primer.gray[5] }),
            "terminal.ansi.dim_black": null,
            "terminal.ansi.red": primer.red[5],
            "terminal.ansi.bright_red": primer.red[6],
            "terminal.ansi.dim_red": null,
            "terminal.ansi.green": primer.green[5],
            "terminal.ansi.bright_green": primer.green[6],
            "terminal.ansi.dim_green": null,
            "terminal.ansi.yellow": pick({ light: primer.yellow[7], dark: primer.yellow[6] }),
            "terminal.ansi.bright_yellow": pick({ light: primer.yellow[8], dark: primer.yellow[6] }),
            "terminal.ansi.dim_yellow": null,
            "terminal.ansi.blue": primer.blue[5],
            "terminal.ansi.bright_blue": primer.blue[6],
            "terminal.ansi.dim_blue": null,
            "terminal.ansi.magenta": primer.purple[6],
            "terminal.ansi.bright_magenta": primer.purple[6],
            "terminal.ansi.dim_magenta": null,
            "terminal.ansi.cyan": pick({ light: "#1b7c83", dark: "#39c5cf" }),
            "terminal.ansi.bright_cyan": pick({ light: "#3192aa", dark: "#56d4dd" }),
            "terminal.ansi.dim_cyan": null,
            "terminal.ansi.white": pick({ light: primer.gray[5], dark: primer.gray[6] }),
            "terminal.ansi.bright_white": pick({ light: primer.gray[3], dark: primer.gray[9] }),
            "terminal.ansi.dim_white": null,
            "link_text.hover": pick({ light: primer.blue[6], dark: primer.blue[7] }),
            "version_control.added": primer.green[5],
            "version_control.deleted": primer.red[5],
            "version_control.modified": primer.blue[6],
            "version_control.renamed": null,
            "version_control.conflict": primer.orange[6],
            "version_control.ignored": primer.gray[4],
            "version_control.conflict.ours_background": null,
            "version_control.conflict.theirs_background": null,
            "version_control.conflict.ours_marker_background": null,
            "version_control.conflict.theirs_marker_background": null,
            "version_control.conflict.divider_background": null,
            "conflict": primer.orange[6],
            "conflict.background": alpha(primer.orange[6] as string, .2),
            "conflict.border": pick({ light: primer.gray[2], dark: primer.white }),
            "created": pick({ light: primer.green[5], dark: primer.green[4] }),
            "created.background": alpha(pick({ light: primer.green[5], dark: primer.green[4] }), .2),
            "created.border": pick({ light: primer.gray[2], dark: primer.white }),
            "deleted": primer.red[5],
            "deleted.background": alpha(primer.red[5] as string, .2),
            "deleted.border": pick({ light: primer.gray[2], dark: primer.white }),
            "error": primer.red[6],
            "error.background": primer.gray[0],
            "error.border": pick({ light: primer.gray[2], dark: primer.white }),
            "hidden": primer.gray[5],
            "hidden.background": null,
            "hidden.border": pick({ light: primer.gray[2], dark: primer.white }),
            "hint": primer.muted,
            "hint.background": primer.gray[0],
            "hint.border": pick({ light: primer.gray[2], dark: primer.white }),
            "ignored": primer.gray[4],
            "ignored.background": null,
            "ignored.border": pick({ light: primer.gray[2], dark: primer.white }),
            "info": primer.blue[6],
            "info.background": primer.green[2],
            "info.border": primer.blue[6],
            "modified": pick({ light: primer.blue[4], dark: primer.blue[5] }),
            "modified.background": null,
            "modified.border": pick({ light: primer.gray[2], dark: primer.white }),
            "predictive": pick({ light: primer.gray[4], dark: primer.gray[3] }),
            "predictive.background": null,
            "predictive.border": pick({ light: primer.gray[2], dark: primer.white }),
            "renamed": null,
            "renamed.background": null,
            "renamed.border": pick({ light: primer.gray[2], dark: primer.white }),
            "success": null,
            "success.background": null,
            "success.border": pick({ light: primer.gray[2], dark: primer.white }),
            "unreachable": null,
            "unreachable.background": null,
            "unreachable.border": pick({ light: primer.gray[2], dark: primer.white }),
            "warning": primer.yellow[6],
            "warning.background": primer.gray[0],
            "warning.border": pick({ light: primer.gray[2], dark: primer.white }),
            "players": [
                {
                    "cursor": primer.blue[6],
                    "selection": alpha(primer.blue[2] as string, 0.2),
                    "background": primer.blue[6]
                },
                {
                    "cursor": primer.gray[6],
                    "selection": alpha(primer.gray[2] as string, 0.2),
                    "background": primer.gray[6]
                },
                {
                    "cursor": primer.green[6],
                    "selection": alpha(primer.green[2] as string, 0.2),
                    "background": primer.green[6]
                },
                {
                    "cursor": primer.orange[6],
                    "selection": alpha(primer.orange[2] as string, 0.2),
                    "background": primer.orange[6]
                },
                {
                    "cursor": primer.pink[6],
                    "selection": alpha(primer.pink[2] as string, 0.2),
                    "background": primer.pink[6]
                },
                {
                    "cursor": primer.purple[6],
                    "selection": alpha(primer.purple[2] as string, 0.2),
                    "background": primer.purple[6]
                },
                {
                    "cursor": primer.red[6],
                    "selection": alpha(primer.red[2] as string, 0.2),
                    "background": primer.red[6]
                },
                {
                    "cursor": primer.yellow[6],
                    "selection": alpha(primer.yellow[2] as string, 0.2),
                    "background": primer.yellow[6]
                },
            ],
            "syntax": {
                "attribute": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "boolean": {
                    "color": primer.blue[6],
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "character": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "character.special": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "comment": {
                    "color": pick({ light: primer.gray[5], dark: primer.gray[4] }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "comment.doc": {
                    "color": pick({ light: primer.gray[5], dark: primer.gray[4] }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "comment.documentation": {
                    "color": pick({ light: primer.gray[5], dark: primer.gray[4] }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "comment.error": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "comment.hint": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "comment.note": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "comment.todo": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "concept": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "constant": {
                    "color": primer.blue[6],
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "constant.builtin": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "constant.macro": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "constructor": {
                    "color": primer.green[6],
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "diff.minus": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "diff.plus": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "embedded": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "emphasis": {
                    "color": editorForeground,
                    "background_color": null,
                    "font_style": "italic",
                    "font_weight": null
                },
                "emphasis.strong": {
                    "color": editorForeground,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": 700
                },
                "enum": {
                    "color": primer.blue[6],
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "field": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "float": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "function": {
                    "color": pick({ light: primer.purple[5], dark: primer.purple[6] }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "function.builtin": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "function.call": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "function.decorator": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "function.macro": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "function.method": {
                    "color": pick({ light: primer.purple[5], dark: primer.purple[6] }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "function.method.call": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "hint": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "keyword": {
                    "color": pick({ light: primer.red[5], dark: primer.red[6] }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "keyword.conditional": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "keyword.conditional.ternary": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "keyword.coroutine": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "keyword.debug": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "keyword.directive": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "keyword.directive.define": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "keyword.exception": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "keyword.export": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "keyword.function": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "keyword.import": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "keyword.modifier": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "keyword.operator": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "keyword.repeat": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "keyword.return": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "keyword.type": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "label": {
                    "color": pick({ light: primer.purple[5], dark: primer.purple[6] }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "link_text": {
                    "color": primer.blue[8],
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "link_uri": {
                    "color": primer.blue[8],
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "module": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "namespace": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "number": {
                    "color": primer.blue[6],
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "number.float": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "operator": {
                    "color": pick({ light: primer.red[5], dark: primer.red[6] }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "parameter": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "parent": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "predictive": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "predoc": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "primary": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "property": {
                    "color": primer.blue[6],
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "punctuation": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "punctuation.bracket": {
                    "color": primer.blue[6],
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "punctuation.delimiter": {
                    "color": pick({ light: primer.red[5], dark: primer.red[6] }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "punctuation.list_marker": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "punctuation.special": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "punctuation.special.symbol": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "string": {
                    "color": pick({ light: primer.blue[8], dark: "#9ecbff" }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "string.doc": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "string.documentation": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "string.escape": {
                    "color": pick({ light: primer.blue[8], dark: "#9ecbff" }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "string.regex": {
                    "color": pick({ light: primer.blue[8], dark: "#9ecbff" }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "string.regexp": {
                    "color": pick({ light: primer.blue[8], dark: "#9ecbff" }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "string.special": {
                    "color": pick({ light: primer.blue[8], dark: "#9ecbff" }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "string.special.path": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "string.special.symbol": {
                    "color": pick({ light: primer.blue[8], dark: "#9ecbff" }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "string.special.url": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "symbol": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "tag": {
                    "color": primer.green[6],
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "tag.attribute": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "tag.delimiter": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "tag.doctype": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "text": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "text.literal": {
                    "color": pick({ light: primer.blue[8], dark: "#9ecbff" }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "title": {
                    "color": pick({ light: primer.purple[5], dark: primer.purple[6] }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "type": {
                    "color": pick({ light: primer.purple[5], dark: primer.purple[6] }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "type.builtin": {
                    "color": pick({ light: primer.purple[5], dark: primer.purple[6] }),
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "type.class.definition": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "type.definition": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "type.interface": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "type.super": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "variable": {
                    "color": editorForeground,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "variable.builtin": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "variable.member": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "variable.parameter": {
                    "color": null,
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "variable.special": {
                    "color": primer.blue[6],
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                },
                "variant": {
                    "color": "#000",
                    "background_color": null,
                    "font_style": null,
                    "font_weight": null
                }
            }
        },
    };
}

export {
    getTheme
}