var Vue = require('vue')
var App = require('./App.vue');

new Vue({
    el: '#app',
    render: function(h){
        return h(App);
    }
})