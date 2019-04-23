<template>
  <div>
    <form @submit.prevent="handleSubmitAsync">
      <input v-model="username" type="text" data-username />
      <input type="submit">
    </form>

    <div class="message" v-show="submitted">
      Thank you for your submission, {{ username }}.
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormSubmitter',

  data: () => ({
    username: '',
    submitted: false,
  }),

  methods: {
    handleSubmitAsync() {
      const vm = this;
      return this.$http.get('/api/v1/register', { username: this.username })
        .then(() => {
          vm.submitted = true;
        })
        .catch(console.error);
    }
  }
}
</script>
