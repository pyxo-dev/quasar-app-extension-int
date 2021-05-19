<template>
  <q-page v-if="postLc" class="q-px-lg">
    <h4 v-html="postLc.title"></h4>
    <div class="text-body1" v-html="postLc.body"></div>
  </q-page>
</template>

<script>
import { qint } from 'src/boot/int'
import { defineComponent, onBeforeUnmount, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

// Current index post localization.
const postLc = ref()

export default defineComponent({
  name: 'IndexPostLc',

  setup() {
    const i18n = useI18n()
    const { locale: langTag } = i18n
    const { langTags } = qint.conf

    const paths = {}
    langTags.forEach((lt) => (paths[lt] = '/'))

    // Set the hreflang link tags.
    const link = qint.hreflangPaths({ paths, xDefaultLangTag: langTags[0] })
    if (link) qint.meta.value = { link }

    onBeforeUnmount(() => {
      // Reset the hreflang link tags.
      qint.meta.value = {}
    })

    // When the language tag changes, update the post localization.
    watch(
      langTag,
      (langTag) => {
        updatePostLc(langTag)
      },
      { immediate: true }
    )

    return { postLc }
  },
})

async function updatePostLc(langTag) {
  try {
    postLc.value = (
      await import(`../../../content/${langTag}/index.js`)
    ).default
  } catch (err) {
    console.error(err)
  }
}
</script>
