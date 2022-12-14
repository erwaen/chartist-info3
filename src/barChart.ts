import 'chartist/dist/index.css';
import { BarChart, BarChartOptions, BarChartData } from 'chartist';
// import javascript code
import {dataJson} from './csvToJson.js';

interface Data {
  year: number;
  Enero: number;
  Febrero: number;
  Marzo: number;
  Abril: number;
  Mayo: number;
  Junio: number;
  Julio: number;

}

// loop through the data and create a new array of objects
let meses = [];
let dataY = [];

// Cargo los meses en una lista y los datos en una lista de listas
for (let i = 0; i < dataJson.length; i++) {
    let newDataY = [];
    for (let [key, value] of Object.entries(dataJson[i])) {   // console.log(key, value);
      if (i === 1 && key !== 'year'){
        meses.push(key);
      }
      if (key !== 'year'){
        newDataY.push(value); 
      }
    }
    dataY.push(newDataY);
}

console.log(dataY);


const data1: BarChartData= {
  
  labels: meses,
  series: [
    dataY[0],
  ]
};

const options1: BarChartOptions = {
  seriesBarDistance: 1,
  high: 2000,
  low: -10,

  axisX: {
    labelInterpolationFnc(value, index) {
      return index % 1 === 0 ? value : null;
    }
  }
};

new BarChart('#barChartfinal1', data1, options1);


const data2: BarChartData= {
  labels: meses,
  series: [
    dataY[1],
  ]
};

const options2: BarChartOptions = {
  seriesBarDistance: 1,
  high: 2000,
  low: -10,

  axisX: {
    labelInterpolationFnc(value, index) {
      return index % 1 === 0 ? value : null;
    }
  }
};

new BarChart('#barChartfinal2', data2, options2);

const data3: BarChartData= {
  labels: meses,
  series: [
    dataY[2],
  ]
};

const options3: BarChartOptions = {
  seriesBarDistance: 10,
  high: 2000,
  low: -10,
  axisX: {
    labelInterpolationFnc(value, index) {
      return index % 1 === 0 ? value : null;
    }
  }
};

new BarChart('#barChartfinal3', data3, options3);
// new BarChart('#chart2', data, options);
