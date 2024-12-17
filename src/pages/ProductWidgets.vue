<script setup lang="ts">
import CustomCheckbox from '@/components/CustomCheckbox.vue';
import { i18t } from '@/shared/i18n/i18n';
import { useProductStore } from '@/stores/product.store.ts';

const productStore = useProductStore();
const isChecked = ref(false);

onMounted(async () => {
  // const result = await productStore.fetchProducts();
  // console.log(result);
});

function handleChange(event) {
  console.log('Checkbox状态变更:', event.target.checked);
}
</script>

<template>
  <div class="product">
    <div class="title">
      {{ i18t('title') }}
    </div>
    <hr>
    <div class="content">
      <CustomCheckbox v-model="isChecked" @change="handleChange" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.product {
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
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  .content {
  }
}
</style>
