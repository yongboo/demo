import Highcharts from 'highcharts/highstock'
import '@/scripts/lib/highcharts-zh_CN.src.js'
// import darkUnica from 'highcharts/themes/dark-unica.js'
import { appleData } from '@/mock/coin/apple'

export function createKline(container, seriesOptions) {
  var data = appleData
  var ohlc, volume
  ohlc = []
  volume = []
  const dataLength = data.length
  for (let i = 0; i < dataLength; i++) {
    ohlc.push([
      data[i][0], // the date
      data[i][1] // open
      // data[i][2], // high
      // data[i][3], // low
      // data[i][4] // close
    ])
    volume.push([
      data[i][0], // the date
      data[i][5] // the volume
    ])
  }
  // create the chart
  Highcharts.stockChart(container, {
    rangeSelector: {
      selected: 6, // 默认选择的查询范围
      inputDateFormat: '%Y-%m-%d'
    },
    title: {
      text: ''
    },
    plotOptions: {
      series: {
        showInLegend: true
      }
    },
    tooltip: {
      // pointFormat: '{series.name}: <b>{point.y}</b><br/>',
      split: false, // 提示信息是否分散
      shared: true
    },
    xAxis: {

    },
    yAxis: [{
      labels: {
        align: 'right',
        x: -3
      },
      title: {
        text: '股价'
      },
      height: '60%',
      lineWidth: 2
    }, {
      labels: {
        align: 'right',
        x: -3
      },
      title: {
        text: '成交量'
      },
      top: '65%',
      height: '20%',
      offset: 0,
      lineWidth: 2
    }],
    series: [{
      type: 'line', // 展示蜡烛图就设置为candlestick
      name: '价格',
      // color: 'green', // 范围选择区块的颜色
      // lineColor: 'red', // k线默认颜色, 可以根据当天的涨跌设置红绿两色
      // upColor: 'red',
      // upLineColor: 'red', // 上升蜡烛线颜色
      tooltip: {
        valueSuffix: '$'
      },
      navigatorOptions: {
        color: Highcharts.getOptions().colors[1]
      },
      data: ohlc
    }, {
      type: 'column',
      name: '成交量',
      data: volume,
      tooltip: {
        valueSuffix: ''
      },
      yAxis: 1
    }]
  })
}

