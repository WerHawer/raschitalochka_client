import React, { useEffect, useState } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import css from './LoginForm.module.css';

const LoginForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, loader, localError }) => {
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

      <div className={css.btn_container}>
        <Button type="submit">Login</Button>
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
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().required('Password is required'),
  }),

  handleSubmit: (values, { props }) => {
    console.log(values, props);
  },
})(LoginForm);
