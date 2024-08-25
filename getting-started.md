---
title: Getting Started
---

# Getting Started

Welcome to VueMotion!

With VueMotion, you can rapidly make animations in everywhere. You can use VueMotion to make video clip, animation producing and more cool things you may consider or not consider. Now let's begin the travel!

You can choose three ways to use VueMotion

<script setup>
import Choose from './.vitepress/components/Choose.vue'
import { provide, ref } from 'vue'

const current = ref()

provide('current', current)
</script>

<Choose/>

<div v-if="current === 'browser'">
Firstly, you need prepare the following tools:

- NPM / PNPM / Yarn
- A code editor such as VSCode
- A modern Browser such as Chrome, Firefox, Edge

And then you need initialize them:

``
</div>

<div v-if="current === 'location'">
Developing...
</div>

<div v-if="current === 'studio'">
Developing...
</div>
