import React from "react";
import "./DashedLineChart.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import PropTypes from "prop-types";

/**
 * Creates a rectangle in the chart where the cursor is located.
 * @param {*} props parameters to render the rectangle
 * @returns
 */
const CustomCursor = (props) => {
  const { points } = props;
  const { x, y } = points[0];
  return (
    <Rectangle
      fill="Black"
      fillOpacity={0.1}
      x={x}
      y={y - 100}
      width={320}
      height={420}
    />
  );
};

/**
 * This function converts day numbers to string label
 * @param {Array} data Array of sessions ({day: Number, sessionLength: Number})
 * @returns Formated day labels
 */
const formatLabels = (data) => {
  return data?.map((item) => {
    let dayLabel = "";
    switch (item.day) {
      case 1:
        dayLabel = "L";
        break;
      case 2:
        dayLabel = "M";
        break;
      case 3:
        dayLabel = "M";
        break;
      case 4:
        dayLabel = "J";
        break;
      case 5:
        dayLabel = "V";
        break;
      case 6:
        dayLabel = "S";
        break;
      case 7:
        dayLabel = "D";
        break;
      default:
        break;
    }
    const length = item.sessionLength > 0 ? item.sessionLength : "0"
    return { sessionLength: length, day: dayLabel };
  });
};
/**
 * This component renders a line chart based on user's average sessions
 * @param {Array} data Array of sessions ({day: Number, sessionLength: Number})
 * @returns The rendered chart
 */
function CustomLineChart({ data }) {
  const formatedData = formatLabels(data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={formatedData}
        margin={{ left: 10, right: 10, bottom: 20 }}
      >
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#fff"
          opacity={0.6}
          strokeWidth={2}
          dot={false}
        />

        <Tooltip
          cursor={<CustomCursor />}
          animationEasing="ease-out"
          labelFormatter={() => ""}
          formatter={(value) => {
            return [value + " min"];
          }}
          contentStyle={{ border: "none", padding: 0 }}
          filterNull={false}
          itemStyle={{
            color: "black",
            backgroundColor: "white",
            padding: 12,
          }}
          wrapperStyle={{
            outline: "none",
          }}
        />
        <XAxis
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.6)"
          axisLine={false}
          dy={10}
          tickLine={false}
          tick={{
            fontSize: 15,
            fontWeight: 500,
          }}
        />
        <YAxis
          dataKey="sessionLength"
          domain={[0, "dataMax + 60"]}
          hide={true}
        />

        <text
          x={39}
          y={58}
          dominantBaseline="middle"
          fontWeight={600}
          fontSize={18}
          fill="#fff"
          opacity={0.5}
        >
          Durée moyenne des
        </text>
        <text
          x={39}
          y={88}
          dominantBaseline="middle"
          fontWeight={600}
          fontSize={18}
          fill="#fff"
          opacity={0.5}
        >
          sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
}

CustomLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CustomLineChart;
