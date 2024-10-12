---
title: "MathFunction"
layout: doc
aside: false
---

<script setup>
  import {DividePage} from 'vitepress-theme-api';
</script>

# MathFunction

---

## Creat function

### Parameters

> | name      | type     | data type             | description                                                             | default value |
> | --------- | -------- | --------------------- | ----------------------------------------------------------------------- | ------------- |
> | fn        | required | (x: number) => number | Calculation method of the mathematical function.                        |               |
> | ranges    | required | [number, number]      | The range of the function.                                              |               |
> | domain    | optional | [number, number]      | The domain of the function                                              | [0, 0]        |
> | divisionX | optional | number                | Used to control the granularity of the function graph along the x-axis. | 100           |
> | divisionY | optional | number                | Used to control the granularity of the function graph along the y-axis. | 100           |
> | color     | optional | string                | Used to set the color of the function graph during rendering.           | white         |
> | width     | optional | number                | Used to control the width of the function graph in the drawing area.    | 1             |
> | fillColor | optional | string                | Used to set the fill color of the function graph during rendering.      | none          |

### Example code snippet

> ```html
> <MathFunction
>   :fn="(x:any) => Math.sin(x)"
>   color="skyblue"
>   :ranges="[0, 0]"
>   :domain="[0,  Math.PI*2]"
>   wid="fn1"
> />
> ```
