import "./RadialBarChart.css";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

function CustomRadialBarChart({ data }) {
  return (
    <RadialBarChart
      width={343}
      height={343}
      data={data}
      cx={160}
      cy={160}
      innerRadius={100}
      //outerRadius={18}
      barSize={15}
      startAngle={210}
      endAngle={-30}
    >
      <PolarAngleAxis
        type="number"
        domain={[0, 1]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBar
        fill="#E60000"
        background
        dataKey="value"
        cornerRadius={30 / 2}
      />
      <text
        x={39}
        y={38}
        dominantBaseline="middle"
        fontWeight={600}
        fontSize={20}
      >
        Score
      </text>
      <text x={125} y={160} fontWeight={700} fontSize={40} fill="#282D30">
        {data[0].value * 100 + "%"}
      </text>

      <text
        x={115}
        y={190}
        fontWeight={500}
        fontSize={27}
        fill="#74798C"
        dominantBaseline="middle"
      >
        de votre
      </text>

      <text
        x={117}
        y={230}
        fontWeight={500}
        fontSize={27}
        fill="#74798C"
        dominantBaseline="middle"
      >
        objectif
      </text>
    </RadialBarChart>
  );
}

export default CustomRadialBarChart;
