<template>
  <div :style="{
    flexDirection: 'row',
    display: 'flex',
    marginBottom: '2em',
  }">
    <a href="#browser" :style="{
      display: 'flex',
      flexGrow: 1,
      textAlign: 'center',
      justifyItems: 'center',
      alignItems: 'center',
    }">
      <i class="fa fa-chrome"></i>
      Browser with Vite
    </a>
    <a href="#cli" :style="{
      display: 'flex',
      flexGrow: 1,
      textAlign: 'center',
      justifyItems: 'center',
      alignItems: 'center',
    }">
      <i class="fa fa-desktop"></i>
      Location with CLI
    </a>
    <a href="#studio" :style="{
      display: 'flex',
      flexGrow: 1,
      textAlign: 'center',
      justifyItems: 'center',
      alignItems: 'center'
    }">
      <i class="fa fa-code"></i>
      Studio with CLI
    </a>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue';

const current = inject('current') as Ref<string>
</script>