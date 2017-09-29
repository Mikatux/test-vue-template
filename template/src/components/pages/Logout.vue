<template>
  <div class="logout">
  </div>
</template>

<script>

export default {
  name: 'logout',
  mounted() {
    this.$store.dispatch('logout').then(() => {
      window.location.replace('/');
    });
  },
};
</script>

