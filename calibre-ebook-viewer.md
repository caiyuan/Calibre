## 阅读器服务

```sh
'/Applications/calibre.app/Contents/MacOS/calibre-server' --help
```

## 阅读器配置

- 配色方案

| 名称 |  浅黄色 |  深灰色 | ☘️ 护眼绿 | 🍂 时报黄 | 📚 微阅黑 |
| --- | --- | --- | --- | --- | --- |
| 背景 | #F7F1E4 | #1E1E1E | #A6C9AB | #FFF1E5 | #1C1C1D |
| 前景 | #262523 | #B5B5B5 | #222222 | #33302E | #D0D3D8 |
| 链接 | #B98A2B | #2E7CB8 | #14801D | #990F3D | #0097FF |

`calibre-session--user_color_schemes`
```json
{
"* 浅黄色":{"name":" 浅黄色","foreground":"#262523","background":"#f7f1e4","link":"#b98a2b"},
"* 深灰色":{"name":" 深灰色","foreground":"#b5b5b5","background":"#1e1e1e","link":"#2e7cb8"},
"*☘️ 护眼绿":{"name":"☘️ 护眼绿","foreground":"#222222","background":"#a6c9ab","link":"#14801d"},
"*🍂 时报黄":{"name":"🍂 时报黄","foreground":"#33302e","background":"#fff1e5","link":"#990f3d"},
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

p {
    font-weight: normal;
    line-height: 1.9rem;
    margin: 0;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: 1.5rem;
    margin: 1.5rem 0 1rem 0;
}

a { text-decoration: none; }

sup {
    font-size: x-small;
    line-height: 1rem;
    vertical-align: super;
}

image, img, svg {
    display: block;
    margin: auto;
    padding: 0.25rem;
    max-width: 65% !important;
}
```

## 其它

- PDF

| 属性 | 值 |
| --- | --- |
| 字号 | 38 |
| 边距 | 150 |
