<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">
        {{ t('We are sorry, the requested page does not exist.') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Error404',

  setup() {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { t } = useI18n()

    return { t }
  },
})
</script>
