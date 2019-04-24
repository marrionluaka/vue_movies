<template>
  <div>
    <div class="username"> {{ username }} </div>

    <div class="fullName"> {{ fullName }} </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ComponentWithVuex',

  data() {
    return {
      username: this.$store.state.username,
    };
  },

  computed: {
    ...mapGetters(['fullName']),
  },
};
</script>
