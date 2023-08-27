import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { signUpUser } from 'redux/auth/auth-operations';
import css from './SingUpForm.module.css';


const validationSchema = yup.object({
  name: yup.string('Enter your name').required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const SignUpForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(signUpUser(values));
      resetForm();
    },
  });
  return (
    <div className={css.wrapper}>
      <form onSubmit={formik.handleSubmit} className={css.form}>
        <label className={css.label}>Name</label>
        <input
          className={css.input}
          id="name"
          name="name"
          label="name"
          placeholder="Alex"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <label className={css.label}>Email</label>
        <input
          className={css.input}
          id="email"
          name="email"
          label="email"
          placeholder="Alex@example.com"
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
          placeholder="****"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <button type="submit" className="btn btn-outline-success">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
