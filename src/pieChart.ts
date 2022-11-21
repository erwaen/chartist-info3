import 'chartist/dist/index.css';
import { PieChart, PieChartData, PieChartOptions , ResponsiveOptions } from 'chartist';


const data : PieChartData= {
  labels: ["Bananas", "Apples", "Grapes"],
  series: [20, 15, 40]
};

const options: PieChartOptions = {
  labelInterpolationFnc: (value) => String(value),
  
  
};


new PieChart("#pieChart", data, options);

new PieChart(
  "#pieChart2",
  {
    series: [20, 10, 30, 40]
  },
  {
    donut: true,
    donutWidth: 60,
    startAngle: 270,
    showLabel: true
  }
);


