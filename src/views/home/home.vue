<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      @itemClick="tabClick"
      ref="tabcl1"
      class="tab-cl"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="contents"
      ref="scroll"
      :probe-type="3"
      :pullUpLoad="true"
      @contentScroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature></feature>
      <tab-control :titles="['流行','新款','精选']" @itemClick="tabClick" ref="tabcl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/navigationbar/NavBar";
import HomeSwiper from "./childComps/homeSwiper";
import RecommendView from "./childComps/RecommendView";
import Feature from "./childComps/Feature";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsLitst";
import { getHomeMultiData, getHomeGoods } from "../../network/home";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backTop/BackTop";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffSetTop: 0,
      isTabFixed: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    this.$bus.$on("itemImageLoad", () => {
      this.$refs.scroll.scroll.refresh();
    });
  },
  destroyed() {
    console.log("haha");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultiData().then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
        default:
          this.currentType = "pop";
          break;
      }
      this.$refs.tabcl1.currentIndenx = index;
      this.$refs.tabcl2.currentIndenx = index;
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      if (position.y < -1500) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }
      if (-position.y > this.tabOffSetTop) {
        this.isTabFixed = true;
      } else {
        this.isTabFixed = false;
      }
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.finishPullUp();
    },
    swiperImageLoad() {
      this.tabOffSetTop = this.$refs.tabcl2.$el.offsetTop;
    }
  }
};
</script>

<style scoped>
#home {
  position: relative;
  padding-top: 44px;
  height: 100vh;
}
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;

  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  /* position: sticky; */
  top: 44px;
  background-color: #fff;
  z-index: 9999999999;
}
.contents {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tab-cl {
  position: relative;
  top: 0px;
}
</style>
