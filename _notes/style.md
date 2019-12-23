## Loader
- style -> css-loader + sass-loader

## css
```
npm install style-loader css-loader sass-loader -D
```

style-loader 的功能就一个，在 DOM 里插入一个 <style> 标签，并且将 CSS 写入这个标签内。
简单来说就是这样：
```
const style = document.createElement('style'); // 新建一个 style 标签
style.type = 'text/css';
style.appendChild(document.createTextNode(content)) // CSS 写入 style 标签
document.head.appendChild(style); // style 标签插入 head 中
```