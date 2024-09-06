---
title: CLI Tools
---

# CLI Tools

## Studio

### Launch

```shell
$ vuemotion start
```

If you use vuemotion cli to initialize your animation project, you can also use package manager to launch it:

```shell
$ pnpm start
```
```shell
$ npm run start
```

### `--entry`

Set the entry vue file.

default: `src/App.vue`

## Export

We use `Puppeteer` to generate a unreal browser and before this we use `Vite` to compile those codes you write. And then we make some screenshots in the unreal browser. Lastly, we use FFmpeg to generate the video from those frame images, so before you use the export function, please install ffmpeg in advance.

The basic usage is:

```shell
$ vuemotion export <duration>
```

### `--fps`

Set the FPS (Frame per Second).

default: `60`

### `--entry`

Set the entry vue file.

default: `src/App.vue`