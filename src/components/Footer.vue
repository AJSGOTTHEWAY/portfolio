<template>
  <div class="footer">
    <div class="left">
      © 2026 Anthony Maldonado
    </div>

    <div class="right">
      <router-link to="/contact">Let's get in touch.</router-link>
    </div>

    <div style="clear: both;"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer"
});
</script>

<style scoped lang="less">
@import '../css/variables.less';

.footer {
  background-color: @bodyBgColor;
  width: 100%;
  font-size: 0.8em;
  opacity: 0.9;
  padding-bottom: 30px;
}

.left,
.right {
  padding-top: 10px;
  text-align: center;
}

a {
  color: @textColor;
}

@media only screen and (min-width: 620px) {
  .footer {
    padding: 0;
  }

  .left,
  .right {
    padding: 20px;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }
}
</style>