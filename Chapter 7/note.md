# min-content

width: min-content;

```css
figure {
    max-width: 300px; // 兼容旧浏览器
    max-width: min-content;
    margin: auto;
}

figure > img { max-width: inherit; } // min-content 生效这条语句就不会生效了
```

# table-layout: fixed

精确控制表格的列宽。

# calc(50% - 450px)

代替过去的外部全宽，内部居中布局。

用 calc 省略了外部的 div 标签。

# absolute & translate 实现垂直居中

因为 translate 的百分比值是根据元素自身的宽高进行计算的，所以可以在不知道元素自身宽高数值的情况下对元素进行移位居中。

# vw vh 基于视口的单位

1vw = 1% device-width

1vh = 1% device-height

