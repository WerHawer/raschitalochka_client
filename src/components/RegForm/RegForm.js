import React, { useEffect, useState } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Input from 'components/Input/Input';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import Button from 'components/Button/Button';
import Logo from 'components/LogoHeader/Logo';
import Link from 'components/Link/LinkCustom';
import css from './RegForm.module.css';

const RegForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, loader, localError }) => {
  const [serverErrorsArr, setServerErrorsArr] = useState([]);

  useEffect(() => {
    if (localError) {
      const localErrorKeys = Object.keys(localError);

      setServerErrorsArr(localErrorKeys);
    }
  }, [localError]);

  const isButtonDisabled = !!(errors.email && touched.email) || !!(errors.password && touched.password);

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <Logo variant="form" />
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
      <ProgressBar value={2} />
      <Input
        value={values.username}
        name="username"
        type="text"
        placeholder="Your Name"
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.username}
        touched={touched.username}
      />

      {localError && (
        <>
          {serverErrorsArr.map((err) => (
            <span className="error" key={err}>
              {localError[err]}
            </span>
          ))}
        </>
      )}

      <div className={css.buttonContainer}>
        <Button type="submit" shadow={false} isLoading={loader} disabled={isButtonDisabled}>
          Register
        </Button>
      </div>

      <Link to="/signin" name="Login" />
    </form>
  );
};

export default withFormik({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || '',
    password: props.initialPassword || '',
    password_confirm: props.initialPassword || '',
    username: props.initialPassword || '',
  }),

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Name is required'),
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().required('Password is required'),
    password_confirm: Yup.string()
      .required('confirm password')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  }),

  handleSubmit: (values, { props }) => {
    const { email, password, username } = values;
    const userData = { email, password, username };
    props.signUp(userData);
  },
})(RegForm);
