<template>
  <div id="movie-listing">
    <Header />
    <br />
    <!--  -->

    <SideBar>
      <div v-for="n in 3" :key="n">
        <p>index: {{ n }}</p>
      </div>
    </SideBar>
    <br />
    <!--  -->

    <Carousel />
    <br />
    <!--  -->

    <section>
      <div v-for="n in 2" :key="n">
        <Slider title="Featured"/>
      </div>
    </section>
    <br />
    <!--  -->

    <TopChannels />
    <!--  -->
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import SideBar from './components/Sidebar/Sidebar.vue';
import Carousel from './components/Carousel/Carousel.vue';
import Slider from './components/Slider/Slider.vue';
import TopChannels from './components/TopChannels/TopChannels.vue';

export default {
  name: 'app',

  components: {
    Header,
    SideBar,
    Carousel,
    Slider,
    TopChannels,
  },

  data: () => ({

  }),
};
</script>

<style>
#movie-listing {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
