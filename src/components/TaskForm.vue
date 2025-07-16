<template>
  <form @submit.prevent="submitTask">
    <input type="text" v-model="title" placeholder="Yeni görev..." />
    <button type="submit">Ekle</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    submitTask() {
      if (!this.title.trim()) return
      const newTask = {
        id: Date.now(),
        title: this.title,
        completed: false
      }
      this.$emit('add', newTask)
      this.title = ''
    }
  }
}
</script>
