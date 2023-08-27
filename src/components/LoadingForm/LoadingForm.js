import React from 'react';
import css from './LoadingForm.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/auth-operations';


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(loginUser(values));
    },
  });

  return (
    <div className={css.wrapper}>
      <form onSubmit={formik.handleSubmit} className={css.form}>
        <label className={css.label}>Email</label>
        <input
          className={css.input}
          id="email"
          name="email"
          label="email"
          placeholder="foobar@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
         
        />
        <label className={css.label}>Password</label>
        <input
          className={css.input}
          id="password"
          name="password"
          label="password"
          type="password"
          placeholder="foobar15"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          
        />
        <button
          color="primary"
          variant="contained"
          type="submit"
          className={css.button}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
