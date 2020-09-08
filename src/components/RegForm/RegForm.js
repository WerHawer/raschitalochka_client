import React, { useEffect, useState } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'components/Input/Input';
import css from './RegForm.module.css';

const RegForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, loader, localError }) => {
  const [serverErrorsArr, setServerErrorsArr] = useState([]);

  useEffect(() => {
    if (localError) {
      const localErrorKeys = Object.keys(localError);

      setServerErrorsArr(localErrorKeys);
    }
  }, [localError]);

  const isButtonDisabled = loader || !!(errors.email && touched.email) || !!(errors.password && touched.password);

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <Input
        value={values.email}
        name="email"
        type="email"
        placeholder="E-mail as Login"
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        touched={touched.email}
      />

      <Input
        value={values.password}
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password}
        touched={touched.password}
      />

      <Input
        value={values.password_confirm}
        name="password_confirm"
        type="password"
        placeholder="Password Confirmation"
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password_confirm}
        touched={touched.password_confirm}
      />

      <Input
        value={values.name}
        name="name"
        type="text"
        placeholder="Your Name"
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name}
        touched={touched.name}
      />

      <div className={css.btn_container}>
        <Button type="submit">Register</Button>
      </div>

      {localError && (
        <>
          {serverErrorsArr.map((err) => (
            <span className="inputComment">{localError[err]}</span>
          ))}
        </>
      )}
    </form>
  );
};

export default withFormik({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || '',
    password: props.initialPassword || '',
    password_confirm: props.initialPassword || '',
    name: props.initialPassword || '',
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().required('Password is required'),
    password_confirm: Yup.string()
      .required('confirm password')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  }),

  handleSubmit: (values, { props }) => {
    console.log(values, props);
  },
})(RegForm);
