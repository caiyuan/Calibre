## 阅读器服务

```sh
'/Applications/calibre.app/Contents/MacOS/calibre-server' --help
```

## 阅读器配置

- 配色方案

```json
{
"*🦉 墨黑色":{"name":"🦉 墨黑色","foreground":"#c3c3c3","background":"#1c1c1c","link":"#0099ff"},
"*🌘 夜幕黑":{"name":"🌘 夜幕黑","foreground":"#a1a1a1","background":"#000000","link":"#7f3500"},
"*🌾 浅黄色":{"name":"🌾 浅黄色","foreground":"#1a1a1a","background":"#e4dfcd","link":"#9b680e"},
"*🐝 浅墨色":{"name":"🐝 浅墨色","foreground":"#dddddd","background":"#2d2d2d","link":"#dddddd"},
"*🍀 浅绿色":{"name":"🍀 浅绿色","foreground":"#1a1a1a","background":"#a6c9ab","link":"#14801d"}
}
```

- 标记样式

```json
[
{"type":"custom","kind":"decoration","text-decoration-line":"underline","text-decoration-style":"solid","text-decoration-color":"#ffff00","friendly_name":"黄色的下划线"},
{"type":"custom","kind":"decoration","text-decoration-line":"underline","text-decoration-style":"double","text-decoration-color":"#ffff00","friendly_name":"黄色的双下划线"},
{"type":"custom","kind":"decoration","text-decoration-line":"underline","text-decoration-style":"solid","text-decoration-color":"#ff0000","friendly_name":"红色的下划线"},
{"type":"custom","kind":"decoration","text-decoration-line":"underline","text-decoration-style":"double","text-decoration-color":"#ff0000","friendly_name":"红色的双下划线"},
{"type":"custom","kind":"decoration","text-decoration-line":"underline","text-decoration-style":"solid","text-decoration-color":"currentColor","friendly_name":"文本颜色的下划线"},
{"type":"custom","kind":"decoration","text-decoration-line":"underline","text-decoration-style":"double","text-decoration-color":"currentColor","friendly_name":"文本颜色的双下划线"}
]
```

- 版面样式

```css
/* 内容样式 */
html {
    -webkit-font-smoothing: subpixel-antialiased;
    font-family: 'PingFang SC', 'PingFang TC';
    font-variation-settings: normal;
    font-weight: normal;
}
h1, h2, h3, h4, h5, h6 {
    font-family: 'Xingkai SC', 'Xingkai TC';
    line-height: 1.7rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
}
p {
    font-size: 1rem;
    line-height: 1.7rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
a {
    text-decoration: none;
}
sup {
    font-size: x-small;
    line-height: 1rem;
    vertical-align: super;
}
```

```css
/* 卷轴模式 */
body.calibre-viewer-scrolling {
    max-width: 100%;
    margin: auto !important;
}
body.calibre-viewer-scrolling::before, body.calibre-viewer-scrolling::after {
    content: "☄";
    display: block;
    text-align: center;
    font-size: 30px;
    filter: invert(50%);
    margin: 15% auto;
}
```

```css
/* 文本排布 */
* {
    writing-mode: horizontal-tb !important;
}
```

```css
/* ... */
body {
    -webkit-font-smoothing: subpixel-antialiased;
}
h1, h2, h3, h4, h5, h6 {
    font-family: 'MiSans VF', 'MiSans TC VF';
    font-weight: bold;
}
p, p[class] {
    font-family: 'LXGW WenKai GB', 'LXGW WenKai TC';
    font-weight: 400;
}
```
