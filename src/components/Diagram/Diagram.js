import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Button from 'components/Button/Button';
import Style from './Diagram.module.css';

const exampleData = [
  { id: 1, name: 'Main Expenses', value: 8700, color: '#ecb22a' },
  { id: 2, name: 'Food', value: 3800, color: '#e28b20' },
  { id: 3, name: 'Car', value: 1500, color: '#d25925' },
  { id: 4, name: 'Self Care', value: 800, color: '#67b7d0' },
  { id: 5, name: 'Child Care', value: 2208, color: '#5593d7' },
  { id: 6, name: 'House', value: 300, color: '#3e6ba8' },
  { id: 7, name: 'Education', value: 3400, color: '#9cc254' },
  { id: 8, name: 'Entertainment', value: 1230, color: '#73ad57' },
  { id: 9, name: 'Other Expenses', value: 610, color: '#507c3a' },
];

const RADIAN = Math.PI / 180;

const Diagram = ({ data = exampleData }) => {
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.65;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text className={Style.label} fill="white" dominantBaseline="central" x={x} y={y} textAnchor={'middle'}>
        {`${data[index].name}`}
      </text>
    );
  };

  return (
    <>
      <ResponsiveContainer className={Style.diagramContainer} height={'80%'}>
        <PieChart>
          <Pie
            dataKey="value"
            animationBegin={200}
            animationDuration={1000}
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
              <Cell key={entry.id} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className={Style.updateButton}>
        <Button>Update Diagram</Button>
      </div>
    </>
  );
};

Diagram.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      value: PropTypes.number,
      color: PropTypes.string,
    })
  ),
};

export default Diagram;
