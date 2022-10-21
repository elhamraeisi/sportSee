import "./RadarChart.css";
import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  Text,
} from "recharts";

const data = [
  {
    subject: "Math",
    A: 120,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    fullMark: 150,
  },
];

function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
  return (
    <Text
      {...rest}
      fontSize={14}
      fontWeight={600}
      verticalAnchor="middle"
      y={y + (y - cy) / 16}
      x={x + (x - cx) / 16}
    >
      {payload.value}
    </Text>
  );
}
function CustomRadarChart() {
  return (
    <RadarChart
      cx={160}
      cy={160}
      outerRadius={100}
      width={320}
      height={320}
      data={data}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis
        tick={(props) => renderPolarAngleAxis(props)}
        tickLine={false}
        dataKey="subject"
        stroke="white"
      />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#E60000"
        fill="#E60000"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}

export default CustomRadarChart;
