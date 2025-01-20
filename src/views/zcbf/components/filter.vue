<script setup lang="ts">
import { computed, defineOptions, reactive } from 'vue';

import { assetTypeList, processStatusList } from '@/utils/enum';
import { useNaiveForm } from '@/hooks/common/form';
const { formRef, validate, restoreValidation } = useNaiveForm();
const assetTypeOptions = computed(() => {
  const arr = Object.entries(assetTypeList).map(([value, label]) => {
    return {
      label,
      value
    };
  });
  return arr;
});
const processStatusListOptins = computed(() => {
  const arr = Object.entries(processStatusList).map(([value, label]) => {
    return {
      label,
      value
    };
  });
  return arr;
});
const model = reactive({
  assetType: '',
  scenario: '',
  status: '',
  createUser: '',
  submitTime: '',
  orderNumber: ''
});
const search = async () => {
  await validate();
};
const reset = async () => {
  await restoreValidation();
};
defineOptions({
  name: 'TableFilter'
});
</script>

<template>
  <NForm ref="formRef" label-placement="left" label-width="100" :model="model">
    <NGrid responsive="screen" item-responsive>
      <NFormItemGi span="24 s:12 m:8" label="资产类型" path="assetType" class="pr-24px">
        <NSelect v-model:value="model.assetType" placeholder="请选择" :options="assetTypeOptions" />
      </NFormItemGi>
      <NFormItemGi span="24 s:12 m:8" label="报废场景" path="scenario" class="pr-24px">
        <NSelect
          v-model:value="model.scenario"
          placeholder="请选择"
          :options="[
            {
              label: '常规报废',
              value: 0
            },
            {
              label: '批量报废',
              value: 1
            }
          ]"
        />
      </NFormItemGi>
      <NFormItemGi span="24 s:12 m:8" label="报废申请状态" path="status" class="pr-24px">
        <NSelect v-model:value="model.status" placeholder="请选择" :options="processStatusListOptins" />
      </NFormItemGi>
      <NFormItemGi span="24 s:12 m:8" label="提单人" path="createUser" class="pr-24px">
        <NInput v-model:value="model.createUser" />
      </NFormItemGi>
      <NFormItemGi span="24 s:12 m:8" label="提单时间" path="submitTime" class="pr-24px">
        <NDatePicker type="datetimerange" clearable />
      </NFormItemGi>
      <NFormItemGi span="24 s:12 m:8" label="报废清单编号" path="orderNumber" class="pr-24px">
        <NInput v-model:value="model.orderNumber" clearable />
      </NFormItemGi>
      <NFormItemGi span="24 m:24 " class="pr-24px">
        <NSpace class="w-full" justify="end">
          <NButton type="primary" @click="search">查询</NButton>
          <NButton @click="reset">重置</NButton>
        </NSpace>
      </NFormItemGi>
    </NGrid>
  </NForm>
</template>

<style lang="scss" scoped></style>
