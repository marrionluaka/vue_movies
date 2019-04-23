<template>
  <div>
    <button @click="emitEvent">Click Me!</button>
  </div>
</template>

<script>
export default {
  name: 'Emitter',

  methods: {
    emitEvent() {
      this.$emit('myEvent', 'name', 'password');
    },
  },
};
</script>
