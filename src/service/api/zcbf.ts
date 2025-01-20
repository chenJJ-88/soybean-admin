import { demoRequest as request } from '../request';
export function getApplyList(page: number, pageSize: number, rest: any) {
  return request({
    url: '/ms-asset-ops/scrap/order/list',
    method: 'POST',
    data: {
      page,
      pageSize,
      ...rest
    }
  });
}
