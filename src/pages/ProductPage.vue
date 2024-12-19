<script setup lang="ts">
import ProductWidget from '@/components/ProductWidget.vue';
import { useWidgetStore } from '@/stores/widget.store';
import { storeToRefs } from 'pinia';

const widgetStore = useWidgetStore();
const { products } = storeToRefs(widgetStore);
</script>

<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <ProductWidget
        v-for="item in products"
        :key="item.id"
        class="card"
      />
    </v-responsive>
  </v-container>
</template>

<style lang="less" scoped>
</style>
