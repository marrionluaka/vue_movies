<template>
  <div class="profile-thumb">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProfileThumbnail',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>

</style>
