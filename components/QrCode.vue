<script setup lang="ts">
import { computed } from 'vue'
import QRCode from 'qrcode'

const props = withDefaults(defineProps<{ url: string; label: string; size?: number }>(), { size: 172 })
// Generate locally and synchronously so exports never wait on an image service.
const code = computed(() => {
  const { modules } = QRCode.create(props.url, { errorCorrectionLevel: 'M' })
  const cells: string[] = []
  for (let y = 0; y < modules.size; y++) {
    for (let x = 0; x < modules.size; x++) {
      if (modules.get(y, x)) cells.push(`M${x + 4},${y + 4}h1v1h-1z`)
    }
  }
  return { extent: modules.size + 8, path: cells.join('') }
})
</script>

<template>
  <figure class="qr-code" :style="{ width: `${size}px` }">
    <svg :width="size" :height="size" :viewBox="`0 0 ${code.extent} ${code.extent}`" role="img" :aria-label="`QR code: ${label}. ${url}`" shape-rendering="crispEdges">
      <rect width="100%" height="100%" fill="#fff" />
      <path :d="code.path" fill="#000" />
    </svg>
    <figcaption><strong>{{ label }}</strong><span>Scan to open</span></figcaption>
  </figure>
</template>

<style scoped>
.qr-code { flex: none; margin: 0; text-align: center; }
.qr-code svg { display: block; max-width: none; }
.qr-code figcaption { font-size: 15px; line-height: 1.25; color: var(--google-ink); }
.qr-code strong, .qr-code span { display: block; }
.qr-code span { margin-top: 4px; font-size: 12px; color: var(--google-muted); }
</style>
