<script setup lang="ts">
import type { ColorType } from '@/types/widget';
import { COLOR_LIST, COMPONENT_COLOR } from '@/shared/const/common.const';
import { i18t } from '@/shared/i18n/i18n';
import ColorSelection from './ColorSelection.vue';
import ProductWidgetBadge from './WidgetBadge.vue';

interface Props {
  id: number
  type: string
  amount: number
  action: string
  active: boolean
  linked: boolean
  selectedColor: ColorType
}

const props = withDefaults(
  defineProps<Props>(),
  {}
);

const emit = defineEmits<{
  (e: 'onLinkChange', isLink: boolean): void
  (e: 'onActiveChange', isActive: boolean): void
  (e: 'onColorChange', color: ColorType): void
}>();

const badgeTitle = computed(() => {
  return `${i18t('this_product')} ${props.action}`;
});

const badgeSubtitle = computed(() => {
  return `${props.amount} ${i18t(`${props.type}_unit`)}`;
});

function handleLinkChange(isLink: boolean) {
  emit('onLinkChange', isLink);
}

function handleActiveChange(isActive: boolean) {
  emit('onActiveChange', isActive);
}

function handleColorChange(color: ColorType) {
  emit('onColorChange', color);
}
</script>

<template>
  <v-card
    class="pa-4"
    width="300"
    :rounded="false"
    variant="flat"
  >
    <ProductWidgetBadge
      :selected-color="props.selectedColor"
      :title="badgeTitle"
      :sub-title="badgeSubtitle"
    />
    <v-card-text class="widget-content">
      <v-row
        justify="space-between"
        align="center"
        no-gutters
      >
        <v-col cols="auto">
          <v-input
            class="label"
            :hide-details="true"
            density="compact"
          >
            {{ i18t('link_to_public_profile') }}
          </v-input>
        </v-col>
        <v-col cols="auto">
          <v-checkbox
            :model-value="props.linked"
            :color="COMPONENT_COLOR"
            :hide-details="true"
            density="compact"
            @update:model-value="val => handleLinkChange(val as boolean)"
          />
        </v-col>
      </v-row>
      <v-row
        justify="space-between"
        align="center"
        no-gutters
      >
        <v-col cols="auto">
          <v-input
            class="label"
            :hide-details="true"
            density="compact"
          >
            {{ i18t('badge_colour') }}
          </v-input>
        </v-col>
        <v-col cols="auto">
          <ColorSelection
            :selected-color="props.selectedColor"
            :color-list="COLOR_LIST"
            @on-color-change="handleColorChange"
          />
        </v-col>
      </v-row>
      <v-row
        justify="space-between"
        align="center"
        no-gutters
      >
        <v-col cols="auto">
          <v-input
            class="label"
            :hide-details="true"
            density="compact"
          >
            {{ i18t('activate_badge') }}
          </v-input>
        </v-col>
        <v-col cols="2">
          <v-switch
            :model-value="props.active"
            :hide-details="true"
            :color="COMPONENT_COLOR"
            density="compact"
            @update:model-value="val => handleActiveChange(val as boolean)"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style lang="less" scoped>
.widget-content {
  padding: 0;
}

.label {
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #3b755f;
}
</style>
