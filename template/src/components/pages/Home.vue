<template>
  <div class="home">
    <topbar></topbar>
    <main>
      HOME
    </main>
    <div>
      \{{projectDescription}}
    </div>
  </div>
</template>

<script>
import topbar from '@/components/Topbar';

export default {
  name: 'home',
  components: {
    topbar,
  },
  data() {
    return {
      projectDescription: '{{ description }}',
    };
  },
};
</script>

<style scoped lang="scss">
@import '~style/theme.scss';

.home {}
</style>
