<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import css from './LoginForm.module.css';

const LoginForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, loader, localError }) => {
=======
import React, { useState, useEffect } from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Logo from 'components/LogoHeader/Logo';

import { withFormik } from 'formik';
import * as Yup from 'yup';
import css from './login.module.css';

const LoginForm = (props) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, loader, localError } = props;
>>>>>>> e95d78bfca5de5ec88d522a082c442526a325de2
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
<<<<<<< HEAD
      <Input
=======
      <Logo variant="form" />
      <Input
        className={css.input}
>>>>>>> e95d78bfca5de5ec88d522a082c442526a325de2
        value={values.email}
        name="email"
        type="email"
        placeholder="E-mail as Login"
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        touched={touched.email}
      />
<<<<<<< HEAD

=======
>>>>>>> e95d78bfca5de5ec88d522a082c442526a325de2
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
<<<<<<< HEAD

      <div className={css.btn_container}>
        <Button type="submit">Login</Button>
      </div>

=======
      <Button type="submit">Enter</Button>{' '}
>>>>>>> e95d78bfca5de5ec88d522a082c442526a325de2
      {localError && (
        <>
          {serverErrorsArr.map((err) => (
            <span className="inputComment">{localError[err]}</span>
          ))}
        </>
      )}
<<<<<<< HEAD
=======
      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!here are exist some link , below - example*/}
      <a href="#">Register</a>
>>>>>>> e95d78bfca5de5ec88d522a082c442526a325de2
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
