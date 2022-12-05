import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";

// import Listens from "./Logic/Listens";
import ListensDays, { ListensHour } from "./Logic/Listens";

import data0 from "./data/StreamingHistory0.json";
import data1 from "./data/StreamingHistory1.json";
import data2 from "./data/StreamingHistory2.json";
import data3 from "./data/StreamingHistory3.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chart2Data, setChart2Data] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});
  const [chart2Options, setChart2Options] = useState({});

  const data = [data0, data1, data2, data3];
  const listensDays = ListensDays(data);
  const listensHour = ListensHour(data);

  const size = data0.length + data1.length + data2.length + data3.length;

  console.log(listensHour);

  useEffect(() => {
    setChartData({
      labels: Object.keys(listensDays),
      datasets: [
        {
          label: "When did I play music?",
          data: Object.values(listensDays),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235, 0.4)",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "When did I play music?",
        },
      },
    });
    setChart2Data({
      labels: [
        "00:00",
        "01:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
      ],
      datasets: [
        {
          label: "At what time did I play music?",
          data: listensHour,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235, 0.4)",
        },
      ],
    });
    setChart2Options({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "At what time did I play music?",
        },
      },
    });
  }, []);

  return (
    <div className="">
      <Bar options={chartOptions} data={chartData} />
      <Bar options={chart2Options} data={chart2Data} />
    </div>
  );
}

export default App;
