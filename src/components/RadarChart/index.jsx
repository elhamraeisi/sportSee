import "./RadarChart.css";
import React from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, Text } from "recharts";
import PropTypes from "prop-types";

/**
 * Renders labels of the radar chart
 * @param {*} props parameters for rendering the label
 * @returns
 */
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
/**
 * Renders a radar chart of user's performance
 * @param {*} param0 user's performance data
 * @returns
 */
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

CustomRadarChart.propTypes = {
  data: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    kind: PropTypes.objectOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        kind: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
};
export default CustomRadarChart;
