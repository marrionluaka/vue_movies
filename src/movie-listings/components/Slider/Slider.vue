<template>
  <div class="slider">
    <h2>{{ title }}</h2>
    <div class="btns">
      <button>prev</button>
      <button>next</button>
    </div>
    <ul ng-repeat>
      <Slide />
    </ul>
  </div>
</template>

<script>
import Slide from './Slide.vue';

export default {
  props: ['title'],
  components: { Slide },
};
</script>

<style>

</style>
