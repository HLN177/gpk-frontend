<script setup lang="ts">
import type { ColorType } from '@/types/widget';
import { COLOR_MAP, genBadgeFontColor } from '@/shared/const/common.const';

interface Props {
  selectedColor: ColorType
  title?: string
  subTitle?: string
}

const props = withDefaults(
  defineProps<Props>(),
  {}
);

const fontColor = computed(() => {
  return genBadgeFontColor(props.selectedColor);
});

const iconStr = computed(() => {
  return `icon-${fontColor.value}`;
});
</script>

<template>
  <v-card-item
    class="widget-badge"
    :style="{ background: COLOR_MAP[props.selectedColor] }"
  >
    <template #prepend>
      <span
        class="dynamic-icon"
        :class="iconStr"
      />
    </template>
    <template #title>
      <span
        class="badge-title"
        :style="{ color: COLOR_MAP[fontColor] }"
      >
        {{ props.title }}
      </span>
    </template>
    <template #subtitle>
      <span
        class="badge-subtitle"
        :style="{ color: COLOR_MAP[fontColor] }"
      >
        {{ props.subTitle }}
      </span>
    </template>
  </v-card-item>
</template>

<style lang="less" scoped>
.widget-badge {
  border-radius: 6px;
  padding: 12px 16px;
}

::v-deep(.v-card-subtitle) {
  opacity: 1;
}

.badge-title {
  font-size: 0.8rem;
}

.badge-subtitle {
  font-size: 1.1rem;
  font-weight: 600;
}

.dynamic-icon {
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  width: 2.4rem;
  height: 2.8rem;
}
</style>
