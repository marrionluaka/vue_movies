<template>
  <div class="bell">
    <button class="bell_btn" @click="onToggle">
      Bell <span v-if="showBubble" class="notifications">{{ notificationCount }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Bell',

  data: () => ({
    showBubble: true,
  }),

  props: {
    notifications: Number,
  },

  computed: {
    notificationCount() {
      return this.notifications > 9 ? '9+' : this.notifications;
    },
  },

  methods: {
    onToggle() {
      this.$emit('onToggle');

      if(this.showBubble)
        this.showBubble = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
