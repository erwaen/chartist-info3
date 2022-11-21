import 'chartist/dist/index.css';
import { BarChart, BarChartOptions, BarChartData } from 'chartist';

const data: BarChartData= {
  
  labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
  series: [
    [1, 2, 4, 8, 6, -2, -1, -4, -6, -2],
    [2, 3, 1, 5, 6, -4, -3, -1, -3, -1],
    
  ]
};

const options: BarChartOptions = {
  seriesBarDistance: 15,
  high: 10,
  low: -10,
  
  axisX: {
    labelInterpolationFnc(value, index) {
      return index % 2 === 0 ? value : null;
    }
  }
};

new BarChart('#barChart', data, options );
// new BarChart('#chart2', data, options);
