## 阅读器配置

- iBook

| 名称 |  浅黄色 |  深灰色 | ☘️ 护眼绿 | 🍂 时报黄 | 📚 微阅黑 |
| --- | --- | --- | --- | --- | --- |
| 背景 | #F7F1E4 | #1E1E1E | #A6C9AB | #FFF1E5 | #1C1C1D |
| 前景 | #262523 | #B5B5B5 | #222222 | #33302E | #B2B4B8 |
| 链接 | #B98A2B | #2E7CB8 | #14801D | #990F3D | #0097FF |

- 样式

```css
html, p {
    font-family: 'OPlusSans 3.0';
    font-weight: unset;
    line-height: 1.9em;
    font-size: 1em;
    margin: unset;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: 1.5em;
    color: unset !important;
    margin-top: 1.5em;
    margin-bottom: 1em;
}

/* ~~~~~~~~~~分隔符~~~~~~~~~~ */

a { text-decoration: none; }

sup, sup a {
    font-family: monospace;
    font-size: x-small;
    vertical-align: bottom;
}

image, img, svg {
    display: block;
    margin: auto !important;
    padding: 0.25em !important;
    max-width: 65% !important;
}
```

```css
* { writing-mode: unset !important; }
```

## 其它

- PDF

| 属性 | 值 |
| --- | --- |
| 字号 | 38 |
| 边距 | 150 |
