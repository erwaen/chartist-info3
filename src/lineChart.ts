import "chartist/dist/index.css";
import { LineChart, LineChartData, LineChartOptions, Interpolation, FixedScaleAxis } from "chartist";

const data: LineChartData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [[5, 9, 7, 8, 5, 3, 5, 4]],
};

const options: LineChartOptions = {
  low: 0,
  showArea: true,
};

new LineChart("#lineChart", data, options);

// Line Chart 2

new LineChart(
  "#lineChart2",
  {
    series: [{
      name: "series-1",
      data: [
        { x: 1, y: 1 },
        { x: 3, y: 3 },
        { x: 5, y: undefined },
        { x: 6, y: 1 },
        { x: 7, y: null },
        { x: 8, y: 4 },
        { x: 9, y: 4 },
      ]
    }
    ],
  },
  {
    fullWidth: true,
    chartPadding: {
      right: 10,
    },
    lineSmooth: Interpolation.cardinal({
      fillHoles: true,
    }),
    axisX: {
      type: FixedScaleAxis,
      divisor: 5,
      labelInterpolationFnc: (value) => {
        return value + "k";
      },
    },
    low: 0,
  }
);
