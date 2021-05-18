import type { RouteRecordRaw } from 'vue-router'

export function assignToRoute({
  routes,
  targetName,
  source,
}: {
  routes: RouteRecordRaw[]
  targetName: string
  source: Partial<RouteRecordRaw>
}): RouteRecordRaw[] {
  const targetIndex = routes.findIndex((route) => route.name === targetName)
  Object.assign(routes[targetIndex], source)
  return routes
}

export function assignToRoutes({
  routes,
  assignments,
}: {
  routes: RouteRecordRaw[]
  assignments: { [targetName: string]: Partial<RouteRecordRaw> }
}): RouteRecordRaw[] {
  for (const [targetName, source] of Object.entries(assignments)) {
    assignToRoute({ routes, targetName, source })
  }
  return routes
}

export function replaceRoute({
  routes,
  oldRouteName,
  newRoute,
}: {
  routes: RouteRecordRaw[]
  oldRouteName: string
  newRoute: RouteRecordRaw
}): RouteRecordRaw[] {
  const routeIndex = routes.findIndex((route) => route.name === oldRouteName)
  routes[routeIndex] = newRoute
  return routes
}

export function replaceRoutes({
  routes,
  replacements,
}: {
  routes: RouteRecordRaw[]
  replacements: { [oldRouteName: string]: RouteRecordRaw }
}): RouteRecordRaw[] {
  for (const [oldRouteName, newRoute] of Object.entries(replacements)) {
    replaceRoute({ routes, oldRouteName, newRoute })
  }
  return routes
}
