import type { Qint } from '@pyxo/qint'
import type { LocaleMessageDictionary, VueMessageType } from 'vue-i18n'
import { RouteRecordRaw } from 'vue-router'

export function getChildRoutes({
  langTag,
  qint,
}: {
  langTag: string
  qint: Qint
}): RouteRecordRaw[] {
  const prefix = langTag.replace(/-/g, '')

  // Localized blog path.
  const lcBlogPath = qint.localizeUrlPath({
    urlPath: 'blog',
    langTag,
    msgKey: 'ps',
  })

  return [
    {
      path: '',
      name: `${prefix}Index`,
      component: () => import('../../../pages/common/index/Index.vue'),
    },

    {
      path: lcBlogPath,
      name: `${prefix}Blog`,
      component: () =>
        import('../../../pages/common/blog/post-lc-list/PostLcList.vue'),
      beforeEnter: [
        async () => {
          // Example of lazy loading route specific translation messages.
          await qint.loadVueI18nMsg({
            langTag,
            importMsg: async (langTag) =>
              (<{ default: LocaleMessageDictionary<VueMessageType> }>(
                await import(`../../../i18n/route-msgs/common/blog/${langTag}`)
              )).default,
          })
        },
      ],
    },

    {
      path: `${lcBlogPath}/:slug`,
      name: `${prefix}BlogPostLc`,
      component: () => import('../../../pages/common/blog/post-lc/PostLc.vue'),
    },
  ]
}
