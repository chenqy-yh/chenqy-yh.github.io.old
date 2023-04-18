import * as echarts from 'echarts'

export function echarts_Radar_category(selector: string, categoryList: categoryMate[]) {
  const raderIndicators = categoryList.map((it) => {
    return {
      name: it.title_en,
      max: 5,
    }
  })
  const seriesData = categoryList.map((it) => it.categoryList.length)

  const myChart = echarts.init(document.querySelector(selector) as HTMLDivElement)
  myChart.setOption({
    title: {
      text: 'Category Radar Chart',
      left: 'center',
      textStyle: {
        fontSize: 25,
        fontWeight: 500,
      },
    },
    tooltip: {
      trigger: 'axis',
    },

    radar: [
      {
        indicator: raderIndicators,
        center: ['50%', '70%'],
        radius: 120,
      },
    ],
    series: [
      {
        type: 'radar',
        tooltip: {
          trigger: 'item',
        },
        areaStyle: {},
        data: [
          {
            value: seriesData,
            name: 'A Software',
          },
        ],
      },
    ],
  })
}

export function echart_wordcloud_tags(selector: string, tags: Tag[]) {
  const el = document.querySelector(selector) as HTMLDivElement
  // 初始化 echarts 实例
  var myChart = echarts.init(el)

  // 定义词云数据
  var data = tags.map((it) => {
    return {
      name: it.title_en,
      value: it.connected_num,
    }
  })

  // 定义配置项
  var option = {
   
    series: [
      {
        type: 'wordCloud',
        sizeRange: [12, 30],
        rotationRange: [0, 0],
        gridSize: 10,
        shape: 'star',
        left:'center',
        top:'5%',
        width: '60%',
        height: '100%',
        textStyle: {
          color: () => {
            return (
              'rgb(' +
              [
                Math.round(Math.random() * 255),
                Math.round(Math.random() * 255),
                Math.round(Math.random() * 255),
              ].join(',') +
              ')'
            )
          },
        },
        emphasis: {
          focus: 'self',
          textStyle: {
            // color:'red',
            // textShadowBlur: 5,
            textShadowColor: '#333',
            fontSize:24,
          },
        },

        data: data,
      },
    ],
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
  myChart.on('click', (params: any) => {
    params.color = 'red'
  })
}
