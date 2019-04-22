import Vue from 'vue';
import MovieListing from './movie-listings/MovieListing.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(MovieListing),
}).$mount('#app');
