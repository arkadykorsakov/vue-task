<template>
  <div>
    <h4 v-if="!task" class="center">Задача не найдена</h4>
    <AppPage v-else title="Обновить задачу">
      <form class="form" @submit.prevent="onSubmit">
        <div :class="['form-control', { invalid: nError }]">
          <label for="name">Название</label>
          <input type="text" id="name" v-model="name" @input="nError = ''" />
          <small v-if="nError">{{ nError }}</small>
        </div>
        <button class="btn primary" type="submit">Обновить</button>
      </form>
    </AppPage>
  </div>
</template>

<script>
import AppPage from '@/components/ui/AppPage.vue'
export default {
  components: { AppPage },
  data() {
    return {
      name: '',
      nError: '',
      task: null
    }
  },
  methods: {
    onSubmit() {
      if (!this.name) this.nError = 'Обязательное для заполнения поле'
      this.$store.dispatch('updateTask', {
        taskId: this.$route.params.id,
        newTask: { name: this.name }
      })
      this.$router.push('/tasks')
    }
  },
  async mounted() {
    this.task = await this.$store.dispatch('getTask', this.$route.params.id)
    this.name = this.task.name
  }
}
</script>

<style></style>
