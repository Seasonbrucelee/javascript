const app = new Vue({
    el: "#app",
    data: {
            products:[]
    },
    mounted () {
        axios
        .get('products.json')
          .then(response => (this.products = response.data.products))
    }
})