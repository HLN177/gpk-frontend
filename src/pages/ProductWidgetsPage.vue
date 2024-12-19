<script setup lang="ts">
import ProductWidget from '@/components/ProductWidget.vue';
import { i18t } from '@/shared/i18n/i18n';
import { useWidgetStore } from '@/stores/widget.store';
import { storeToRefs } from 'pinia';

const widgetStore = useWidgetStore();
const { products } = storeToRefs(widgetStore);

onMounted(async () => {
  // const result = await productStore.fetchProducts();
  // console.log(result);
});
</script>

<template>
  <div class="product-widgets">
    <div class="title">
      {{ i18t('product_widgets_title') }}
    </div>
    <hr>
    <div class="content">
      <ProductWidget
        v-for="item in products"
        :key="item.id"
        class="card"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  display: flex;
  justify-content: space-between;
}
.product-widgets {
  min-width: 851px;
  padding: 36px;
  border-radius: 8px;
  opacity: 0px;
  background-color: #f9f9f9;
  box-shadow: 0px 0.78px 2.99px 0px #00000003;
  box-shadow: 0px 3.42px 6.19px 0px #00000005;
  box-shadow: 0px 8.4px 12.35px 0px #00000006;
  box-shadow: 0px 16.18px 24.21px 0px #00000008;
  box-shadow: 0px 27.22px 44.51px 0px #0000000a;
  box-shadow: 0px 42px 76px 0px #0000000d;

  .title {
    //styleName: H3;
    font-family: Cabin;
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  .content {
  }
}
</style>
