/*new Vue({
    el: "#demo",
    data: {
        show: false
    }
})*/
new Vue({
    el: "#app-1",
    data:{
        message: 'Hello Vue.js!'
    }
})
let app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
    }
})
let app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
})
const stock = new Vue({
    el: '#app',
    data: {
        product:'New Balance'
    }
})
const app4 = new Vue({
    el: '#app-5',
    data: {
        products: ['Boots', 'jackets', 'socks']
    }
})