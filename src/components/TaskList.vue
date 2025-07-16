<template>
  <ul>
    <li
      v-for="task in tasks"
      :key="task.id"
      :style="{ textDecoration: task.completed ? 'line-through' : 'none' }"
    >
      {{ task.title }}
      <button @click="$emit('toggle', task.id)">✔</button>
      <button @click="$emit('delete', task.id)">🗑</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tasks: Array
  }
}
</script>
