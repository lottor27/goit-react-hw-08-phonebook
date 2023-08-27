import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import styles from './Register.module.css';
import { useDispatch} from 'react-redux';
import { signUpUserThunk } from 'store/user/operations';


const Register = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
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
    dispatch(signUpUserThunk(values));
  };

  return (
    <div className={styles.registerContainer}>
      <h2>Register</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.registerForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <Field
              type="text"
              id="name"
              name="name"
              className={styles.inputField}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              className={styles.inputField}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              className={styles.inputField}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Register
          </button>
        </Form>
      </Formik>
      <div className={styles.loginPrompt}>
        Already have an account?{' '}
        <Link to="/login" className={styles.loginLink}>
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Register;
