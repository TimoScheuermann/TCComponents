<template>
  <vm-tabbar class="c-tabbar" v-if="!$store.getters.desktop">
    <vm-tabbar-item icon="ti-house" title="Home" routeName="home" />
    <vm-tabbar-item
      icon="ti-tiles-four-filled"
      title="Components"
      routeName="components"
    />
    <vm-tabbar-item icon="ti-color-fan" title="Colors" routeName="colors" />
    <vm-tabbar-item icon="ti-gears" title="Guide" routeName="guide" />
    <!-- <vm-tabbar-item icon="ti-apple" title="Playground" routeName="playground" /> -->
  </vm-tabbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CTabbar extends Vue {}
</script>
