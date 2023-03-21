## 阅读器配置

- iBook

| 名称 |  浅黄色 |  深灰色 |
| --- | --- | --- |
| 背景 | #F7F1E4 | #1E1E1E |
| 前景 | #262523 | #B5B5B5 |
| 链接 | #B98A2B | #2E7CB8 |


- 样式

```css
* {
    writing-mode: unset !important;
}

/* ~~~~~~~~~~分隔符~~~~~~~~~~ */

html, p {
    font-family: 'Noto Sans SC';
    font-weight: normal;
    font-size: 1em;
    line-height: 1.5em;
    margin: 0;
}

h1, h2, h3, h4, h5, h6 {
    color: unset !important;
    font-weight: bold;
    line-height: 1.5em;
    margin-top: 1.5em;
    margin-bottom: 1em;
}

/* ~~~~~~~~~~分隔符~~~~~~~~~~ */

image, img, svg {
    display: block;
    margin: auto !important;
    padding: 1px !important;
    max-width: 65% !important;
}

[class*='kai'] {
    font-family: 'STKaiti';
}
[class*='song'] {
    font-family: 'STFangsong';
}
```

## 其它

- PDF
```
字号 38
边距 150
```
