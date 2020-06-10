<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../../components/common/scroll/Scroll";
import CartListItem from "./CartListItem";
export default {
  components: {
    Scroll,
    CartListItem
  },
  data() {
    return {};
  },
  computed: {
    cartList() {
      return this.$store.getters.cartList;
    }
  },
  methods: {},
  activated() {
    this.$refs.scroll.scroll.refresh();
    console.log(this.$refs.scroll);
  }
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px -40px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>