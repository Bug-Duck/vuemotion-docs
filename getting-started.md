---
title: Getting Started
---

# Getting Started

Welcome to VueMotion!

With VueMotion, you can rapidly make animations in everywhere. You can use VueMotion to make video clip, animation producing and more cool things you may consider or not consider. Now let's begin the travel!

You can choose three ways to use VueMotion:

<script setup>
import Choose from './.vitepress/components/Choose.vue'
import { provide, ref } from 'vue'

const current = ref()

provide('current', current)
</script>

<Choose/>

# Start with CLI {#cli}

First, you need to globally install the cli tools:

```shell
$ npm i -g @vue-motion/client
```

And find a directory, type the following command:

```shell
$ vuemotion create <your-project-name>
$ cd <your-project-name>
```

And then install the dependencies:

```shell
$ pnpm i
```

Finally, use `start` command to start the studio

```shell
$ pnpm start
```

When you edit the animation to your satistify, you can use `export` command to export the video:

```shell
$ pnpm export 3 # The export duration is 3s.
```

# Start with Browser and Vite {#browser}

Firstly, you need prepare the following develop tools:

- NPM / PNPM / Yarn
- A code editor such as VSCode
- A modern Browser such as Chrome, Firefox, Edge

And then you need initialize them, we use pnpm as the example:

```shell
$ pnpm create vite my-vuemotion-project
```

Choose Vue framework, and then:

```shell
$ cd my-vuemotion-project
$ pnpm install
$ pnpm add @vue-motion/core @vue-motion/lib
```

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

const rect = useWidget('rect').props
player.useAnimation(rect)
  .animate(move, 3, {
    toX: 200,
    toY: 300
  })

player.play()
</script>

<template>
  <Motion :width="1600" :height="900">
    <Rect :width="300" :height="300"/>
  </Motion>
</template>
```

First, we add a `wid` attribute on the `Rect` component, and then we called `useWidget` to get the widget, finally we add a animation `move` on it.

Now launch it:

```shell
$ pnpm dev
```

If everything is okay, you will see the direct animation in the browser

Now the animation is running, but it looks a little wired, let's add a easing function on it!

VueMotion offers many easing functions you would choose. We choose `easeBounce`:

```vue
<script setup lang="ts">
import { usePlayer, useWidget } from '@vue-motion/core'
import { move, Motion, Rect, easeBounce } from '@vue-motion/lib'

const player = usePlayer()

const rect = useWidget('rect').props
player.useAnimation(rect)
  .animate(move, 3, {
    toX: 200,
    toY: 300,
    by: easeBounce
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

Okay! You have handled the basic usage of VueMotion, now continue your adventure!
