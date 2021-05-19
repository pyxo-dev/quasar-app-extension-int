import type { Qint } from '@pyxo/qint'
import { createQint } from '@pyxo/qint'
import { boot } from 'quasar/wrappers'
import { getAppRoutes } from 'src/../src-int/router/routes'
import { getQintConf } from 'src/int/conf'
import { augmentGlobals } from 'src/int/helpers'

export let qint: Qint

// Uncomment `ssrContext` if using ssr mode.
export default boot(({ app, router /*, ssrContext */ }) => {
  qint = createQint(getQintConf() /*, ssrContext */)

  app.use(qint.i18nPlugin)

  // Add the app routes to the router.
  getAppRoutes(qint).forEach((route) => router.addRoute(route))
})

augmentGlobals()
