import "./BarChart.css";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{` ${payload[0].value}Kg`}</p>
        <p className="label">{` ${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

function CustomBarChart({ sessions }) {
  return (
    <ResponsiveContainer width={"100%"} height={200}>
      <BarChart
        barGap={10}
        data={sessions}
        margin={{
          top: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2" vertical={false} />
        <XAxis
          tickLine={false}
          tickMargin={15}
          dataKey="day"
          tickFormatter={(date) => new Date(date).getDate()}
          stroke="#9B9EAC"
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickCount={3}
          type="number"
          orientation="right"
          tickMargin={15}
          stroke="#9B9EAC"
        />

        <Tooltip
          allowEscapeViewBox={{
            x: true,
            y: true,
          }}
          position={{ y: -50 }}
          wrapperStyle={{
            background: "#E60000",
            border: "none",
            outline: "none",
            marginLeft: 30,
          }}
          content={<CustomTooltip />}
        />
        <Bar
          dataKey="kilogram"
          barSize={10}
          radius={[50, 50, 0, 0]}
          fill="#282D30"
        />
        <Bar
          dataKey="calories"
          barSize={10}
          radius={[50, 50, 0, 0]}
          fill="#E60000"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CustomBarChart;
