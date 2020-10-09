<template>
  <div class="products__list">
    <router-link :to="/product/ + product.id" v-for="product in products" :key="product.id" class="product__item">
      <img :src="product.image" :alt="product.title">
      <p class="product__item-title">{{product.title}}</p>
      <p class="product__item-price">{{product.price}}€</p>
    </router-link>
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
  color: #2c3e50;
  text-decoration: none;

  img {
    max-height: 200px;
    max-width: 100%;
    margin: 0 auto 15px;
  }

  &-title {
    font-weight: bold;
    margin-bottom: 5px;
  }
  &-price {
    font-size: 14px;
  }
}
</style>