export default {
    methods: {
        getProducts() {
            //Fetch all products
            return fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
        },
        getProduct(id) {
            //Fetch only one product
            return fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
        }
    }
}