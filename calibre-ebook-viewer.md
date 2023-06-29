## 阅读器配置

- iBook

| 名称 |  浅黄色 |  深灰色 | ☘️ 护眼绿 | 🍂 时报黄 | 📚 深黑色 |
| --- | --- | --- | --- | --- | --- |
| 背景 | #F7F1E4 | #1E1E1E | #A6C9AB | #FFF1E5 | #1C1C1D |
| 前景 | #262523 | #B5B5B5 | #222222 | #33302E | #D0D3D8 |
| 链接 | #B98A2B | #2E7CB8 | #14801D | #990F3D | #0097FF |


- 样式

```css
* {
    writing-mode: unset !important;
}

/* ~~~~~~~~~~分隔符~~~~~~~~~~ */

html, p {
    font-family: 'OPlusSans3.0-Light','STFangsong','STKaiti';
    font-weight: unset;
    font-size: 1em;
    line-height: 1.7em;
    margin: 0;
}

h1, h2, h3, h4, h5, h6 {
    color: unset !important;
    font-weight: bold;
    line-height: 1.5em;
    margin-top: 1.5em;
    margin-bottom: 1em;
}

a {
    text-decoration: none;
}

/* ~~~~~~~~~~分隔符~~~~~~~~~~ */

image, img, svg {
    display: block;
    margin: auto !important;
    padding: 0.25em !important;
    max-width: 65% !important;
}

[class*='song'] {
    font-family: 'STFangsong' !important;
}
[class*='kai'] {
    font-family: 'STKaiti' !important;
}
```

## 其它

- PDF
```
字号 38
边距 150
```
