
> - 共有五種[通用字體](https://www.w3.org/Style/Examples/007/fonts.zh_HK.html)
>    - sans-serif (無襯線體)
>    - serif (襯線體)
>    - cursive (草書體)
>    - monospace (等寬體)
>    - fantasy (幻想體)

- 字体

```css
@font-face {
    font-family: Song;
    src: local('Songti SC');
}
@font-face {
    font-family: Kai;
    src: local('Kaiti SC');
}
```

- 标题

```css
h1 {
    font-size: 1.5em;
    text-align: center;
    margin-top: 2em;
    margin-bottom: 1.5em;
}
```

- 方框

```css
.tips {
    border-style: double;
}
```
```css
.tips {
    border-style: double;
    border-left: 0;
    border-right: 0;
}
```
```css
.tips {
  border: dashed 1px #727272;
  border-radius: 5px;
}
```
```css
.tips {
  background-color: rgba(200, 200, 200, 0.3);
  border-radius: 5px;
}
```

- 划线

```css
.underline {
    text-decoration: underline double 1px;
}
```
