<template>
  <div>
    <span v-show="showSpan">
      Parent Component
    </span>
    <Child v-if="showChild" />
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  name: 'Parent',

  components: { Child },

  data: () => ({
    showSpan: false,
    showChild: false,
  }),
};
</script>
