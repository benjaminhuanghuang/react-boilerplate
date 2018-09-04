## File process
- html -> html-webpack-plugin
- img/font -> url-loader, file-loader

## Html and fav icon
```
npm i html-webpack-plugin -D
```

## Image
- https://webpack.docschina.org/guides/asset-management/
```
npm install file-loader -D
```
- https://webpack.docschina.org/loaders
url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL,
Create seperate file when the content > size limit
url-loader depends on file-loader
```
npm install url-loader -D
```

## Font
```
npm i font-awesome -S
```
using file loader to process font file
