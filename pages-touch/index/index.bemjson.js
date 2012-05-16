({
    block: 'b-page',
    title: 'bem-bl-touch-test',
    head: [
        {
            elem: 'css',
            url: '_index.css'
        },
        {
            block: 'i-jquery',
            elem: 'core'
        },
        {
            elem: 'js',
            url: '_index.js'
        }
    ],
    content: [
        {
            block: 'b-slider',
            mods: {
                type: 'per-screen'
            },
            mix: [{
                block: 'b-head-slider'
            }],
            content: [
                {
                    elem: 'item',
                    mix: [{
                        block: 'b-head-slider',
                        elem: 'item',
                        elemMods: {
                            type: 'android'
                        }
                    }]
                },{
                    elem: 'item',
                    mix: [{
                        block: 'b-head-slider',
                        elem: 'item',
                        elemMods: {
                            type: 'trollface'
                        }
                    }]
                },{
                    elem: 'item',
                    mix: [{
                        block: 'b-head-slider',
                        elem: 'item',
                        elemMods: {
                            type: 'megusta'
                        }
                    }]
                }
            ]
        },
        {
            block: 'b-slider',
            mods: {
                type: 'per-screen'
            },
            mix: [{
                block: 'b-body-slider'
            }],
            content: [
                {
                    elem: 'item'
                },{
                    elem: 'item',
                    mix: [{
                        block: 'b-body-slider',
                        elem: 'item',
                        elemMods: {
                            type: 'opera'
                        }
                    }]
                },{
                    elem: 'item',
                    mix: [{
                        block: 'b-body-slider',
                        elem: 'item',
                        elemMods: {
                            type: 'firefox'
                        }
                    }]
                }
            ]
        }
    ]
})