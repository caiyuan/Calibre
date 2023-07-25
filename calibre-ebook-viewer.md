## 阅读器服务

```sh
'/Applications/calibre.app/Contents/MacOS/calibre-server' --help
```

## 阅读器配置

- iBook

| 名称 |  浅黄色 |  深灰色 | ☘️ 护眼绿 | 🍂 时报黄 | 📚 微阅黑 |
| --- | --- | --- | --- | --- | --- |
| 背景 | #F7F1E4 | #1E1E1E | #A6C9AB | #FFF1E5 | #1C1C1D |
| 前景 | #262523 | #B5B5B5 | #222222 | #33302E | #D0D3D8 |
| 链接 | #B98A2B | #2E7CB8 | #14801D | #990F3D | #0097FF |

- 样式

```css
* { writing-mode: unset !important; }
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
    max-width: 65% !important;
    padding: 0.25rem;
}
```

## 其它

- PDF

| 属性 | 值 |
| --- | --- |
| 字号 | 38 |
| 边距 | 150 |
