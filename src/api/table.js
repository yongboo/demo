import request from '@/utils/request'
console.log('sdfsfdgfd0-------------------')
console.log(request)
export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
