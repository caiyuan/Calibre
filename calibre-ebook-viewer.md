## 阅读器服务

```sh
'/Applications/calibre.app/Contents/MacOS/calibre-server' --help
```

## 阅读器配置

- 配色方案

| 名称 | 🌱 护眼绿 | 🌄 晨曦黄 | 🌃 午夜黑 | 📖 微阅黑 |
| --- | --- | --- | --- | --- |
| 前景 | #333333 | #333333 | #666666 | #B2B2B2 |
| 背景 | #A6C9AB | #E4DFCD | #000000 | #1C1C1C |
| 链接 | #14801D | #9B680E | #7F3500 | #0099FF |

```json
{
"*🌱 护眼绿":{"name":"🌱 护眼绿","foreground":"#333333","background":"#a6c9ab","link":"#14801d"},
"*🌄 晨曦黄":{"name":"🌄 晨曦黄","foreground":"#333333","background":"#e4dfcd","link":"#9b680e"},
"*🌃 午夜黑":{"name":"🌃 午夜黑","foreground":"#666666","background":"#000000","link":"#7f3500"},
"*📖 微阅黑":{"name":"📖 微阅黑","foreground":"#b2b2b2","background":"#1c1c1c","link":"#0099ff"}
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
* { writing-mode: horizontal-tb !important; }
```

```css
html {
    -webkit-font-smoothing: antialiased;
}

body {
    font-family: 'PingFang SC';
}

h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
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

a { text-decoration: none; }

sup {
    font-size: x-small;
    line-height: 1rem;
    vertical-align: super;
}
```

## 其它

- PDF

| 属性 | 值 |
| --- | --- |
| 字号 | 38 |
| 边距 | 150 |
