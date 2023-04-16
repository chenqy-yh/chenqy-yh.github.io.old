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
