Add path alias in webpack.config.js
```
resolve: {
        alias: {
            page: path.resolve(__dirname, 'src/page'),
            component: path.resolve(__dirname, 'src/component'),
            util: path.resolve(__dirname, 'src/util'),
            service: path.resolve(__dirname, 'src/service'),
        }
},
```

Use the path alias in source code
```
import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';
```

If we wnat to change the folder structure in the future, just need to modify the alias in the webpack.config.js.
No need to change the source code


