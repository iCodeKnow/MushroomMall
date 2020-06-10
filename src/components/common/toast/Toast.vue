<template>
  <div class="toast">
    <div v-show="show" class="toast-i">{{message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.toast-i {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  color: #fff;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.75);
}
</style>