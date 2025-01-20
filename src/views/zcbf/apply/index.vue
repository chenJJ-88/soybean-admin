<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui';
import { NCollapse, NDataTable, NSpace } from 'naive-ui';
import { computed, onMounted, reactive, ref } from 'vue';
import { getApplyList } from '@/service/api/zcbf';
import { assetTypeList, processStatusList, useStatusList } from '@/utils/enum';
import AssetOperations from '../components/operations.vue';
import TableFilter from '../components/filter.vue';
const data = ref<any[]>([]);
const total = ref(0);
const paginationParams = reactive({
  page: 1,
  pageSize: 10
});

const getApplyListFun = async () => {
  try {
    const res = await getApplyList(paginationParams.page, paginationParams.pageSize, {});
    data.value = res.list;
    total.value = res.total;
  } catch (error: any) {
    window.$message?.error(error.message);
  }
};
const pagination = computed<any>(() => ({
  page: paginationParams.page,
  pageSize: paginationParams.pageSize,
  showSizePicker: true,
  pageSizes: [10, 20, 30, 40],
  showQuickJumper: true,
  showTotal: (t: number) => `共 ${t} 条`,
  pageCount: total,
  onChange: (page: number) => {
    paginationParams.page = page;
    getApplyListFun();
  },
  onUpdatePageSize: (pageSize: number) => {
    paginationParams.pageSize = pageSize;
  }
}));

const columns: DataTableColumns = [
  {
    title: '报废申请ID',
    key: 'id',
    ellipsis: {
      tooltip: true
    },
    fixed: 'left',
    width: 100
  },
  {
    title: '报废清单编号',
    key: 'orderNumber',
    width: 120,
    ellipsis: {
      tooltip: true
    }
  },
  {
    title: '资产类型',
    key: 'assetType',
    ellipsis: {
      tooltip: true
    },
    width: 100,
    render(rowData: any) {
      return assetTypeList[rowData.assetType];
    }
  },
  {
    title: '报废场景',
    key: 'scenario',
    ellipsis: {
      tooltip: true
    },
    width: 100,
    render(rowData: any) {
      return useStatusList[rowData.scenario];
    }
  },
  {
    title: '报废物料数量',
    key: 'assetQuantity',
    ellipsis: {
      tooltip: true
    },
    width: 120
  },
  {
    title: '确认清单与实物一致',
    key: 'consistentConfirm',
    ellipsis: {
      tooltip: true
    },
    width: 180,
    render(rowData) {
      return rowData.consistentConfirm === 1 ? '是' : '否';
    }
  },
  {
    title: '是否已下线',
    key: 'isOffline',
    ellipsis: {
      tooltip: true
    },
    width: 100,
    render(rowData) {
      return rowData.isOffline === 1 ? '是' : '否';
    }
  },
  {
    title: '特殊需求',
    key: 'remark',
    ellipsis: {
      tooltip: true
    },
    width: 100
  },
  {
    title: '存储介质是否已全部拆除',
    key: 'storageDeleted',
    ellipsis: {
      tooltip: true
    },
    width: 120,
    render(rowData) {
      return rowData.storageDeleted === 1 ? '是' : '否';
    }
  },
  {
    title: '是否包含存储介质',
    key: 'containStorage',
    ellipsis: {
      tooltip: true
    },
    width: 180,
    render(rowData) {
      return rowData.containStorage === 1 ? '是' : '否';
    }
  },
  {
    title: '报废申请状态',
    key: 'status',
    ellipsis: {
      tooltip: true
    },
    width: 120,
    render(rowData: any) {
      return processStatusList[rowData.status];
    }
  },
  {
    title: '提单人',
    key: 'createUser',
    ellipsis: {
      tooltip: true
    },
    width: 120
  },
  {
    title: '提单时间',
    key: 'submitTime',
    ellipsis: {
      tooltip: true
    },
    fixed: 'right',
    width: 200
  }
];

onMounted(() => {
  getApplyListFun();
});
</script>

<template>
  <NCard class="m-4">
    <NCollapse>
      <NCollapseItem title="搜索" name="1">
        <TableFilter></TableFilter>
      </NCollapseItem>
    </NCollapse>
  </NCard>
  <!-- <div class="m-4 rounded-2xl bg-white"> -->

  <!-- </div> -->
  <NCard class="m-4">
    <NSpace justify="space-between">
      <AssetOperations></AssetOperations>
    </NSpace>
    <NDataTable scroll-x="1000" :columns :data :bordered="true" :pagination />
  </NCard>
  <!--
 <div class="m-4 rounded-2xl bg-white">

  </div>
--></template>

<style scoped></style>
