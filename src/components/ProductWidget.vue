<script setup lang="ts">
import { i18t } from '@/shared/i18n/i18n';

interface Props {
  title?: string
  showIcon?: boolean
}

const props = withDefaults(
  defineProps<Props>(),
  {
    showIcon: false
  }
);
</script>

<template>
  <div class="widgets">
    <div class="badge">
      <img class="logo" src="@/assets/img/logo-g.svg" alt="Logo">
      <div>fff</div>
    </div>
    <div class="row">
      <div class="row-label">
        {{ i18t('link_to_public_profile') }}
      </div>
      <v-checkbox />
    </div>
  </div>
</template>

<style lang="less" scoped>
.widgets {
  min-width: 221px;

  .badge {
    height: 66px;
    margin-top: 20px;
    padding: 10.3px 13.89px 10.3px 11.91px;
    gap: 11.91px;
    border-radius: 5.95px;
    opacity: 0px;
    background: #f2ebdb;

    display: flex;
    // justify-content: center;
    align-items: center;
    .logo {
      width: 40px;
      height: 45px;
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
