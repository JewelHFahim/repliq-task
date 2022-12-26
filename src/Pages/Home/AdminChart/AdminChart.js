import React from 'react';
import Chart from 'react-google-charts';

const AdminChart = () => {

  // Line Chart
const dataLine = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];
 const optionsLine = {
  title: "Weekly Sales",
  curveType: "function",
  legend: { position: "bottom" },
};


// Pi Chart
 const data = [
  ["Task", "Hours per Day"],
  ["Watch", 11],
  ["Shoe", 2],
  ["Jacket", 2],
  ["Sunglass", 2],
  ["Belt", 7],
];
const options = {
  title: "Best Selling Products",
};


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">

    <div>
      <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={dataLine}
      options={optionsLine}
    />
    </div>

    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>

  </div>
  );
};

export default AdminChart;