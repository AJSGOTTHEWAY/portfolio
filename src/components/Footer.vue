<template>
  <div class="footer">

    <div class="left">
      Portfolio template by
      <a
        href="https://github.com/schouffy/gamedev-portfolio"
        target="_blank"
      >
        schouffy
      </a>
      — customized by Anthony Maldonado
    </div>

    <div class="right">
      Feel free to
      <router-link to="/contact">get in touch</router-link>
    </div>

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
  opacity: 0.7;
  padding-bottom: 30px;
}

.left, .right {
  padding-top: 10px;
  text-align: center;
}

@media only screen and (min-width: 620px){

  .footer {
    padding: 0;
  }

  .left, .right {
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