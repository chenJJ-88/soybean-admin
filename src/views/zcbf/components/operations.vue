<script setup lang="ts">
import { computed, ref } from 'vue';
import { NButton, NForm, NModal, NSelect } from 'naive-ui';
import { assetTypeList } from '@/utils/enum';
const showModal = ref(false);
const formRef = ref(null);
const model = ref({ assetType: '0' });
const formRules = {
  assetType: {
    required: true,
    message: '请选择资产类型',
    trigger: 'blur'
  }
};
defineOptions({
  name: 'AssetOperations'
});
const submitCallback = () => {
  // showModal.value = false;
};
const cancelCallback = () => {
  // showModal.value = false;
};
const assetTypeOptions = computed(() => {
  const arr = Object.entries(assetTypeList).map(([value, label]) => {
    return {
      label,
      value
    };
  });
  return arr;
});
</script>

<template>
  <div>
    <NButton type="info" @click="showModal = true">创建报废资产</NButton>
  </div>
  <NModal
    v-model:show="showModal"
    preset="dialog"
    title="确认"
    positive-text="确认"
    negative-text="取消"
    @positive-click="submitCallback"
    @negative-click="cancelCallback"
  >
    <NForm
      ref="formRef"
      label-placement="left"
      require-mark-placement="right-hanging"
      label-width="auto"
      :model="model"
      :rules="formRules"
    >
      <NFormItem label="资产类型" path="assetType">
        <NSelect v-model:value="model.assetType" placeholder="请选择资产类型" :options="assetTypeOptions"></NSelect>
      </NFormItem>
    </NForm>
  </NModal>
</template>

<style lang="scss" scoped></style>
