<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" class="recommend-item" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    haha() {
      console.log(this.recommend);
    }
  }
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 6px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 70px;
  height: 65px;
  margin-bottom: 10px;
}
</style>