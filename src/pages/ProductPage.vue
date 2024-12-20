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
  <v-container class="product-container">
    <v-row>
      <v-col cols="12">
        <h2 class="page-title">
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
.page-title {
  font-weight: 700;
  font-size: 1.5rem !important;
  line-height: 1.333;
}

.product-container {
  max-width: 1180px;
  padding: 36px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 0.78px 2.99px 0px #00000003;
  box-shadow: 0px 3.42px 6.19px 0px #00000005;
  box-shadow: 0px 8.4px 12.35px 0px #00000006;
  box-shadow: 0px 16.18px 24.21px 0px #00000008;
  box-shadow: 0px 27.22px 44.51px 0px #0000000a;
  box-shadow: 0px 42px 76px 0px #0000000d;
}
</style>
