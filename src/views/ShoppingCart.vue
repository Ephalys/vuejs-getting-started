<template>
  <div class="cart">
    <Emoji altcode="💸"/>
    <h1>Shopping Cart</h1>
    <table v-if="cartItems">
      <thead>
      <tr>
        <td>id</td>
        <td>Product name</td>
        <td>Price</td>
        <td>Quantity</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in cartItems" :key="product.id">
        <td>
          {{product.id}}
        </td>
        <td>
          {{product.title}}
        </td>
        <td>
          {{product.price}}
        </td>
        <td>
          {{product.qty}}
        </td>
      </tr>
      </tbody>
    </table>
    <p v-else>
      Votre panier est vide
    </p>
  </div>
</template>
<script>
import Emoji from "@/components/Emoji";
import cart from "@/mixins/cart";
export default {
  components: {Emoji},
  data() {
    return {
      cartItems: []
    }
  },
  created() {
    this.cartItems = this.getCart();
    console.log(this.cartItems)
  },
  mixins: [cart]
}
</script>