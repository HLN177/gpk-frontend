<script setup lang="ts">
import { i18t } from '@/shared/i18n/i18n';

// interface Props {
//   title?: string
//   showIcon?: boolean
// }

// const props = withDefaults(
//   defineProps<Props>(),
//   {
//     showIcon: false
//   }
// );
</script>

<template>
  <v-card
    class="mx-auto"
    width="400"
  >
    <v-row justify="space-between" align="center">
      <v-col cols="6">
        <v-input :hide-details="true">
          {{ i18t('link_to_public_profile') }}
        </v-input>
      </v-col>
      <v-col cols="2">
        <v-switch color="green" :hide-details="true" />
      </v-col>
    </v-row>
    <!-- <v-row justify="space-between" align="center">
      <v-col cols="6">
        <v-input>
          {{ i18t('link_to_public_profile') }}
        </v-input>
      </v-col>
      <v-col cols="2">
        <v-switch />
      </v-col>
    </v-row> -->
  </v-card>
</template>

<style lang="less" scoped>
</style>
