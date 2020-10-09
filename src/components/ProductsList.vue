<template>
  <div class="products__list">
    <div v-for="product in products" :key="product.id" class="product__item">
      <img :src="product.image" :alt="product.title">
      <p class="product__item-title">{{product.title}}</p>
      <p class="product__item-price">{{product.price}}€</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  }
}
</script>

<style lang="scss">
.products__list {
  display: flex;
  flex-wrap: wrap;
}
.product__item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 33%;
  padding: 15px;
  margin-bottom: 30px;
  overflow: hidden;
  text-align: left;

  img {
    max-height: 200px;
    max-width: 100%;
    margin: 0 auto 15px;
  }

  &-title {
    font-weight: bold;
  }
}
</style>