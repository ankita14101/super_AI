import "./App.css";
import ReactEcharts from "echarts-for-react";

const option = {
  title: {
    text: "Employee Movement Breakdown",
    subtext: "Breakdown in Detail",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: function (params) {
      var tar = params[1];
      return (
        tar.name +
        "<br/>" +
        "<span style='font-weight: bold'>" +
        tar.seriesName +
        "</span>" +
        " : " +
        "<span style='color: green'>" +
        tar.value +
        "</span>"
      );
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    splitLine: { show: false },
    data: ["Total", "Rent", "Utilities", "Transportation", "Meals", "Other"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Placeholder",
      type: "bar",
      stack: "Total",
      itemStyle: {
        borderColor: "transparent",
        color: "transparent",
      },
      emphasis: {
        itemStyle: {
          borderColor: "transparent",
          color: "transparent",
        },
      },
      data: [0, 400, 600, 394, 394, 0],
    },
    {
      name: "Expansion",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        position: "inside",
      },
      data: [394, 226, 26, 252, 7, 375],
    },
  ],
};

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ReactEcharts
        option={option}
        style={{ width: "80vw", height: "85vh" }}
      ></ReactEcharts>
    </div>
  );
}

export default App;
