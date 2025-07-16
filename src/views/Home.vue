


<template>
  <div>
    <task-form @add="addTask" />
    <div>
      <button @click="filter = 'all'">Tümü</button>
      <button @click="filter = 'completed'">Tamamlanan</button>
      <button @click="filter = 'pending'">Bekleyen</button>
    </div>
    <task-list
      :tasks="filteredTasks"
      @delete="deleteTask"
      @toggle="toggleTask"
    />
  </div>
</template>

<script>

import TaskForm from '@/components/TaskForm.vue'
import TaskList from '@/components/TaskList.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomeView',  
  components: { TaskForm, TaskList },
  data() {
    return {
      filter: 'all'
    }
  },
  computed: {
    ...mapGetters(['allTasks', 'completedTasks', 'pendingTasks']),
    filteredTasks() {
      if (this.filter === 'completed') return this.completedTasks
      if (this.filter === 'pending') return this.pendingTasks
      return this.allTasks
    }
  },
  methods: {
    ...mapActions(['addNewTask', 'deleteTaskById', 'toggleTaskStatus']),
    addTask(task) {
      this.addNewTask(task)
    },
    deleteTask(id) {
      this.deleteTaskById(id)
    },
    toggleTask(id) {
      this.toggleTaskStatus(id)
    }
  },
  created() {
    this.$store.dispatch('loadTasks')
  }
}
</script>
