import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    addTask(state, task) {
      state.tasks.push(task)
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(t => t.id !== id)
    },
    toggleTask(state, id) {
      const task = state.tasks.find(t => t.id === id)
      if (task) task.completed = !task.completed
    }
  },
  actions: {
    loadTasks({ commit }) {
      const data = localStorage.getItem('tasks')
      const tasks = data ? JSON.parse(data) : []
      commit('setTasks', tasks)
    },
    saveTasks({ state }) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    addNewTask({ commit, dispatch }, task) {
      commit('addTask', task)
      dispatch('saveTasks')
    },
    deleteTaskById({ commit, dispatch }, id) {
      commit('deleteTask', id)
      dispatch('saveTasks')
    },
    toggleTaskStatus({ commit, dispatch }, id) {
      commit('toggleTask', id)
      dispatch('saveTasks')
    }
  },
  getters: {
    allTasks(state) {
      return state.tasks
    },
    completedTasks(state) {
      return state.tasks.filter(t => t.completed)
    },
    pendingTasks(state) {
      return state.tasks.filter(t => !t.completed)
    }
  }
})
