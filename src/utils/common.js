/**
 * @param {货币符号} symbol
 * @param {数额} num
 */
export function formatCurrency(symbol, num) {
  num = parseFloat(num) > 1000000 ? parseFloat(num.split('.')[0]) : parseFloat(num)
  let unit = ''
  if (num - 10000000 > 0) {
    num = num / 100000000
    unit = '亿'
  } else {
    num = num / 10000
    unit = '万'
  }
  return symbol + dealNumber(num) + unit
}

var dealNumber = function(money) {
  if (money && money != null) {
    money = String(money)
    var left = money.split('.')[0]
    var right = money.split('.')[1]
    right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.00'
    var temp = left.split('').reverse().join('').match(/(\d{1,3})/g)
    return (Number(money) < 0 ? '-' : '') + temp.join(',').split('').reverse().join('') + right
  } else if (money === 0) {
    return '0.00'
  } else {
    return ''
  }
}
