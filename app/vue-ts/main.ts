
import * as Vue from 'vue'
import App from './hello'

// mount
new Vue({
    el: '#app',
    render: function(h){
        return h(App, {
            props: { propMessage: 'World' }
        });
    }
})