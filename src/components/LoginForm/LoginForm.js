import React, { useState, useEffect } from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Logo from 'components/LogoHeader/Logo';

import { withFormik } from 'formik';
import * as Yup from 'yup';
import css from './login.module.css';

const LoginForm = (props) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, loader, localError } = props;
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
      <Logo variant="form" />
      <Input
        className={css.input}
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
      <Button type="submit">Enter</Button>{' '}
      {localError && (
        <>
          {serverErrorsArr.map((err) => (
            <span className="inputComment">{localError[err]}</span>
          ))}
        </>
      )}
      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!here are exist some link */}
    </form>
  );
};

export default withFormik({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || '',
    password: props.initialPassword || '',
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().required('Password is required'),
  }),

  handleSubmit: (values, { props }) => {
    console.log(values, props);
  },
})(LoginForm);
