<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
const endings = ['acts', 'rame', '***']
const current = ref(0)
let timer: ReturnType<typeof setInterval> | undefined
onMounted(() => { timer = setInterval(() => { current.value = (current.value + 1) % endings.length }, 1000) })
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <h1 class="animated-title" aria-label="What the F: Facts, Frame, F***">
    <span>What the </span><span class="word" aria-hidden="true">F<span :key="current" class="ending">{{ endings[current] }}</span></span>
  </h1>
</template>

<style scoped>
.animated-title { display: flex; justify-content: center; gap: .24em; white-space: nowrap; }
.word { display: inline-block; width: 3.2em; text-align: left; color: var(--google-blue); }
.ending { display: inline-block; animation: arrive .2s ease-out; }
@keyframes arrive { from { opacity: 0; transform: translateY(.12em); } to { opacity: 1; transform: translateY(0); } }
@media (prefers-reduced-motion: reduce) { .ending { animation: none; } }
</style>
