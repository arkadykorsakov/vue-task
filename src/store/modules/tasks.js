export default {
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  },
  getters: {
    tasks: (s) => s.tasks
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter((t) => t.id !== taskId)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    setTasks(state, tasks) {
      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  },
  actions: {
    storeTask({ commit, dispatch }, task) {
      const newTask = {
        id: Date.now(),
        completed: false,
        ...task
      }
      commit('addTask', newTask)
      commit('setMessage', {
        value: `Задача ${newTask.name} создана`,
        type: 'primary'
      })
      dispatch('clearMessage')
    },
    getTask({ getters }, taskId) {
      const tasks = JSON.parse(localStorage.getItem('tasks'))
      const task = tasks.find((task) => task.id === +taskId)
      return task
    },
    updateTask({ commit, dispatch }, { taskId, newTask }) {
      const tasks = JSON.parse(localStorage.getItem('tasks'))
      const newTasks = tasks.map((task) =>
        task.id === +taskId ? { ...task, ...newTask } : task
      )
      commit('setTasks', newTasks)
      commit('setMessage', {
        value: 'Задача обновлена',
        type: 'primary'
      })
      dispatch('clearMessage')
    },
    deleteTask({ commit, dispatch }, taskId) {
      commit('removeTask', taskId)
      commit('setMessage', {
        value: 'Задача удалена',
        type: 'primary'
      })
      dispatch('clearMessage')
    }
  },
  modules: {}
}
