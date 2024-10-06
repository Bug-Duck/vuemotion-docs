---
title: Getting Started
---

# Getting Started

---

<script setup>
import Choose from './.vitepress/components/Choose.vue'
import { provide, ref } from 'vue'

const current = ref()

provide('current', current)
</script>

<Choose/>

## Studio {#cli}

Now find the top-level component (`./src/App.vue`), delete the example codes and try to use the following codes:

```vue
<script setup lang="ts">
import { Motion, Rect } from '@vue-motion/lib'
import { useMotion } from '@vue-motion/core'

const { width, height } = useMotion()
width.value = 1600
height.value = 900
</script>

<template>
  <Rect :width="300" :height="300"/>
</template>
```

And then you can find a Rectangle on the screen

Let's add some animations on the rectangle:

```vue
<script setup lang="ts">
import { move, Motion, Rect } from '@vue-motion/lib'
import { useMotion, usePlayer, useWidget } from '@vue-motion/core'

const { width, height } = useMotion()
width.value = 1600
height.value = 900

const { useAnimation } = usePlayer()

const rect = useWidget('rect')
useAnimation(rect)
  .animate(move, {
    offsetX: 200,
    offsetY: 300,
    duartion: 3,
  })
</script>

<template>
  <Rect :width="300" :height="300" wid="rect"/>
</template>
```

First, we add a `wid` attribute on the `Rect` component, and then we called `useWidget` to get the widget, finally we add a animation `move` on it.

Now launch it:

```shell
$ pnpm start
```

If everything is okay, you will see the direct animation in the browser

Now the animation is running, but it looks a little wired, let's add a easing function on it!

VueMotion offers many easing functions you would choose. We choose `easeBounce`:

```vue
<script setup lang="ts">
import { move, Motion, Rect, easeBounce } from '@vue-motion/lib'
import { useMotion, usePlayer, useWidget } from '@vue-motion/core'

const { width, height } = useMotion()
width.value = 1600
height.value = 900

const { useAnimation } = usePlayer()

const rect = useWidget('rect')
useAnimation(rect)
  .animate(move, {
    offsetX: 200,
    offsetY: 300,
    duartion: 3,
    by: easeBounce,
  })
</script>

<template>
  <Rect :width="300" :height="300" wid="rect"/>
</template>
```

Via setting `by` to add easing function on a animation.

## Browser {#browser}

Now find the top-level component (`./src/App.vue`), delete the example codes and try to use the following codes:

```vue
<script setup lang="ts">
import { Motion, Rect } from '@vue-motion/lib'
</script>

<template>
  <Motion :width="1600" :height="900">
    <Rect :width="300" :height="300"/>
  </Motion>
</template>
```

And then you can find a Rectangle on the screen

Congratulations! You have got the usage of widgets, but now the graphs are static, we need let it dynamic.

```vue
<script setup lang="ts">
import { usePlayer } from '@vue-motion/core'

const player = usePlayer()
player.play()
</script>
```

The function will launch the animation with `requestAnimationFrame`.

Let's add some animations on the rectangle:

```vue
<script setup lang="ts">
import { usePlayer, useWidget } from '@vue-motion/core'
import { move, Motion, Rect } from '@vue-motion/lib'

const player = usePlayer()

const rect = useWidget('rect')
player.useAnimation(rect)
  .animate(move, {
    offsetX: 200,
    offsetY: 300,
    duartion: 3,
  })

player.play()
</script>

<template>
  <Motion :width="1600" :height="900">
    <Rect :width="300" :height="300" wid="rect"/>
  </Motion>
</template>
```

First, we add a `wid` attribute on the `Rect` component, and then we called `useWidget` to get the widget, finally we add a animation `move` on it.

Now launch it:

```shell
$ pnpm start
```

If everything is okay, you will see the direct animation in the browser

Now the animation is running, but it looks a little wired, let's add a easing function on it!

VueMotion offers many easing functions you would choose. We choose `easeBounce`:

```vue
<script setup lang="ts">
import { usePlayer, useWidget } from '@vue-motion/core'
import { move, Motion, Rect, easeBounce } from '@vue-motion/lib'

const player = usePlayer()

const rect = useWidget('rect')
player.useAnimation(rect)
  .animate(move, {
    offsetX: 200,
    offsetY: 300,
    by: easeBounce,
    duration: 3,
  })

player.play()
</script>

<template>
  <Motion :width="1600" :height="900">
    <Rect :width="300" :height="300"/>
  </Motion>
</template>

```

Via setting `by` to add easing function on a animation.
