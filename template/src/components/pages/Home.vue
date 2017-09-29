<template>
  <div class="home">
    <topbar></topbar>
    <main>
      HOME
    </main>
  </div>
</template>

<script>
import topbar from '@/components/Topbar';
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  components: {
    topbar,
  },
  data() {
    return {
      message: "{{ name }}"
    };
  },
};
</script>

<style scoped lang="scss">
@import '~style/theme.scss';

.home {}
</style>
