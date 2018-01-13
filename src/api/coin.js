import request from '@/utils/request'

// 根据货币ID获取该货币的行情数据
export function getCoinDataById(url, params){
  return request({
    url: url,
    method: 'get',
    params
  })
}
