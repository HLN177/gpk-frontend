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
  maxWidth?: number | string
}

const props = withDefaults(
  defineProps<Props>(),
  {
    maxWidth: 500
  }
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
    class="product-widget pa-4"
    :rounded="true"
    :border="6"
    :max-width="props.maxWidth"
    variant="flat"
    :hover="true"
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
          <v-tooltip
            activator="hover"
            :open-delay="200"
            :close-delay="1500"
            location="top"
            content-class="custom-tooltip"
          >
            <template #default>
              <div class="tooltip-content">
                <p>
                  {{ i18t('link_profile_tooltip') }}
                </p>
                <a href="#" class="tooltip-link" :title="i18t('view_public_profile')">{{ i18t('view_public_profile') }}</a>
              </div>
            </template>
            <template #activator="{ props: activeProp }">
              <v-input
                class="label"
                :hide-details="true"
                density="compact"
              >
                <template #default>
                  {{ i18t('link_to_public_profile') }}
                </template>
                <template #append>
                  <v-icon size="xsmall" icon="mdi-information-outline" v-bind="activeProp" />
                </template>
              </v-input>
            </template>
          </v-tooltip>
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
        <v-col cols="auto">
          <v-switch
            class="custom-switch"
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

<style>
.custom-tooltip {
  background-color: #ffffff !important;
}
</style>

<style lang="less" scoped>
.product-widget {
  background-color: inherit;
}

.widget-content {
  padding: 0;
}

.label {
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #3b755f;
}

.label ::v-deep(.v-input__append) {
  margin-inline-start: 0 !important;
}

.tooltip-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  max-width: 250px;
}

.tooltip-link {
  display: block;
  margin-top: 8px;
  color: #3b755f;
  font-weight: bold;
  text-decoration: none;
}

.tooltip-link:hover {
  text-decoration: underline;
}

.custom-switch {
  position: relative;
  right: 5px;
}

.custom-switch ::v-deep(.v-switch__thumb) {
  background-color: #ffffff !important;
}
.custom-switch ::v-deep(.v-switch__track) {
  opacity: 1 !important;
  background-color: #ffffff;
  border: 0.5px solid #afc6bd;
  height: 23px;
}
</style>
