<template>
  <AppPage title="Задачи">
    <template #header>
      <router-link tag="button" to="/tasks/create" class="btn">
        Создать
      </router-link>
    </template>
    <TaskTable :tasks="tasks" />
  </AppPage>
</template>

<script>
import AppPage from '@/components/ui/AppPage.vue'
import AppLoader from '@/components/ui/AppLoader.vue'
import TaskTable from '@/components/tasks/TaskTable.vue'
import { mapGetters } from 'vuex'
export default {
  components: { AppPage, AppLoader, TaskTable },
  computed: {
    ...mapGetters(['tasks'])
  }
}
</script>

<style></style>
