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
import PropTypes from "prop-types";

/**
 * Shows a tooltip in the chart where the cursor is located.
 * @param {boolean} active
 * @param {*} payload Tooltip's numbers (calories and kilogram)
 * @returns
 */
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

/**
 * This component renders a bar chart depending on user input such as daily calorie burn and kilogram.
 * @param {Array} sessions Array of sessions ({day: string, kilogram: Number,calories: Number})
 * @returns
 */
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
          yAxisId={"kilogramAxisId"}
          axisLine={false}
          tickLine={false}
          tickCount={3}
          dataKey="kilogram"
          type="number"
          orientation="right"
          tickMargin={15}
          stroke="#9B9EAC"
        />
        <YAxis
          tick={false}
          yAxisId={"caloriesAxisId"}
          axisLine={false}
          dataKey="calories"
          orientation="right"
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
          yAxisId={"kilogramAxisId"}
          dataKey="kilogram"
          barSize={10}
          radius={[50, 50, 0, 0]}
          fill="#282D30"
        />
        <Bar
          yAxisId={"caloriesAxisId"}
          dataKey="calories"
          barSize={10}
          radius={[50, 50, 0, 0]}
          fill="#E60000"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

CustomBarChart.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CustomBarChart;
