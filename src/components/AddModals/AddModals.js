import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'components/Input/Input';
import Radio from 'components/Radio/Radio';
import ModalsHeader from 'components/ModalsHeader/ModalsHeaderContainer';
import DateInput from 'components/DateInput/DateInput';
import Button from 'components/Button/Button';
import css from './AddModals.module.css';

const pad = (str) => str.padStart(2, '0');

const dateToString = (date) => {
  const day = pad(String(date.getDate()));
  const month = pad(String(date.getMonth() + 1));
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

// ==========================================>

const AddCost = ({
  values,
  handleChange,
  handleSubmit,
  setFieldValue,
  loader,
  errors,
  touched,
  variant,
  transactionsCategories,
}) => {
  const radioCategoriesCost = transactionsCategories.filter((el) => el.type === 'Expense');

  const radioCategoriesIncome = transactionsCategories.filter((el) => el.type === 'Income');

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
              name="amount"
              error={errors.amount}
              value={values.amount}
              touched={touched.amount}
              onChange={handleChange}
              onBlur={customBlur}
            />
          </div>

          <div className={css.categories__container}>
            <h2 className={css.h2}>Categories</h2>

            <Radio
              blockName="categoryId"
              elements={radioCategories}
              onChange={handleChange}
              formikValue={values.categoryId}
              variant={variant}
            />
          </div>

          <div className={css.components__container}>
            <h2 className={css.h2}>Comments</h2>
            <textarea className={css.textarea} rows="8" name="comment" onChange={handleChange} value={values.comment} />
          </div>
        </div>

        <div className={css.button__container}>
          <Button loading={loader} type="submit" disabled={!values.amount}>
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
    categoryId: variant === 'cost' ? 1 : 10,
  }),

  validationSchema: Yup.object().shape({
    date: Yup.string().required('Chose Date'),
    amount: Yup.string().required('Type Amount'),
  }),

  handleSubmit: (values, { props }) => {
    const { variant, addIncome, addExpense } = props;
    const { categoryId, amount } = values;

    const type = variant === 'cost' ? 'Expense' : 'Income';
    const dateStr = dateToString(values.date);

    const id = String(categoryId);

    const amountN = Number(amount);

    const finalObj = { ...values, type, date: dateStr, categoryId: id, amount: amountN };

    variant === 'cost' ? addExpense(finalObj) : addIncome(finalObj);
  },
})(AddCost);
