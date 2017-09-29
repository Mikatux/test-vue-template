<template>
  <div class="login">
  </div>
</template>

<script>
import Config from '@/config';

export default {
  name: 'login',
  mounted() {
    window.location.replace(Config.LOGIN_URL);
  },
};
</script>

