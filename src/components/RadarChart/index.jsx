import "./RadarChart.css";
import React from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, Text } from "recharts";

function renderPolarAngleAxis({ payload, x, y, cx, cy, ...props }) {
  return (
    <Text
      {...props}
      fontSize={12}
      fontWeight={600}
      verticalAnchor="middle"
      y={y + (y - cy) / 32}
      x={x + (x - cx) / 32}
    >
      {payload.value}
    </Text>
  );
}
function CustomRadarChart({ data }) {
  const formatedData = data?.data.map((object) => {
    return {
      value: object.value,
      kind: data.kind[object.kind],
    };
  });

  return (
    <RadarChart
      cx={160}
      cy={160}
      outerRadius={90}
      width={320}
      height={320}
      data={formatedData}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis
        tick={(props) => renderPolarAngleAxis(props)}
        tickLine={false}
        dataKey="kind"
        stroke="white"
      />
      <Radar
        name="Mike"
        dataKey="value"
        stroke="#E60000"
        fill="#E60000"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}

export default CustomRadarChart;
