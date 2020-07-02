module.exports = {
    pages: {
        index: {
            entry: 'src/pages/Index/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
            // 当使用只有入口的字符串格式时，
            // 模板会被推导为 `public/subpage.html`
            // 并且如果找不到的话，就回退到 `public/index.html`。
            // 输出文件名会被推导为 `subpage.html`。
            // subpage: 'src/subpage/userRecharge_index.js'
        },
        course: {
            entry: 'src/pages/course/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'course.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '课程',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'course']
            // 当使用只有入口的字符串格式时，
            // 模板会被推导为 `public/subpage.html`
            // 并且如果找不到的话，就回退到 `public/index.html`。
            // 输出文件名会被推导为 `subpage.html`。
            // subpage: 'src/subpage/userRecharge_index.js'
        },
    },
    devServer: {
        //open: true,
        host: '10.1.1.56',
        port: '8080',
        https: false,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            // 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
            /*'/Index': {
              target: 'http://m.aniu.tv/Index', // 代理地址
              changeOrigin: true,
              pathRewrite: {
                '^/Index': '' // 将 /wxaniu 替换掉
              }
            },*/
            '/api': {
              target: 'http://zjtapi.dzcj.tv:8083/aniuapi', // 代理地址
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                '^/api': 'api' // 将 /api 替换掉
              }
            },
        }
    }

    // lintOnSave: false,
    // publicPath: process.env.NODE_ENV === 'production'
    //     ? './'
    //     : '/'
}
