import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Button from 'components/Button/Button';
import colors from 'libs/colors';
import Style from './Diagram.module.css';

const exampleData = [{ categoryId: 0, totalAmount: 100 }];

const RADIAN = Math.PI / 180;

const Diagram = ({ data, transactionsCategories }) => {
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.65;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    console.log('data', data);
    console.log('transactionsCategories', transactionsCategories);
    console.log(
      'label',
      transactionsCategories.find((item) => item.id === Number(data[index].categoryId))
    );

    return (
      <text className={Style.label} fill="white" dominantBaseline="central" x={x} y={y} textAnchor={'middle'}>
        {`${transactionsCategories.find((item) => item.id === Number(data[index].categoryId)).name}`}
      </text>
    );
  };

  return (
    <>
      <ResponsiveContainer className={Style.diagramContainer} height={'80%'}>
        <PieChart>
          <Pie
            dataKey="totalAmount"
            animationBegin={200}
            animationDuration={1000}
            data={data.length > 0 ? data : exampleData}
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
              <Cell key={entry.categoryId} fill={colors[index]} />
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
