<template>
  <tr class="vm-tr">
    <slot />
  </tr>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component<VMTr>({
  name: 'vmTr',
})
export default class VMTr extends Vue {}
</script>

<style lang="scss" scoped>
.vm-tr {
  text-align: inherit;
  padding: 5px;

  transition: 0.1s ease-in-out;
  &:hover {
    background: rgba(var(--vm-border), 1);
  }
}
</style>
