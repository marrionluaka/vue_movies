<template>
  <header>
    <SearchBar
      msg="Howdy-hoe!"
      @onSearch="onSearch"
    />
    <Bell
      :notifications="11"
      @onToggle="onToggle"
    />
    <div v-if="showNotifications">
      <p>Notifications popup</p>
    </div>
    <ProfileThumbnail msg="I'm a profile thumbnail"/>
  </header>
</template>

<script>
import SearchBar from './SearchBar.vue';
import Bell from './Bell.vue';
import ProfileThumbnail from './ProfileThumbnail.vue';

export default {
  name: 'Header',

  data: () => ({
    showNotifications: false,
  }),

  components: {
    SearchBar,
    Bell,
    ProfileThumbnail,
  },

  methods: {
    onSearch(search) {
      console.log(search);
    },

    onToggle() {
      this.showNotifications = !this.showNotifications;
    },
  },
};
</script>

<style>

</style>
