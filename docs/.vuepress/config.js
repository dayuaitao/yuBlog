var config = {

    // 静态网站部署的目录
    base: '/yuBlog/',

    // 网站标题
    title: '鱼博客',

    // <meta name="description" content="...">
    description: '大鱼向东，遇门而不入',

    markdown: {

        // 显示代码行号
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: '前端', link: '/accumulate/12' },
            {
                text: '前端',
                items: [
                    { text: 'Promise', link: '/FrontEnd/Promise/1' },
                    { text: 'Japanese', link: '/language/japanese' }
                ]
            },
            // 下拉列表
            {
                text: 'GitHub',
                items: [
                    { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
                    {
                        text: '算法仓库',
                        link: 'https://github.com/OBKoro1/Brush_algorithm'
                    }
                ]
            } 

        ]
    }
}
 

module.exports = config