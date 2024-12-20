<script setup lang="ts">
import ProductWidget from '@/components/ProductWidget.vue';
import { i18t } from '@/shared/i18n/i18n';
import { useWidgetStore } from '@/stores/widget.store';
import { storeToRefs } from 'pinia';

const widgetStore = useWidgetStore();
const { fetchProducts, updateActive, updateLink, updateColor } = widgetStore;
const { products } = storeToRefs(widgetStore);

onMounted(async () => {
  await fetchProducts();
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h5">
          {{ i18t('product_widgets_title') }}
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-divider />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="item in products"
        :key="item.id"
        cols="12"
        sm="6"
        md="4"
      >
        <ProductWidget
          :id="item.id"
          :type="item.type"
          :amount="item.amount"
          :action="item.action"
          :active="item.active"
          :linked="item.linked"
          :selected-color="item.selectedColor"
          class="card"
          @on-active-change="isActive => updateActive(item.id, isActive)"
          @on-link-change="isLink => updateLink(item.id, isLink)"
          @on-color-change="color => updateColor(item.id, color)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="less" scoped>
</style>
