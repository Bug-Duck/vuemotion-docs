---
title: Router
---

# Work with VueRouter

You can also manage your animation scene with VueRouter. VueRouter offers great functions for your animation, in the long video producing work, it will be very useful.

The file tree is as followings:

```txt
- src
| - router.ts
| - App.vue
| - Scene1.vue
| - Scene2.vue
- ...
```
```ts
// router.ts
import { createWebHistory, createRouter } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/scene1',
      name: 'scene1',
      component: () => import('./Scene1.vue')
    },
    {
      path: '/scene2',
      name: 'scene2',
      component: () => import('./Scene2.vue')
    },
   ]
})

```

and input followings in `App.vue`:

```vue
<template>
  <Motion>
    <RouterView></RouterView>
  </Motion>
</template>
```

Now you can write your animation in `Scene1.vue` and `Scene2.vue`!
