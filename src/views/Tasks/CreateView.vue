<template>
  <AppPage title="Создать задачу">
    <form class="form" @submit.prevent="onSubmit">
      <div :class="['form-control', { invalid: nError }]">
        <label for="name">Название</label>
        <input type="text" id="name" v-model="name" @input="nError = ''" />
        <small v-if="nError">{{ nError }}</small>
      </div>
      <button class="btn primary" type="submit">Создать</button>
    </form>
  </AppPage>
</template>

<script>
import AppPage from '@/components/ui/AppPage.vue'
export default {
  components: { AppPage },
  data() {
    return {
      name: '',
      nError: ''
    }
  },
  methods: {
    onSubmit() {
      if (!this.name) this.nError = 'Обязательное для заполнения поле'
      this.$store.dispatch('storeTask', { name: this.name })
      this.$router.push('/tasks')
    }
  }
}
</script>

<style></style>
