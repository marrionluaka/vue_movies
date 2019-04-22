<template>
  <div id="search-bar">
    <input
      type="text"
      placeholder="Search for Movies or Tv Series"
      v-model="search"
      @keydown.enter="onEnter"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',

  data() {
    return {
      search: '',
    };
  },

  methods: {
    onEnter() {
      this.$emit('onSearch', this.search);
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
