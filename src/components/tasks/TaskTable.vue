<template>
  <div>
    <h4 v-if="!tasks.length" class="center">Задач нет</h4>
    <table class="table" v-else>
      <thead>
        <tr>
          <th>#</th>
          <th>Задача</th>
          <th>Завершена</th>
          <th>Редактировать</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="task.id">
          <td>{{ index + 1 }}</td>
          <td>{{ task.name }}</td>
          <td>
            <input
              type="checkbox"
              :checked="task.completed"
              @change="changeCompleted(task.id, task.completed)"
            />
          </td>
          <td>
            <router-link
              :to="`/tasks/${task.id}/edit`"
              tag="button"
              class="btn primary"
              >Обновить</router-link
            >
          </td>
          <td>
            <button
              class="btn danger"
              @click=";(modal = true), (activeTaskId = task.id)"
            >
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <AppModal v-if="modal" @close="modal = false" title="Удалить задачу">
      <div style="display: flex">
        <button class="btn primary" @click="modal = false">Отменить</button>
        <form @submit.prevent="deleteTask">
          <button class="btn danger">Удалить</button>
        </form>
      </div>
    </AppModal>
  </div>
</template>

<script>
import AppModal from '../ui/AppModal.vue'
export default {
  components: { AppModal },
  props: {
    tasks: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      modal: false,
      activeTaskId: ''
    }
  },
  methods: {
    changeCompleted(taskId, taskCompleted) {
      this.$store.dispatch('updateTask', {
        taskId,
        newTask: { completed: !taskCompleted }
      })
    },
    deleteTask() {
      this.$store.dispatch('deleteTask', this.activeTaskId)
      this.modal = false
    }
  }
}
</script>

<style></style>
