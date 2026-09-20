<script setup lang="ts">
defineProps<{ outlet: string; date: string; headline: string; translation: string; label: string; focus: string; detail: string; source: string }>()
</script>

<template>
  <article class="article-comparison">
    <header><strong>{{ outlet }}</strong><span>{{ date }}</span></header>
    <p class="edition">{{ label }}</p>
    <h2 lang="zh-TW">{{ headline }}</h2>
    <p class="translation">“{{ translation }}”</p>
    <div class="reading"><span>Our reading of the framing</span><h3>{{ focus }}</h3><p>{{ detail }}</p></div>
    <a :href="source" target="_blank" rel="noopener noreferrer">Read the source article ↗</a>
  </article>
</template>

<style scoped>
.article-comparison header { display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid var(--google-border); padding-bottom: 14px; }
header strong { font-size: 25px; } header span, .edition { color: var(--google-muted); font-size: 14px; }
.article-comparison .edition { margin: 18px 0 8px; }
.article-comparison h2 { font-size: 29px; line-height: 1.4; margin-bottom: 12px; }
.article-comparison .translation { font-size: 25px; line-height: 1.35; min-height: 68px; }
.reading { border-left: 4px solid var(--google-blue); padding-left: 20px; margin: 25px 0 16px; }
.reading > span { font-size: 13px; color: var(--google-muted); }
.reading h3 { font-size: 25px; margin: 4px 0; color: var(--google-blue-dark); }
.reading p { font-size: 17px; line-height: 1.4; }
.article-comparison > a { font-size: 13px; }
</style>
