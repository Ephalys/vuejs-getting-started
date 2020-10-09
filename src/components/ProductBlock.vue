<template>
  <div class="product__block">
    <div class="product__block-left">
      <img :src="productData.image" alt="">
    </div>
    <div class="product__block-right">
      <p class="product-title">{{productData.title}}</p>
      <p class="product-price">{{productData.price + '€'}}</p>

      <p class="product-label">Description</p>
      <p class="product-description">{{productData.description}}</p>
    </div>
  </div>
</template>
<script>
import Emoji from "@/components/Emoji";
export default {
  components: {Emoji},
  props: {
    productData: Object
  }
}
</script>

<style scoped lang="scss">
.product__block {
  display: flex;
  margin-top: 60px;
  &-left, &-right {
    width: 50%;
  }
  &-left {
    padding-right: 30px;
    img {
      width: 100%;
    }
  }
  &-right {
    padding-left: 30px;
    text-align: left;
    .product {
      &-title {
        font-weight: bold;
        margin-bottom: 5px;
        font-size: 24px;
      }
      &-label {
        font-weight: bold;
        margin: 30px 0 5px;
      }
    }
  }
}
</style>