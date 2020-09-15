import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Button from 'components/Button/Button';
import colors from 'libs/colors';
import Style from './Diagram.module.css';

const exampleData = [
  { id: 1, name: 'Main Expenses', value: 8700 },
  { id: 2, name: 'Food', value: 3800 },
  { id: 3, name: 'Car', value: 1500 },
  // { id: 4, name: 'Self Care', value: 800 },
  // { id: 5, name: 'Child Care', value: 2208 },
  // { id: 6, name: 'House', value: 300 },
  // { id: 7, name: 'Education', value: 3400 },
  // { id: 8, name: 'Entertainment', value: 1230 },
  // { id: 9, name: 'Other Expenses', value: 610 },
];

const RADIAN = Math.PI / 180;

const Diagram = ({ data }) => {
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
            data={data ? data : exampleData}
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
              <Cell key={entry.id} fill={colors[index]} />
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
