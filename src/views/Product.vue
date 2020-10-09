<template>
  <div class="product">
    <Emoji altcode="🛍"/>
    <h1>This one is dope</h1>
    <ProductBlock :productData="productData"/>
  </div>
</template>
<script>
import Emoji from "@/components/Emoji";
import products from "@/mixins/products";
import ProductList from "@/components/ProductsList";
import ProductBlock from "@/components/ProductBlock";
export default {
  components: {ProductBlock, ProductList, Emoji},
  data() {
    return {
      productData: []
    }
  },
  created() {
    this.getProduct(this.$route.params.id)
        .then(data => this.productData = data)
        .then(() => console.log(this.productData))
        .catch(err => console.log(err))
  },
  mixins: [products]
}
</script>