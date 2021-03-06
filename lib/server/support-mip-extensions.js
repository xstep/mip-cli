/**
 * @file mip-extensions项目handlers
 * @author mengke01(kekee000@gmail.com)
 */

const mipExtensionDebug = require('./handler/mip-extension-debug');
const mipExtensionsList = require('./handler/mip-extensions-list');
const loadExtension = require('./handler/load-extension');

module.exports = [
    // 调试单个mip组件
    {
        location: /^\/local-extension-debug/i,
        handlers: [mipExtensionDebug()]
    },
    // mip extensions 加载器
    {
        location: /^\/local-extension-loader/i,
        handlers: [loadExtension()]
    },
    // mip 组件项目列表
    {
        location: /^\/(?:local-extensions-list)?(?:$|\?)$/i,
        handlers: [mipExtensionsList()]
    }
];
