import "./RadialBarChart.css";
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

const data = [
  { name: 'A', x: 1, fill: '#E60000' },
  //{ name: 'B', x: 2, fill: 'yellow' },
  // { name: 'C', x: 3, fill: 'aqua' },
  // { name: 'D', x: 4, fill: 'blue' },
  // { name: 'E', x: 5, fill: 'orange' },
  // { name: 'F', x: 6, fill: 'red' },
  // { name: 'G', x: 7, fill: 'black' },
  // { name: 'H', x: 8, fill: 'purple' },
  // { name: 'I', x: 9, fill: 'gray' },
];

function CustomRadialBarChart() {
  return (
    <div className={{ fill: 'green' }}>
      <RadialBarChart width={343} height={343} data={data}
        cx={160}
        cy={160}
        innerRadius={100}
        //outerRadius={18}
        barSize={15}
        startAngle={210}
        endAngle={0}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}

        />
        <RadialBar
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
        <text
          x={125}
          y={160}
          fontWeight={700}
          fontSize={40}
          fill='#282D30'
        >
          12%
        </text>
      </RadialBarChart>
    </div>

  );
};



export default CustomRadialBarChart;
