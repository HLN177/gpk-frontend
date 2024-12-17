<script setup>
import { defineProps, ref } from 'vue';

defineProps({
  modelValue: Boolean
});

const isHovered = ref(false);
</script>

<template>
  <label
    class="custom-checkbox"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <input
      type="checkbox"
      v-bind="$attrs"
      class="checkbox-input"
    >
    <!-- <span
      class="checkbox-box"
      :class="{ hover: isHovered }"
    >
      <span v-if="modelValue" class="checkmark" />
    </span> -->
  </label>
</template>

<style scoped>
.custom-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.checkbox-input {
  /* position: absolute; */
  /* opacity: 0; */
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.checkbox-box {
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  position: relative;
}

.checkbox-box.hover::before {
  content: '';
  position: absolute;
  width: 36px;
  height: 36px;
  background-color: rgba(217, 233, 232, 0.6);
  border-radius: 50%;
  z-index: -1;
}

.checkbox-box .checkmark {
  width: 10px;
  height: 10px;
  background-color: #2e5e4e;
  border-radius: 2px;
}
</style>
