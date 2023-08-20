## 阅读器服务

```sh
'/Applications/calibre.app/Contents/MacOS/calibre-server' --help
```

## 阅读器配置

- 配色方案

| 名称 | ☘️ 护眼绿 | 🌆 落日黄 | 🌃 午夜黑 | 📚 微阅黑 |
| --- | --- | --- | --- | --- |
| 前景 | #333333 | #333333 | #666666 | #D0D3D8 |
| 背景 | #A6C9AB | #E4DFCD | #000000 | #1C1C1D |
| 链接 | #14801D | #9B680E | #7F3500 | #0097FF |

```json
{
"*☘️ 护眼绿":{"name":"☘️ 护眼绿","foreground":"#333333","background":"#a6c9ab","link":"#14801d"},
"*🌆 落日黄":{"name":"🌆 落日黄","foreground":"#333333","background":"#e4dfcd","link":"#9b680e"},
"*🌃 午夜黑":{"name":"🌃 午夜黑","foreground":"#666666","background":"#000000","link":"#7f3500"},
"*📚 深黑色":{"name":"📚 深黑色","foreground":"#d0d3d8","background":"#1c1c1d","link":"#0097ff"}
}
```

- 样式规则

```css
* { writing-mode: horizontal-tb !important; }
```

```css
body {
    font-family: 'HarmonyOS Sans SC';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: 1.5rem;
    margin: 1.5rem 0 1rem 0;
}

p {
    font-weight: normal;
    line-height: 1.5rem;
    margin: 0.7rem 0;
}

a { text-decoration: none; }

sup {
    font-size: x-small;
    line-height: 1rem;
    vertical-align: super;
}
```

```css
image, img, svg {
    display: block;
    margin: auto;
    padding: 0.25rem;
    max-width: 65% !important;
    min-width: auto !important;
}
```

## 其它

- PDF

| 属性 | 值 |
| --- | --- |
| 字号 | 38 |
| 边距 | 150 |
