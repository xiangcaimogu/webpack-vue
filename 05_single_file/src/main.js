import Vue from 'vue'//node_modules下面的vue:vue.runtime.esm.js
import App from './App.vue'
new Vue({
    el:'#app',
    render:creater=>creater(App)
    // components:{
    //     app:App
    // },
    // template:`<app/>`
})