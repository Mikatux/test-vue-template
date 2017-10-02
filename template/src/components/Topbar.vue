<template>
  <header class="topbar">
    <span>{{ name }}</span>
    <router-link to="Login" v-if="!isLogged">Login</router-link>
    <router-link to="Logout" v-else>Logout</router-link>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'topbar',
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters({
      isLogged: 'isLogged',
    }),
  },
};
</script>

<style scoped lang="scss">
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #35495E;
  height: 64px;
  width: 100%;
  color: #FEFEFE;
}
</style>
