import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
// components/Button/Button
import Input from 'components/Input/Input';
import Radio from 'components/Radio/Radio';
import Button from '../Button/Button';
import ModalsHeader from 'components/ModalsHeader/ModalsHeaderContainer';
import DateInput from 'components/DateInput/DateInput';
import css from './AddModals.module.css';

const radioCategoriesCost = [
  { id: 1, value: 'Main Expenses' },
  { id: 2, value: 'Food' },
  { id: 3, value: 'Car' },
  { id: 4, value: 'Self Care' },
  { id: 5, value: 'Child Care' },
  { id: 6, value: 'Education' },
  { id: 7, value: 'Entertainment' },
];

const radioCategoriesIncome = [
  { id: 1, value: 'Regular Income' },
  { id: 2, value: 'Irregular Income' },
];

const pad = (str) => str.padStart(2, '0');

const dateToString = (date) => {
  const day = pad(String(date.getDate()));
  const month = pad(String(date.getMonth() + 1));
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

// ==========================================>

const AddCost = ({ values, handleChange, handleSubmit, setFieldValue, loader, errors, touched, variant }) => {
  const valueToFixed = (value) => {
    if (value) return Number(value).toFixed(2);

    return value;
  };

  const customBlur = (e) => {
    values[e.target.name] = valueToFixed(e.target.value);
  };

  const headerName = variant === 'cost' ? 'add cost' : 'add income';

  const inputVariant = variant === 'cost' ? 'amount' : 'income';

  const inputPlaceholder = variant === 'cost' ? 'Amount.00' : 'Income';

  const radioCategories = variant === 'cost' ? radioCategoriesCost : radioCategoriesIncome;

  return (
    <div className={css.wrapper}>
      <ModalsHeader name={headerName} />

      <form onSubmit={handleSubmit}>
        <div className={css.body__wrapper}>
          <div className={css.inputs__container}>
            <DateInput selected={values.date} onChange={(date) => setFieldValue('date', date)} name="date" />

            <Input
              type="number"
              placeholder={inputPlaceholder}
              variant={inputVariant}
              name="summ"
              error={errors.summ}
              value={values.summ}
              touched={touched.summ}
              onChange={handleChange}
              onBlur={customBlur}
            />
          </div>

          <div className={css.categories__container}>
            <h2 className={css.h2}>Categories</h2>

            <Radio
              name="categories"
              elements={radioCategories}
              onChange={(e) => {
                handleChange(e);
                console.log(values.categories);
              }}
              formikValue={values.categories}
              variant={variant}
            />
          </div>

          <div className={css.components__container}>
            <h2 className={css.h2}>Comments</h2>
            <textarea className={css.textarea} rows="8" name="comment" onChange={handleChange} value={values.comment} />
          </div>
        </div>

        <div className={css.button__container}>
          <Button loading={loader} type="submit" disabled={!values.summ}>
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: ({ variant }) => ({
    date: new Date(),
    categories: variant === 'cost' ? 'Main Expenses' : 'Regular Income',
  }),

  validationSchema: Yup.object().shape({
    date: Yup.string().required('Chose Date'),
    summ: Yup.string().required('Type Amount'),
  }),

  handleSubmit: (values, { props }) => {
    console.log('values', values);

    const dateStr = dateToString(values.date);
  },
})(AddCost);
