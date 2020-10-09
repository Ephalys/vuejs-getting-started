<template>
  <div class="about">
    <Emoji altcode="💸"/>
    <h1>Check all products</h1>
    <ProductList :products="this.productsList"/>
  </div>
</template>
<script>
import Emoji from "@/components/Emoji";
import products from "@/mixins/products";
import ProductList from "@/components/ProductsList";
export default {
  components: {ProductList, Emoji},
  data() {
    return {
      productsList: []
    }
  },
  created() {
    this.getProducts()
    .then(data => this.productsList = data)
        .then(() => console.log(this.productsList))
        .catch(err => console.log(err))
  },
  mixins: [products]
}
</script>