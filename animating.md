---
title: Animation
---

# Animation

Okay, let's see how to animate something with VueMotion.

## The Most Convenient Method

After VueMotion v0.7.0, you can use the animation method directly on the widget object.

Draw that it's under the `studio` mode.

```vue
<script setup>
import { Text } from '@vue-motion/lib'
import { usePlayer } from '@vue-motion/core'
import { onMounted } from 'vue'

const { play, useAnimation } = usePlayer()

const text = useWidget<TextOptions>()

onMounted(() => {
  text.move(200, 300)
  text.moveTo(300, 400)
  text.rotateTo(200, {
  duration: 2 // seconds
})
  play()
})
</script>

<template>
  <Text :widget="text">
    Hello VueMotion!
  </Text>
</template>
```

:::tip

The default duration of the animation is 1 second, you can change it by setting the `duration` option.

:::

:::warning

All the animation API are supposed to be called in the `onMounted` hook, because the animation is not executed immediately, it will be executed after the `play` method is called.

:::

The code above will form three steps:

1. Move the text with offset (200, 300)
2. Move the text to absolute position (300, 400)
3. Rotate the text to 200 degrees with duration 2 seconds

In most of cases, you may need to set the timing function, like `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, etc.

You can set the timing function by setting the `by` option.

```typescript
import { easeInOut } from '@vue-motion/lib'

text.rotateTo(200, {
  by: easeInOut
})
```

We provide some common timing functions in the `@vue-motion/lib` package, you can import them directly.

There are references to the timing functions in the [Website](https://www.desmos.com/calculator/je6yxhgmfe) section.

<iframe src="https://www.desmos.com/calculator/je6yxhgmfe" width="100%" height="500"></iframe>

There are some special methods:

### `delay`

The `delay` method is used to set the delay time of the animation.

```typescript
text.delay(1)
```

### `animate`

The `animate` method is used to set the animation.

```typescript
import { move } from '@vue-motion/lib'

// ...

text.animate(move, {
  offsetX: 200,
  offsetY: 300,
  duration: 1
})
```

### `parallel`

This is a important method, it can make the animations run in parallel.

The first way is to pass an array of animations.
```typescript
import { move, moveTo } from '@vue-motion/lib'

// ...

text.parallel(
  [move, {
    offsetX: 200,
    offsetY: 300,
    duration: 1
  }],
  [moveTo, {
    toX: 300,
    toY: 400,
    duration: 1
  }]
)
```

You can also use the function way to set the animation.

```typescript
import { move, moveTo } from '@vue-motion/lib'

// ...

text.parallel(
  () => [move, {
    offsetX: 200,
    offsetY: 300,
    duration: 1
  }],
  () => [moveTo, {
    toX: 300,
    toY: 400,
    duration: 1
  }]
)
```

But if you want to use the new APIs, you can also do this:

```typescript
// ...

text.parallel(
  (widget) => widget.move(200, 300),
  (widget) => widget.moveTo(300, 400)
)
```

The 3 grammar sugar is the same, but the new APIs are more flexible and powerful.

## The Old Method

Before VueMotion v0.7.0, you need to use the `usePlayer` to get a hook called `useAnimation` and manager the animation by it.

```vue
<script setup>
import { usePlayer, useWidget } from '@vue-motion/core'
import { move, moveTo, rotateTo } from '@vue-motion/lib'

const { play, useAnimation } = usePlayer()
const text = useWidget<TextOptions>()

useAnimation(text)
  .animate(move, {
    offsetX: 200,
    offsetY: 300,
    duration: 1
  })
  .animate(moveTo, {
    toX: 300,
    toY: 400,
    duration: 1
  })
  .animate(rotateTo, {
    offset: 200,
    duration: 2
  })

onMounted(() => {
  play()
})
</script>

<template>
  <Text :widget="text">
    Hello VueMotion!
  </Text>
</template>
```

### `delay`

The `delay` method is used to set the delay time of the animation.

```typescript
// ...

useAnimation(text)
  .delay(1)
```

### `exec`

The `exec` method is used to execute the animation.

```typescript
// ...

useAnimation(text)
  .exec(() => {
    console.log('Animation executed!')
  })
```
