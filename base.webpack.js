
var WrapperPlugin = require('wrapper-webpack-plugin');

exports.wrapper = new WrapperPlugin({
    header: 'window.__t0=window.performance.now(); window.__t= window.__t || []; window.__timer=window.__timer===undefined?null:window.__timer;\n',
    footer: 'window.__t.push(window.performance.now()-window.__t0);clearTimeout(window.__timer); window.__timer=setTimeout(function(){alert(window.__t.join(","))},1000)'
})
