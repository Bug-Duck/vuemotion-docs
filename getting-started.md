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

Under the studio mode, you can use our client tool to preview and export your animation, we provide a powerful previewer and export tool.

After creating a new VueMotion project, you can see the file tree like this:

```txt
my-video-project
├── src
│   ├── scenes
│   ├── App.vue
│   ├── main.ts
│   ├── router.ts
│   ├── player.ts
├── package.json
├── ...
```

We use `VueRouter` to manage the routing of the animation so that you can make a series of animations and connect them together to make a complete video. Each scene is a vue file placed in the `scenes` directory.

Let's read the `App.vue` file:

```vue
<script setup lang="ts">
import { useMotion } from '@vue-motion/core'

const { width, height } = useMotion()
width.value = 1600
height.value = 900
</script>

<template>
  <RouterView />
</template>
```

In this file, we use `useMotion` to get the width and height of the animation, and then we set the width and height of the animation to 1600 and 900.

And then let's see the `main.ts` file:

```typescript
import { createApp } from 'vue'
import App from '@vue-motion/app/src/App.vue'
import '@vue-motion/app/src/output.css'
import player from './player'
import router from './router'

createApp(App).use(player).use(router).mount('#app')
```

In this file, we create a vue app and use the `player` and `router` plugins.

The most important thing is the `player` plugin, it provides the player component and the player configuration:

```typescript
import { createPlayer } from '@vue-motion/core'

export default createPlayer({
  studio: true,
  fps: 60,
})
```

Under the studio mode, the `fps` is 60, and the `studio` is `true`. If you just want to use in the browser, you can set the `studio` to `false`. No matter what mode you are using, the `studio` option is required.

The main scene is in the `src/scenes/MainScene.vue` file:

```vue
<script setup lang="ts">
import { usePlayer, useWidget } from '@vue-motion/core'
import type { TextOptions } from '@vue-motion/lib'
import { Group, Image, Text, fadeIn, stroke } from '@vue-motion/lib'
import { onMounted } from 'vue'

const title = useWidget<TextOptions>()
const text = useWidget<TextOptions>()

onMounted(() => {
  const player = usePlayer()
  player.useAnimation(title)
    .animate(stroke, { duration: 1 })
  player.useAnimation(text)
    .delay(1)
    .animate(fadeIn, { duration: 1, from: 0, to: 1 })
  player.play()
})
</script>

<template>
  <Group :y="-200">
    <Image href="/vite.svg" :x="-350" :width="150" :height="150" />
    <Image href="/logo.svg" :x="200" :width="150" :height="150" />
    <Image href="/vue.svg" :x="-75" :width="150" :height="150" />
  </Group>
  <Group>
    <Text :y="10" :font-size="50" :widget="title" border-color="white" fill-color="none">
      Vue + Vite + VueMotion
    </Text>
    <Text :y="70" :font-size="20" :widget="text" :opacity="0">
      Build your animation with Vuejs
    </Text>
  </Group>
</template>
```

In this file, we use the `usePlayer` and `useWidget` functions to get the player and the widget, and then we use the `animate` function to animate the widget.

Last step is to export the animation:

```shell
$ pnpm export 2
```

The animation will be output to the root directory:

<video src="/output.mp4" autoplay loop></video>

## Browser {#browser}

Under the browser mode, you need to create a new vue project and install the `@vue-motion/core` and `@vue-motion/lib` packages.

We suggest you to use Vite to create a new project.

```shell
$ pnpm create vite my-video-project --template template-vue-ts
```

Then install the `@vue-motion/core` and `@vue-motion/lib` packages:

```shell
$ cd my-video-project
$ pnpm install
$ pnpm add @vue-motion/core @vue-motion/lib
```

Later, you will get a file tree like this:

```txt
my-video-project
├── src
│   ├── main.ts
│   ├── App.vue
├── package.json
├── ...
```

Firstly we need to add the player to the `main.ts` file:

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { createPlayer } from '@vue-motion/core'

createApp(App).use(createPlayer({
  studio: false,
  fps: 60,
})).mount('#app')
```

Notice that we set the `studio` to `false`.

In browser mode, we need to import the component `<Motion>` package and use it in the `App.vue` file:

```vue
<script setup>
import { Motion } from '@vue-motion/lib'
</script>

<template>
  <Motion :width="1600" :height="900">
    <Group>
      <Text :y="10" :font-size="50" wid="title" border-color="white" fill-color="none">
        Hello VueMotion!
      </Text>
    </Group>
  </Motion>
</template>
```

Okay, that's it! You just need to play the animation by calling the `play` function:

```typescript
const player = usePlayer()
onMounted(() => {
  player.play()
})
```

:::warning

You are supposed to play the animation in the `onMounted` hook, because the player needs to wait for the DOM to be mounted before it can play the animation, otherwise the animation wouldn't work.

:::
