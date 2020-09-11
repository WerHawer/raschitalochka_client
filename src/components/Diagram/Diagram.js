import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Button from 'components/Button/Button';
import Style from './Diagram.module.css';

const data = [
  { name: 'Main Expenses', value: 8700 },
  { name: 'Food', value: 3800 },
  { name: 'Car', value: 1500 },
  { name: 'Self Care', value: 800 },
  { name: 'Child Care', value: 2208 },
  { name: 'House', value: 300 },
  { name: 'Education', value: 3400 },
  { name: 'Entertainment', value: 1230 },
  { name: 'Other Expenses', value: 610 },
];
const COLORS = ['#ecb22a', '#e28b20', '#d25925', '#67b7d0', '#5593d7', '#3e6ba8', '#9cc254', '#73ad57', '#507c3a'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.65;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text className={Style.label} fill="white" dominantBaseline="central" x={x} y={y} textAnchor={'middle'}>
      {/* {`${(percent * 100).toFixed(0)}%`} */}
      {`${data[index].name}`}
    </text>
  );
};

const Diagram = () => (
  <>
    <ResponsiveContainer className={Style.diagramContainer} height={'80%'}>
      <PieChart>
        <Pie
          data={data}
          cx={'50%'}
          cy={'50%'}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={'100%'}
          fill="#8884d8"
          startAngle={-49}
          endAngle={311}
        >
          {data.map((entry, index) => (
            <Cell fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    <Button>Update Diagram</Button>
  </>
);

export default Diagram;
