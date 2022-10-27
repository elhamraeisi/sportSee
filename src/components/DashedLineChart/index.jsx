import React, { PureComponent } from "react";
import "./DashedLineChart.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import { USER_AVERAGE_SESSIONS } from "../../api/data";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p className="label-line-chart">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

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

    return { sessionLength: item.sessionLength, day: dayLabel };
  });
};

function DashedLineChart({ data }) {
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
          wrapperStyle={{
            background: "#FFF",
            outline: "none",
          }}
          allowEscapeViewBox={true}
          cursor={{
            stroke: "rgba(0, 0, 0, 0.1)",
            strokeWidth: 100,
            strokeLinecap: "square",
          }}
          content={<CustomTooltip />}
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
export default DashedLineChart;
