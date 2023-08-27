import React from 'react';
import css from './LoadingForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/auth-operations';



// const validationSchema = Yup.object({
//   email: Yup.string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: Yup.string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
// });

const LoginForm = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        'Password must be at least 8 characters long and contain at least one letter and one number'
      ),
  });

  const handleSubmit = values => {
    console.log(values);
    dispatch(loginUser(values));
  };

  return (
    <div className={css.wrapper}>
      <h2>Enter</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div>
            <label htmlFor="email" className={css.label}>
              Email:
            </label>
            <Field type="email" id="email" name="email" className={css.input} />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password" className={css.label}>
              Password:
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className={css.input}
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit" className="btn btn-outline-success">
            Enter
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
