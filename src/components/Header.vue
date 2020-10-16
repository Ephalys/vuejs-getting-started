<template>
  <header id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/cart">Cart</router-link>
    <router-link to="/contact">Contact</router-link>
  </header>
</template>

<style scoped lang="scss">
#nav {
  padding: 15px;
  background-color: #e7e7e7;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin: 0 15px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>