import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';


const useChart = (chartRef: any, options: any) => {
  let myChart: echarts.ECharts | null = null;
  function renderChart() {
    let chart = echarts.getInstanceByDom(chartRef.current);
    if (chart) {
      myChart = chart;
    } else {
      myChart = echarts.init(chartRef.current);
    }
    myChart.setOption(options);
  }

  useEffect(() => {
    renderChart();
  }, [options]);
  useEffect(() => {
    return () => {
      myChart && myChart.dispose();
    };
  }, []);
  return;
};

export {useChart};