<template>
  <div id="app">
    <Header/>
    <div class="wrapper">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body, html {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .wrapper {
    padding: 30px;
  }
}
</style>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {Footer, Header}
}
</script>