<script setup lang="ts">
import QrCode from './QrCode.vue'
defineProps<{ outlet: string; date: string; headline: string; translation: string; label: string; focus: string; detail: string; source: string }>()
</script>

<template>
  <article class="article-comparison">
    <header><strong>{{ outlet }}</strong><span>{{ date }}</span></header>
    <p class="edition">{{ label }}</p>
    <h2 lang="zh-TW">{{ headline }}</h2>
    <p class="translation">“{{ translation }}”</p>
    <div class="article-footer">
      <div class="reading"><span>Our reading of the framing</span><h3>{{ focus }}</h3><p>{{ detail }}</p></div>
      <QrCode :url="source" label="Source article" />
    </div>
  </article>
</template>

<style scoped>
.article-comparison header { display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid var(--google-border); padding-bottom: 14px; }
header strong { font-size: 25px; } header span, .edition { color: var(--google-muted); font-size: 14px; }
.article-comparison .edition { margin: 18px 0 8px; }
.article-comparison h2 { font-size: 29px; line-height: 1.4; margin-bottom: 12px; }
.article-comparison .translation { font-size: 25px; line-height: 1.35; min-height: 68px; }
.article-footer { display: grid; grid-template-columns: minmax(0, 1fr) 172px; gap: 28px; align-items: center; margin-top: 12px; }
.reading { border-left: 4px solid var(--google-blue); padding-left: 20px; }
.reading > span { font-size: 13px; color: var(--google-muted); }
.reading h3 { font-size: 25px; margin: 4px 0; color: var(--google-blue-dark); }
.reading p { font-size: 17px; line-height: 1.4; }
</style>
