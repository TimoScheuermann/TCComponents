<template>
  <input
    class="vm-slider"
    v-model="innerVal"
    type="range"
    :min="min"
    :max="max"
    :step="step"
    :style="{ '--vm-primary': vmColor, '--vm-container': vmBackground }"
  />
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';

@Component<VMSlider>({
  name: 'vmSlider',
})
export default class VMSlider extends Mixins(VMCProp, VMBgProp) {
  @Prop({ default: 1 }) min!: number;
  @Prop({ default: 10 }) max!: number;
  @Prop({ default: 1 }) step!: number;
  @Prop({ default: 1 }) value!: number;

  public innerVal = this.value || 1;

  @Watch('value', { immediate: true })
  valueChanged(): void {
    if (this.value) this.innerVal = this.value;
  }

  @Watch('innerVal', { immediate: true })
  innerValChanged(): void {
    this.$emit('input', this.innerVal);
  }
}
</script>

<style lang="scss" scoped>
.vm-slider {
  display: flex;
  flex: 1 1 0px;

  appearance: none;
  outline: none;
  height: 7.5px;
  width: calc(100% - 7.5px);
  border-radius: 5px;
  margin: 7.5px 2.5px;

  background: rgba(var(--vm-container), 1);

  &::-webkit-slider-thumb {
    $size: 17.5px;
    border: none;
    -webkit-appearance: none;
    appearance: none;
    width: $size;
    border-radius: $size;
    height: $size;
    background: rgba(var(--vm-primary), 1);
    cursor: grab;
  }
}
</style>
