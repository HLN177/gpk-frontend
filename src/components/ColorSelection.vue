<script setup lang="ts">
import type { Color, ColorType } from '@/types/widget';

interface Props {
  colorList: [ColorType, Color][]
  selectedColor: ColorType
}

const props = withDefaults(
  defineProps<Props>(),
  {}
);

const emit = defineEmits<{
  (e: 'onColorChange', color: ColorType): void
}>();

function handleColorChange(color: ColorType) {
  emit('onColorChange', color);
}
</script>

<template>
  <div
    v-for="([name, color]) in props.colorList"
    :key="name"
    class="color-selector"
    :class="{
      selected: props.selectedColor === name,
    }"
    :style="{ backgroundColor: color, width: '14px', height: '14px' }"
    @click="handleColorChange(name)"
  />
</template>

<style lang="less" scoped>
.color-selector {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.color-selector:hover {
  opacity: 0.8;
}

.color-selector.selected {
  border: 1px solid #666;
}
</style>
