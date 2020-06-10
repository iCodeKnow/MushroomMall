<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">购物车（{{cartLength}}）</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navigationbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";
export default {
  name: "cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    cartLength() {
      return this.$store.getters.cartLength;
    }
  }
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
