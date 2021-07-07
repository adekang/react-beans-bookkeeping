import React, {useRef} from 'react';
import {useChart} from 'hooks/useChart';
import {useRecords} from 'hooks/useRecords';
import {useTags} from 'hooks/useTag';


function IncomeLib() {
  const chartRef = useRef(null);
  const {income, computeAmount} = useRecords();
  const {getName} = useTags();
  let myData = [{
    value: 0 as number,
    name: '暂无记录' as string
  }];

  const totalAmount = computeAmount('+');
  const amount = income.map(t => t.amount/totalAmount);
  const tagIds = income.map(t => t.tagIds);
  let tagName = [];
  for (let i = 0; i < tagIds.length; i++) {
    for (let j = 0; j < tagIds[i].length; j++) {
      tagName.push(getName(tagIds[i][j]));
    }
  }
  for (let i = 0; i < amount.length; i++) {
    myData.push({value: amount[i], name: tagName[i]});
  }

  const options = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {d}%'
    },
    series: [
      {
        type: 'pie',
        center: ['50%', '50%'],
        data: myData,
        label: {show: false}
      },
    ]
  };

  useChart(chartRef, options);

  return (
    <>
      <div style={{width: '350px', height: '350px'}} ref={chartRef}/>
    </>
  );
}


export {IncomeLib} ;


