<template>
  <div class="home">
    <topbar></topbar>
    <main class="main">
      <img :src="logo" alt="L'Atelier">
      <div>
        <div class="text">{{ msg }}</div>
        <div class="subTitle">Essential Links</div>
        <ul>
          <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
          <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
          <li><a href="http://chat.vuejs.org/" target="_blank" rel="noopener">Vue Community Chat</a></li>
          <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
          <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank" rel="noopener">Docs for This Template</a></li>
        </ul>
        <div class="subTitle">Ecosystem</div>
        <ul>
          <li><a href="http://router.vuejs.org/" target="_blank" rel="noopener">vue-router</a></li>
          <li><a href="http://vuex.vuejs.org/" target="_blank" rel="noopener">vuex</a></li>
          <li><a href="http://vue-loader.vuejs.org/" target="_blank" rel="noopener">vue-loader</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>

import topbar from '@/components/Topbar';
import logo from '@/assets/logo.png';

export default {
  name: 'home',
  components: {
    topbar,
  },
  data() {
    return {
      msg: '{{ description }}',
      logo,
    };
  },
};
</script>

<style scoped lang="scss">
@import '~style/theme.scss';

.home {
  .main{
    justify-content: space-around;
  }
}
</style>
