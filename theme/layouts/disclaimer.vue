<template>
  <div class="slidev-layout disclaimer"><div><slot /></div></div>
</template>

<style scoped>
.disclaimer { display: flex; align-items: center; background: #fce8e6; border-left: 12px solid var(--google-red); }
.disclaimer :deep(h1) { color: #b3261e; margin-bottom: 30px; }
.disclaimer :deep(p) { font-size: 23px; line-height: 1.5; margin: 18px 0; color: var(--google-ink); }
.disclaimer::after { background: var(--google-red); }
</style>
