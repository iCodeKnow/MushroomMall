<template>
  <swiper class="swipe">
    <swiper-item v-for="(item,index) in topImages" :key="index">
      <img :src="item" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";
export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.swipe {
  height: 300px;
  overflow: hidden;
}
</style>