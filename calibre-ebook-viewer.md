## 阅读器服务

```sh
'/Applications/calibre.app/Contents/MacOS/calibre-server' --help
```

## 阅读器配置

- 配色方案

| 名称 | 🐝 蜂黄色 | 🌿 浅绿色 | 🌲 森绿色 | 🦉 墨黑色 | 🌘 夜幕黑 |
| --- | --- | --- | --- | --- | --- |
| 前景 | #333333 | #333333 | #c1bcb4 | #b2b2b2 | #666666 |
| 背景 | #e4dfcd | #a6c9ab | #345541 | #1c1c1c | #000000 |
| 链接 | #9b680e | #14801d | #79ea83 | #0099ff | #7f3500 |

```json
{
"*🐝 蜂黄色":{"name":"🐝 蜂黄色","foreground":"#333333","background":"#e4dfcd","link":"#9b680e"},
"*🌿 浅绿色":{"name":"🌿 浅绿色","foreground":"#333333","background":"#a6c9ab","link":"#14801d"},
"*🌲 森绿色":{"name":"🌲 森绿色","foreground":"#c1bcb4","background":"#345541","link":"#79ea83"},
"*🦉 墨黑色":{"name":"🦉 墨黑色","foreground":"#b2b2b2","background":"#1c1c1c","link":"#0099ff"},
"*🌘 夜幕黑":{"name":"🌘 夜幕黑","foreground":"#666666","background":"#000000","link":"#7f3500"}
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

- 样式规则

```css
* {
    writing-mode: horizontal-tb !important;
}
```

```css
html, body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Misans VF', 'Misans TC VF';
    font-variation-settings: "wght" 330;
}
h1, h2, h3, h4, h5, h6 {
    font-family: 'Libian SC', 'Libian TC';
    line-height: 1.7rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}
p {
    font-size: 1rem;
    line-height: 1.7rem;
    margin-top: 0;
    margin-bottom: 0;
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
h1, h2, h3, h4, h5, h6 {
    color: #bb1100;
    font-weight: bold;
}
p {
    margin-bottom: 1rem;
    line-height: 1.7rem;
}
```

## 其它

- PDF

| 属性 | 值 |
| --- | --- |
| 字号 | 38 |
| 边距 | 150 |
