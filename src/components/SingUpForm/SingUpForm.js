import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { signUpUser } from 'redux/auth/auth-operations';


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
    <div >
      <form onSubmit={formik.handleSubmit} >
        <label >Name</label>
        <input
          
          id="name"
          name="name"
          label="name"
          placeholder="John"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
         
        />

        <label >Email</label>
        <input
          id="email"
          name="email"
          label="email"
          placeholder="foobar@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
         
        />
        <label >Password</label>
        <input
          
          id="password"
          name="password"
          label="password"
          type="password"
          placeholder="foobar15"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          
        />
        <button type="submit" >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
