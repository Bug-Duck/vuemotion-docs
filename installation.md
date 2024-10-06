---
title: Installation
---

# Installation

Welcome to VueMotion!

With VueMotion, you can rapidly make animations in everywhere. You can use VueMotion to make video clip, animation producing and more cool things you may consider or not consider. Now let's begin the travel!

You can choose two ways to use VueMotion, we provide process-mode and browser-inline-mode:

<script setup>
import Choose from './.vitepress/components/Choose.vue'
import { provide, ref } from 'vue'

const current = ref()

provide('current', current)
</script>

<Choose/>

# Start with Studio {#cli}

Process-mode is usually used with location when you want to process video and animations. You can use VueMotion Studio to make animations and video clips.

VueMotion provide you with a powerful CLI tool to preview and export the animation, before you use it, please make sure you have installed Node.js and npm.

And then we need to globally install the package `@vue-motion/client`:

```shell
$ npm i -g @vue-motion/client
```

Now you can use `vuemotion` command to create a new project:

```shell
$ vuemotion create my-video-project
```

Then you can enter the project directory and start your adventure:

```shell
$ cd my-project
$ npm install
$ npm run start
```

The last step will open the browser and show a studio page.

When you are done, you can export the animation and video:

```shell
$ npm run export 3
```

It will export a video under the root directory with duration of 3 seconds. We use Vite to compile it and use pupeteer to render it. Lastly we use FFmpeg to convert it to mp4 format.

# Start with Browser and Vite {#browser}

Browser-inline-mode allows you insert the vuemotion application into your webpage.

```shell
$ npm create vite@latest my-video-project
$ # Choose your favorite framework.
$ cd my-video-project
$ npm i @vue-motion/lib @vue-motion/core
$ npm i
```

And then we need to use `<Motion>` component to wrap your content:

```vue
<script setup lang="ts">
import { onMounted } from 'vue'
import { Motion, Text } from '@vue-motion/lib'
import { usePlayer } from '@vue-motion/core'

const { play } = usePlayer()
onMounted(() => {
  play()
})
</script>

<template>
  <Motion :width="1600" :height="900">
    <Text>Hello world</Text>
  </Motion>
</template>
```

Then you can use the `vuemotion` command to start the server:

```shell
$ npm run dev
```

It will open the browser and show a studio page.

Okay! You have handled the basic usage of VueMotion, now continue your adventure!
