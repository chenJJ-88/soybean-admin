// 资产类型
export const assetTypeList: { [key: number]: string } = {
  0: '服务器',
  1: '网络设备及零件',
  2: '核心部件',
  3: 'IDC备件',
  4: '杂物'
};
// 杂物类型
export const oddsTypeList: { [key: number]: string } = {
  0: '服务器整机相关',
  1: '服务器部件相关',
  2: '网络设备相关',
  3: '线缆相关',
  4: '操作工具类',
  5: '其他'
};
// 使用情况
export const useStatusList: { [key: number]: string } = {
  0: '用过可利旧',
  1: '全新可用',
  2: '废旧不可用',
  3: '用过无法判断是否可利用'
};
// 流程状态
export const processStatusList: { [key: number]: string } = {
  0: '暂存',
  1: '业务经理审批中',
  2: '已驳回',
  3: '已取消',
  4: '财务信息确认中',
  5: 'RA确认中',
  6: '资产审批中',
  7: '财务审批中',
  8: '完成',
  9: '已删除'
};
// 操作类型
export const operationTypes: { [key: number]: string } = {
  0: '提交',
  1: '删除',
  2: '保存',
  3: '修改',
  4: '审批',
  5: '驳回',
  8: '撤回',
  99: '暂存'
};
export const processStatusList1: { [key: string]: number } = {
  业务经理审批中: 1,
  财务信息确认中: 2,
  RA确认中: 3,
  资产审批中: 4,
  财务审批中: 5,
  完成: 6,
  已删除: 7
};
// export const approvalStatus
