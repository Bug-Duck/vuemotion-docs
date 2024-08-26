<template>
  <div :style="{
    flexDirection: 'row',
    display: 'flex',
    marginBottom: '2em',
  }">
    <BigButton :style="{
      backgroundColor: 'rgba(0,0,255,0.2)'
    }" @click="current = 'browser'">
      <i class="fa fa-chrome"></i>
      Browser with Vite
    </BigButton>
    <BigButton :style="{
      backgroundColor: 'rgba(255,0,0,0.2)'
    }" @click="current = 'location'">
      <i class="fa fa-desktop"></i>
      Location with CLI
    </BigButton>
    <BigButton :style="{
      backgroundColor: 'rgba(0,255,0,0.2)'
    }" @click="current = 'studio'">
      <i class="fa fa-code"></i>
      Studio with CLI
    </BigButton>
  </div>
</template>

<script setup lang="ts">
import BigButton from './BigButton.vue'
import { inject, Ref } from 'vue';

const current = inject('current') as Ref<string>
</script>